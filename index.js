const fs = require("fs");
const path = require("path");
const notifier = require("node-notifier");
const { COUNTRIES, WATCH_CATEGORIES, PRODUCTS, PRODUCT_GROUPS, VALID_CATEGORIES, FAVORITES, US_STATES, STORES_BY_STATE } = require("./constants");

const STORES_JSON_PATH = path.join(__dirname, "stores.json");

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
  Accept: "application/json",
};

// --- URL and fetch helpers ---

function buildUrl(storePath, partsQuery, locationQuery) {
  return `https://www.apple.com${storePath}/shop/retail/pickup-message?pl=true&${partsQuery}&${locationQuery}`;
}

async function fetchOneStore(storePath, partsQuery, storeNumber) {
  const url = buildUrl(storePath, partsQuery, `store=${storeNumber}`);
  const response = await fetch(url, { headers: HEADERS });
  if (!response.ok) {
    throw new Error(`Apple API returned HTTP ${response.status} for store ${storeNumber}`);
  }
  const data = await response.json();
  return data.body?.stores || [];
}

async function fetchByLocation(storePath, partsQuery, location) {
  const url = buildUrl(storePath, partsQuery, `location=${encodeURIComponent(location)}`);
  const response = await fetch(url, { headers: HEADERS });
  if (!response.ok) {
    throw new Error(`Apple API returned HTTP ${response.status} for location ${location}`);
  }
  const data = await response.json();
  return data.body?.stores || [];
}

async function fetchMultipleStores(storePath, partsQuery, storeNumbers) {
  const results = await Promise.all(
    storeNumbers.map((sn) =>
      fetchOneStore(storePath, partsQuery, sn).catch((err) => {
        console.error(`Warning: ${err.message}`);
        return [];
      })
    )
  );

  // Merge and dedupe by storeNumber
  const seen = new Set();
  const merged = [];
  for (const stores of results) {
    for (const store of stores) {
      if (!seen.has(store.storeNumber)) {
        seen.add(store.storeNumber);
        merged.push(store);
      }
    }
  }
  return merged;
}

function displayResults(stores, skuList, favorites) {
  if (!stores || stores.length === 0) {
    console.error("Error: No stores found");
    process.exit(1);
  }

  let skuCounter = {};

  console.log("Inventory");
  console.log("---------");

  const statusArray = stores.flatMap((store) => {
    const name = store.storeName;
    const productStatus = [];

    for (const [sku, description] of Object.entries(skuList)) {
      const product = store.partsAvailability[sku];
      if (!product) continue;

      const status = product.pickupDisplay;
      productStatus.push(`${description}: ${status}`);

      if (status === "available") {
        console.log(`  ${description} in stock at ${name}`);
        skuCounter[sku] = (skuCounter[sku] || 0) + 1;
      }
    }

    return [{ name, products: productStatus }];
  });

  const inventory = Object.entries(skuCounter)
    .map(([key, value]) => `${skuList[key]}: ${value}`)
    .join(" | ");

  console.log("\nInventory counts");
  console.log("----------------");
  console.log(inventory.replaceAll(" | ", "\n") || "None found");

  const hasFavorite = Object.keys(skuCounter).some((r) =>
    favorites.includes(r)
  );

  let notificationMessage;
  if (inventory) {
    notificationMessage = `${hasFavorite ? "FOUND FAVORITE! " : ""}Some models found: ${inventory}`;
  } else {
    notificationMessage = "No models found.";
    console.log(notificationMessage);
  }

  notifier.notify({
    title: "Apple Store Availability",
    message: notificationMessage,
    sound: !!inventory,
    timeout: false,
  });

  console.log(`\nChecked ${statusArray.length} stores`);
  console.log(`Generated: ${new Date().toLocaleString()}`);
}

// --- Product category resolution ---

function resolveCategories(productArg) {
  const requested = productArg.split(",").map((s) => s.trim().toLowerCase());
  const resolved = new Set();

  for (const name of requested) {
    if (PRODUCT_GROUPS[name]) {
      // Group alias (e.g., "iphone" → all iPhone categories)
      for (const cat of PRODUCT_GROUPS[name]) {
        resolved.add(cat);
      }
    } else if (PRODUCTS[name]) {
      // Individual category (e.g., "macbook-pro")
      resolved.add(name);
    } else {
      console.error(`Unknown product category: ${name}`);
      console.error(`Valid categories: ${[...VALID_CATEGORIES].sort().join(", ")}`);
      process.exit(1);
    }
  }

  return [...resolved];
}

function buildSkuList(categories, skuCode, watchSkuCode) {
  const skuList = {};
  for (const cat of categories) {
    const catProducts = PRODUCTS[cat];
    if (!catProducts) continue;
    const suffix = WATCH_CATEGORIES.has(cat) ? watchSkuCode : skuCode;
    for (const [baseCode, description] of Object.entries(catProducts)) {
      skuList[`${baseCode}${suffix}/A`] = description;
    }
  }
  return skuList;
}

// --- Store map refresh ---

async function refreshStoreMap() {
  const zips = [
    "10001", "90210", "60601", "77001", "98105", "85001", "30301", "02101",
    "33101", "80201", "55401", "84101", "97201", "15201", "27601", "06101",
    "19101", "20001", "96801", "83701", "66101", "40201", "70112", "04101",
    "48201", "63101", "68101", "89101", "03101", "87101", "73101", "29201",
    "57101", "05401", "25301", "95814", "92101", "94102", "78201", "37201",
  ];

  console.log("Refreshing store map from Apple API...");

  const partsQuery = "parts.0=MDE14LL%2FA";
  const allStores = new Map();

  for (const zip of zips) {
    try {
      const stores = await fetchByLocation("", partsQuery, zip);
      for (const s of stores) {
        if (s.storeNumber && s.state) {
          allStores.set(s.storeNumber, {
            storeNumber: s.storeNumber,
            storeName: s.storeName,
            state: s.state,
            city: s.city,
          });
        }
      }
    } catch {
      // Skip failed zips
    }
    await new Promise((r) => setTimeout(r, 200));
  }

  const byState = {};
  for (const s of allStores.values()) {
    if (!byState[s.state]) byState[s.state] = [];
    byState[s.state].push(s.storeNumber);
  }

  for (const state of Object.keys(byState)) {
    byState[state].sort();
  }

  const sorted = Object.fromEntries(
    Object.entries(byState).sort(([a], [b]) => a.localeCompare(b))
  );

  fs.writeFileSync(STORES_JSON_PATH, JSON.stringify(sorted, null, 2) + "\n");
  console.log(`Wrote ${allStores.size} stores across ${Object.keys(sorted).length} states to stores.json`);
}

// --- Store map loading ---

function loadStoreMap() {
  try {
    const data = fs.readFileSync(STORES_JSON_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return STORES_BY_STATE;
  }
}

function getStoresForState(stateCode) {
  const map = loadStoreMap();
  const stores = map[stateCode];
  if (!stores || stores.length === 0) {
    console.error(`No Apple Stores found for state: ${stateCode}`);
    console.error("Try running: node index.js --refresh-stores");
    process.exit(1);
  }
  return stores;
}

// --- Arg parsing and main ---

function printUsage() {
  console.error("Usage: node index.js <store|zip|state|list> [country] [--product <categories>]");
  console.error("");
  console.error("  node index.js R072                           # single store, all products");
  console.error("  node index.js 98105                          # zip code / location");
  console.error("  node index.js WA                             # all stores in a US state");
  console.error("  node index.js R072,R003,R077                 # comma-separated store list");
  console.error("  node index.js R072 --product iphone          # only iPhones");
  console.error("  node index.js WA --product macbook-pro,ipad  # specific categories");
  console.error("  node index.js --refresh-stores               # rebuild stores.json");
  console.error("");
  console.error("Product groups: iphone, ipad, mac, watch, airpods");
  console.error(`Individual:     ${Object.keys(PRODUCTS).sort().join(", ")}`);
  console.error(`Countries:      ${Object.keys(COUNTRIES).join(", ")}`);
}

function parseArgs(args) {
  const result = {
    target: null,
    country: "US",
    productFilter: null,
    refreshStores: false,
  };

  if (args.includes("--refresh-stores")) {
    result.refreshStores = true;
    return result;
  }

  const positional = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--product" && i + 1 < args.length) {
      result.productFilter = args[i + 1];
      i++; // skip next arg
    } else {
      positional.push(args[i]);
    }
  }

  if (positional.length > 0) result.target = positional[0];
  if (positional.length > 1) result.country = positional[1].toUpperCase();

  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const parsed = parseArgs(args);

  if (parsed.refreshStores) {
    await refreshStoreMap();
    return;
  }

  if (!parsed.target) {
    printUsage();
    process.exit(1);
  }

  const country = parsed.country;
  const countryConfig = COUNTRIES[country];
  if (!countryConfig) {
    console.error(`Unsupported country: ${country}`);
    console.error(`Supported: ${Object.keys(COUNTRIES).join(", ")}`);
    process.exit(1);
  }

  const { storePath, skuCode, watchSkuCode } = countryConfig;

  // Resolve product categories
  const categories = parsed.productFilter
    ? resolveCategories(parsed.productFilter)
    : Object.keys(PRODUCTS);

  const skuList = buildSkuList(categories, skuCode, watchSkuCode);
  const skuCount = Object.keys(skuList).length;

  if (skuCount === 0) {
    console.error("No SKUs matched the selected categories");
    process.exit(1);
  }

  console.log(`Checking ${skuCount} SKUs across ${categories.length} categories\n`);

  // Build favorites list for this country
  const favorites = FAVORITES.map((base) => `${base}${skuCode}/A`);

  // Build query string
  const partsQuery = Object.keys(skuList)
    .map((k, i) => `parts.${i}=${encodeURIComponent(k)}`)
    .join("&");

  let stores;
  const target = parsed.target;

  if (target.includes(",")) {
    const storeNumbers = target.split(",").map((s) => s.trim());
    console.log(`Checking ${storeNumbers.length} stores: ${storeNumbers.join(", ")}\n`);
    stores = await fetchMultipleStores(storePath, partsQuery, storeNumbers);
  } else if (/^r\d+$/i.test(target)) {
    stores = await fetchOneStore(storePath, partsQuery, target);
  } else if (target.length === 2 && /^[A-Z]{2}$/.test(target.toUpperCase()) && US_STATES.has(target.toUpperCase())) {
    const stateCode = target.toUpperCase();
    const storeNumbers = getStoresForState(stateCode);
    console.log(`Checking all ${storeNumbers.length} Apple Stores in ${stateCode}: ${storeNumbers.join(", ")}\n`);
    stores = await fetchMultipleStores(storePath, partsQuery, storeNumbers);
  } else {
    stores = await fetchByLocation(storePath, partsQuery, target);
  }

  displayResults(stores, skuList, favorites);
}

main().catch((err) => {
  console.error("Error checking inventory:", err.message);
  process.exit(1);
});

# Apple Store Inventory Checker

Check Apple Store in-store pickup availability for iPhones, iPads, Macs, Apple Watches, and AirPods.

> **Originally created by [@worthbak](https://github.com/worthbak/apple-store-inventory-checker).** Also available as a macOS app: [InventoryWatch by @worthbak](https://worthbak.github.io/inventory-checker-app/)

## What's New (v3.0)

- **All Apple products** — iPhones, iPads, Macs, Apple Watches, AirPods (~390 SKUs)
- **State-wide search** — query all Apple Stores in a US state at once
- **Multi-store search** — comma-separated store numbers
- **Product filter** — `--product` flag to check specific categories
- **Store map refresh** — `--refresh-stores` to rebuild state-to-store mapping
- **Modernized** — native `fetch()`, no deprecated dependencies, Node.js 18+

## Installation

```sh
npm install
```

Requires Node.js 18+.

## Usage

```sh
# Single store
node index.js R072

# Zip code / location
node index.js 98105

# All stores in a US state
node index.js WA

# Comma-separated store list
node index.js R072,R003,R077

# Filter by product category
node index.js R072 --product iphone
node index.js WA --product mac-mini
node index.js 98105 --product watch,airpods

# Rebuild state-to-store mapping from Apple's API
node index.js --refresh-stores
```

## Product Categories

### Group aliases (shorthand for multiple categories)

| Group | Includes |
|-------|----------|
| `iphone` | 17 Pro Max, 17 Pro, Air, 17, 17e, 16, 16 Plus |
| `ipad` | Pro 11", Pro 13", Air 11", Air 13", mini, iPad |
| `mac` | MacBook Pro, MacBook Air, Mac mini, iMac, Mac Studio |
| `watch` | Series 11, Ultra 3, SE |
| `airpods` | AirPods 4, Pro 3, Max |

### Individual categories

`iphone-17-pro-max`, `iphone-17-pro`, `iphone-air`, `iphone-17`, `iphone-17e`, `iphone-16`, `iphone-16-plus`, `ipad-pro-11`, `ipad-pro-13`, `ipad-air-11`, `ipad-air-13`, `ipad-mini`, `ipad`, `macbook-pro`, `macbook-air`, `mac-mini`, `imac`, `mac-studio`, `watch-series-11`, `watch-ultra-3`, `watch-se`, `airpods`

## Supported Countries

| Country | Argument |
|---------|----------|
| United States | `US` (default) |
| Canada | `CA` |
| Australia | `AU` |
| Germany | `DE` |
| United Kingdom | `UK` |
| South Korea | `KR` |
| Hong Kong | `HK` |

```sh
# Check a UK store for MacBook Pros
node index.js R092 UK --product macbook-pro
```

## Polling in the Background

Run on a schedule with cron:

```sh
*/5 * * * * cd ~/apple-store-inventory-checker && node index.js WA --product mac-mini >> ~/inventory.log 2>&1
```

## Notes

- **iPad Pro and iPad Air** are not available for in-store pickup via Apple's API — they appear to be online-order only
- **CTO configurations** (custom storage/RAM) aren't stocked in stores and won't appear in results
- Running without `--product` queries all ~390 SKUs, which may be slow — use the filter for faster checks
- The `--refresh-stores` command queries Apple's API to rebuild the state-to-store mapping; the built-in map covers 235 stores across 43 states

## API Reference

This tool queries Apple's undocumented retail pickup API:

```
GET https://www.apple.com/shop/retail/pickup-message
  ?pl=true
  &parts.0=MDE14LL%2FA    # URL-encoded part number
  &parts.1=MDE54LL%2FA
  &store=R072              # Store number
  &location=98105          # OR zip code (one or the other)
```

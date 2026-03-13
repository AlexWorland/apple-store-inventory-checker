// Country configurations for Apple Store regions
// storePath: URL path prefix for the country's Apple Store
// skuCode: country suffix appended to base SKU codes
const COUNTRIES = {
  US: { storePath: "", skuCode: "LL", watchSkuCode: "LW" },
  CA: { storePath: "/ca", skuCode: "LL", watchSkuCode: "LW" },
  AU: { storePath: "/au", skuCode: "X", watchSkuCode: "X" },
  DE: { storePath: "/de", skuCode: "D", watchSkuCode: "D" },
  UK: { storePath: "/uk", skuCode: "B", watchSkuCode: "B" },
  KR: { storePath: "/kr", skuCode: "KH", watchSkuCode: "KH" },
  HK: { storePath: "/hk", skuCode: "ZP", watchSkuCode: "ZP" },
};

// Categories that use the watchSkuCode instead of the standard skuCode
const WATCH_CATEGORIES = new Set(["watch-series-11", "watch-ultra-3", "watch-se"]);

// All products organized by category
// Base codes only — full SKU = base + country skuCode + "/A"
const PRODUCTS = {

  // ═══════════════════════════════════════════
  // iPhones
  // ═══════════════════════════════════════════

  "iphone-17-pro-max": {
    MFXG4: '17 Pro Max 256GB Silver',
    MFXH4: '17 Pro Max 256GB Cosmic Orange',
    MFXJ4: '17 Pro Max 256GB Deep Blue',
    MFXK4: '17 Pro Max 512GB Silver',
    MFXL4: '17 Pro Max 512GB Cosmic Orange',
    MFXM4: '17 Pro Max 512GB Deep Blue',
    MFXN4: '17 Pro Max 1TB Silver',
    MFXP4: '17 Pro Max 1TB Cosmic Orange',
    MFXQ4: '17 Pro Max 1TB Deep Blue',
    MFXR4: '17 Pro Max 2TB Silver',
    MFXT4: '17 Pro Max 2TB Cosmic Orange',
    MFXU4: '17 Pro Max 2TB Deep Blue',
  },

  "iphone-17-pro": {
    MG7K4: '17 Pro 256GB Silver',
    MG7L4: '17 Pro 256GB Cosmic Orange',
    MG7M4: '17 Pro 256GB Deep Blue',
    MG7N4: '17 Pro 512GB Silver',
    MG7P4: '17 Pro 512GB Cosmic Orange',
    MG7Q4: '17 Pro 512GB Deep Blue',
    MG7R4: '17 Pro 1TB Silver',
    MG7T4: '17 Pro 1TB Cosmic Orange',
    MG7U4: '17 Pro 1TB Deep Blue',
  },

  "iphone-air": {
    MG184: 'Air 256GB Space Black',
    MG194: 'Air 256GB Cloud White',
    MG1A4: 'Air 256GB Light Gold',
    MG1D4: 'Air 256GB Sky Blue',
    MG1E4: 'Air 512GB Space Black',
    MG1G4: 'Air 512GB Cloud White',
    MG1H4: 'Air 512GB Light Gold',
    MG1J4: 'Air 512GB Sky Blue',
    MG1L4: 'Air 1TB Space Black',
    MG1N4: 'Air 1TB Cloud White',
    MG1P4: 'Air 1TB Light Gold',
    MG1Q4: 'Air 1TB Sky Blue',
  },

  "iphone-17": {
    MG464: '17 256GB Black',
    MG474: '17 256GB White',
    MG484: '17 256GB Mist Blue',
    MG494: '17 256GB Lavender',
    MG4A4: '17 256GB Sage',
    MG4E4: '17 512GB Black',
    MG4F4: '17 512GB White',
    MG4H4: '17 512GB Mist Blue',
    MG4J4: '17 512GB Lavender',
    MG4Q4: '17 512GB Sage',
  },

  "iphone-17e": {
    MHRN4: '17e 256GB Black',
    MHRP4: '17e 256GB White',
    MHRQ4: '17e 256GB Soft Pink',
    MHRR4: '17e 512GB Black',
    MHRT4: '17e 512GB White',
    MHRU4: '17e 512GB Soft Pink',
  },

  "iphone-16": {
    MYAP3: '16 128GB Black',
    MYAQ3: '16 128GB White',
    MYAR3: '16 128GB Pink',
    MYAT3: '16 128GB Ultramarine',
    MYAW3: '16 128GB Teal',
    MYAX3: '16 256GB Black',
    MYAY3: '16 256GB White',
    MYD03: '16 256GB Pink',
    MYD13: '16 256GB Ultramarine',
    MYD23: '16 256GB Teal',
  },

  "iphone-16-plus": {
    MXUT3: '16 Plus 128GB Black',
    MXUU3: '16 Plus 128GB White',
    MXUV3: '16 Plus 128GB Pink',
    MXUW3: '16 Plus 128GB Ultramarine',
    MXUX3: '16 Plus 128GB Teal',
    MXUY3: '16 Plus 256GB Black',
    MXV03: '16 Plus 256GB White',
    MXV13: '16 Plus 256GB Pink',
    MXV33: '16 Plus 256GB Ultramarine',
    MXV43: '16 Plus 256GB Teal',
  },

  // ═══════════════════════════════════════════
  // iPads
  // ═══════════════════════════════════════════

  "ipad-pro-11": {
    // Wi-Fi
    MVV93: '11" Pro M4 256GB Silver',
    MVVD3: '11" Pro M4 512GB Silver',
    MVVF3: '11" Pro M4 1TB Silver',
    MVVH3: '11" Pro M4 2TB Silver',
    MWR73: '11" Pro M4 1TB Nano Silver',
    MWR93: '11" Pro M4 2TB Nano Silver',
    MVV83: '11" Pro M4 256GB Space Black',
    MVVC3: '11" Pro M4 512GB Space Black',
    MVVE3: '11" Pro M4 1TB Space Black',
    MVVG3: '11" Pro M4 2TB Space Black',
    MWR63: '11" Pro M4 1TB Nano Space Black',
    MWR83: '11" Pro M4 2TB Nano Space Black',
    // Wi-Fi + Cellular
    MVW23: '11" Pro M4 Cell 256GB Silver',
    MVW43: '11" Pro M4 Cell 512GB Silver',
    MVW63: '11" Pro M4 Cell 1TB Silver',
    MVW83: '11" Pro M4 Cell 2TB Silver',
    MWRQ3: '11" Pro M4 Cell 1TB Nano Silver',
    MWRT3: '11" Pro M4 Cell 2TB Nano Silver',
    MVW13: '11" Pro M4 Cell 256GB Space Black',
    MVW33: '11" Pro M4 Cell 512GB Space Black',
    MVW53: '11" Pro M4 Cell 1TB Space Black',
    MVW73: '11" Pro M4 Cell 2TB Space Black',
    MWRP3: '11" Pro M4 Cell 1TB Nano Space Black',
    MWRR3: '11" Pro M4 Cell 2TB Nano Space Black',
  },

  "ipad-pro-13": {
    // Wi-Fi
    MVX33: '13" Pro M4 256GB Silver',
    MVX53: '13" Pro M4 512GB Silver',
    MVX73: '13" Pro M4 1TB Silver',
    MVX93: '13" Pro M4 2TB Silver',
    MWRG3: '13" Pro M4 1TB Nano Silver',
    MWRJ3: '13" Pro M4 2TB Nano Silver',
    MVX23: '13" Pro M4 256GB Space Black',
    MVX43: '13" Pro M4 512GB Space Black',
    MVX63: '13" Pro M4 1TB Space Black',
    MVX83: '13" Pro M4 2TB Space Black',
    MWRF3: '13" Pro M4 1TB Nano Space Black',
    MWRH3: '13" Pro M4 2TB Nano Space Black',
    // Wi-Fi + Cellular
    MVXT3: '13" Pro M4 Cell 256GB Silver',
    MVXV3: '13" Pro M4 Cell 512GB Silver',
    MVXX3: '13" Pro M4 Cell 1TB Silver',
    MVY03: '13" Pro M4 Cell 2TB Silver',
    MWT03: '13" Pro M4 Cell 1TB Nano Silver',
    MWT23: '13" Pro M4 Cell 2TB Nano Silver',
    MVXR3: '13" Pro M4 Cell 256GB Space Black',
    MVXU3: '13" Pro M4 Cell 512GB Space Black',
    MVXW3: '13" Pro M4 Cell 1TB Space Black',
    MVXY3: '13" Pro M4 Cell 2TB Space Black',
    MWRY3: '13" Pro M4 Cell 1TB Nano Space Black',
    MWT13: '13" Pro M4 Cell 2TB Nano Space Black',
  },

  "ipad-air-11": {
    // Wi-Fi
    MC9X4: '11" Air M3 128GB Blue',
    MCA34: '11" Air M3 256GB Blue',
    MCA94: '11" Air M3 512GB Blue',
    MCAJ4: '11" Air M3 1TB Blue',
    MCA04: '11" Air M3 128GB Purple',
    MCA64: '11" Air M3 256GB Purple',
    MCAE4: '11" Air M3 512GB Purple',
    MCAU4: '11" Air M3 1TB Purple',
    MC9Y4: '11" Air M3 128GB Starlight',
    MCA44: '11" Air M3 256GB Starlight',
    MCAA4: '11" Air M3 512GB Starlight',
    MCAQ4: '11" Air M3 1TB Starlight',
    MC9W4: '11" Air M3 128GB Space Gray',
    MCA14: '11" Air M3 256GB Space Gray',
    MCA74: '11" Air M3 512GB Space Gray',
    MCAH4: '11" Air M3 1TB Space Gray',
    // Wi-Fi + Cellular
    MCFW4: '11" Air M3 Cell 128GB Blue',
    MCG14: '11" Air M3 Cell 256GB Blue',
    MCG54: '11" Air M3 Cell 512GB Blue',
    MCG94: '11" Air M3 Cell 1TB Blue',
    MCFY4: '11" Air M3 Cell 128GB Purple',
    MCG34: '11" Air M3 Cell 256GB Purple',
    MCG74: '11" Air M3 Cell 512GB Purple',
    MCGC4: '11" Air M3 Cell 1TB Purple',
    MCFX4: '11" Air M3 Cell 128GB Starlight',
    MCG24: '11" Air M3 Cell 256GB Starlight',
    MCG64: '11" Air M3 Cell 512GB Starlight',
    MCGA4: '11" Air M3 Cell 1TB Starlight',
    MCFV4: '11" Air M3 Cell 128GB Space Gray',
    MCG04: '11" Air M3 Cell 256GB Space Gray',
    MCG44: '11" Air M3 Cell 512GB Space Gray',
    MCG84: '11" Air M3 Cell 1TB Space Gray',
  },

  "ipad-air-13": {
    // Wi-Fi
    MCNJ4: '13" Air M3 128GB Blue',
    MCNP4: '13" Air M3 256GB Blue',
    MCNW4: '13" Air M3 512GB Blue',
    MCQ14: '13" Air M3 1TB Blue',
    MCNL4: '13" Air M3 128GB Purple',
    MCNR4: '13" Air M3 256GB Purple',
    MCNY4: '13" Air M3 512GB Purple',
    MCQ34: '13" Air M3 1TB Purple',
    MCNK4: '13" Air M3 128GB Starlight',
    MCNQ4: '13" Air M3 256GB Starlight',
    MCNX4: '13" Air M3 512GB Starlight',
    MCQ24: '13" Air M3 1TB Starlight',
    MCNH4: '13" Air M3 128GB Space Gray',
    MCNN4: '13" Air M3 256GB Space Gray',
    MCNT4: '13" Air M3 512GB Space Gray',
    MCQ04: '13" Air M3 1TB Space Gray',
    // Wi-Fi + Cellular
    MCJ24: '13" Air M3 Cell 128GB Blue',
    MCJ64: '13" Air M3 Cell 256GB Blue',
    MCJA4: '13" Air M3 Cell 512GB Blue',
    MCJF4: '13" Air M3 Cell 1TB Blue',
    MCJ44: '13" Air M3 Cell 128GB Purple',
    MCJ84: '13" Air M3 Cell 256GB Purple',
    MCJD4: '13" Air M3 Cell 512GB Purple',
    MCJH4: '13" Air M3 Cell 1TB Purple',
    MCJ34: '13" Air M3 Cell 128GB Starlight',
    MCJ74: '13" Air M3 Cell 256GB Starlight',
    MCJC4: '13" Air M3 Cell 512GB Starlight',
    MCJG4: '13" Air M3 Cell 1TB Starlight',
    MCJ14: '13" Air M3 Cell 128GB Space Gray',
    MCJ54: '13" Air M3 Cell 256GB Space Gray',
    MCJ94: '13" Air M3 Cell 512GB Space Gray',
    MCJE4: '13" Air M3 Cell 1TB Space Gray',
  },

  "ipad-mini": {
    // Wi-Fi
    MXN73: 'mini 128GB Blue',
    MXNC3: 'mini 256GB Blue',
    MYH13: 'mini 512GB Blue',
    MXN93: 'mini 128GB Purple',
    MXNE3: 'mini 256GB Purple',
    MYH33: 'mini 512GB Purple',
    MXN83: 'mini 128GB Starlight',
    MXND3: 'mini 256GB Starlight',
    MYH23: 'mini 512GB Starlight',
    MXN63: 'mini 128GB Space Gray',
    MXNA3: 'mini 256GB Space Gray',
    MYGY3: 'mini 512GB Space Gray',
    // Wi-Fi + Cellular
    MXPP3: 'mini Cell 128GB Blue',
    MXPW3: 'mini Cell 256GB Blue',
    MYHD3: 'mini Cell 512GB Blue',
    MXPR3: 'mini Cell 128GB Purple',
    MXPY3: 'mini Cell 256GB Purple',
    MYHF3: 'mini Cell 512GB Purple',
    MXPQ3: 'mini Cell 128GB Starlight',
    MXPX3: 'mini Cell 256GB Starlight',
    MYHE3: 'mini Cell 512GB Starlight',
    MXPN3: 'mini Cell 128GB Space Gray',
    MXPT3: 'mini Cell 256GB Space Gray',
    MYHC3: 'mini Cell 512GB Space Gray',
  },

  "ipad": {
    // Wi-Fi
    MD3Y4: 'iPad 11" 128GB Silver',
    MD4G4: 'iPad 11" 256GB Silver',
    MD4Q4: 'iPad 11" 512GB Silver',
    MD4D4: 'iPad 11" 128GB Yellow',
    MD4J4: 'iPad 11" 256GB Yellow',
    MD5A4: 'iPad 11" 512GB Yellow',
    MD4A4: 'iPad 11" 128GB Blue',
    MD4H4: 'iPad 11" 256GB Blue',
    MD4Y4: 'iPad 11" 512GB Blue',
    MD4E4: 'iPad 11" 128GB Pink',
    MD4P4: 'iPad 11" 256GB Pink',
    MD5C4: 'iPad 11" 512GB Pink',
    // Wi-Fi + Cellular
    MD7F4: 'iPad 11" Cell 128GB Silver',
    MD7K4: 'iPad 11" Cell 256GB Silver',
    MD7P4: 'iPad 11" Cell 512GB Silver',
    MD7H4: 'iPad 11" Cell 128GB Yellow',
    MD7M4: 'iPad 11" Cell 256GB Yellow',
    MD7R4: 'iPad 11" Cell 512GB Yellow',
    MD7G4: 'iPad 11" Cell 128GB Blue',
    MD7L4: 'iPad 11" Cell 256GB Blue',
    MD7Q4: 'iPad 11" Cell 512GB Blue',
    MD7J4: 'iPad 11" Cell 128GB Pink',
    MD7N4: 'iPad 11" Cell 256GB Pink',
    MD7T4: 'iPad 11" Cell 512GB Pink',
  },

  // ═══════════════════════════════════════════
  // Macs
  // ═══════════════════════════════════════════

  "macbook-pro": {
    // 14" M5 (10-core CPU / 10-core GPU)
    MDE14: '14" M5 16GB 1TB Space Black',
    MDE54: '14" M5 16GB 1TB Silver',
    MEQJ4: '14" M5 16GB 1TB Nano Space Black',
    // 14" M5 Pro
    MGDN4: '14" M5 Pro 24GB 1TB Silver',
    MGDR4: '14" M5 Pro 24GB 1TB Space Black',
    // 14" M5 Max
    MGDQ4: '14" M5 Max 36GB 2TB Silver',
    MGDU4: '14" M5 Max 36GB 2TB Space Black',
    // 16" M5 Pro
    MGE44: '16" M5 Pro 24GB 1TB Silver',
    MGEA4: '16" M5 Pro 24GB 1TB Space Black',
    // 16" M5 Max (32-core GPU)
    MGE74: '16" M5 Max 36GB 2TB Silver',
    MGED4: '16" M5 Max 36GB 2TB Space Black',
    // 16" M5 Max (40-core GPU)
    MGE94: '16" M5 Max 48GB 2TB Silver',
    MGEE4: '16" M5 Max 48GB 2TB Space Black',
  },

  "macbook-air": {
    // 13" M5 8-core GPU
    MDH74: '13" M5 8-GPU 16GB 512GB Silver',
    MDHA4: '13" M5 8-GPU 16GB 512GB Starlight',
    MDHE4: '13" M5 8-GPU 16GB 512GB Midnight',
    MDHH4: '13" M5 8-GPU 16GB 512GB Sky Blue',
    // 13" M5 10-core GPU 16GB
    MDH84: '13" M5 10-GPU 16GB 1TB Silver',
    MDHC4: '13" M5 10-GPU 16GB 1TB Starlight',
    MDHF4: '13" M5 10-GPU 16GB 1TB Midnight',
    MDHJ4: '13" M5 10-GPU 16GB 1TB Sky Blue',
    // 13" M5 10-core GPU 24GB
    MDHD4: '13" M5 10-GPU 24GB 1TB Starlight',
    MDHG4: '13" M5 10-GPU 24GB 1TB Midnight',
    MDHK4: '13" M5 10-GPU 24GB 1TB Sky Blue',
    // 15" M5 16GB/512GB
    MDV94: '15" M5 16GB 512GB Silver',
    MDVD4: '15" M5 16GB 512GB Starlight',
    MDVH4: '15" M5 16GB 512GB Midnight',
    MDVQ4: '15" M5 16GB 512GB Sky Blue',
    // 15" M5 16GB/1TB
    MDVA4: '15" M5 16GB 1TB Silver',
    MDVE4: '15" M5 16GB 1TB Starlight',
    MDVK4: '15" M5 16GB 1TB Midnight',
    MDVT4: '15" M5 16GB 1TB Sky Blue',
    // 15" M5 24GB/1TB
    MDVC4: '15" M5 24GB 1TB Silver',
    MDVF4: '15" M5 24GB 1TB Starlight',
    MDVN4: '15" M5 24GB 1TB Midnight',
    MDVU4: '15" M5 24GB 1TB Sky Blue',
  },

  "mac-mini": {
    MU9D3: 'Mac mini M4 10c/10c 16GB 256GB',
    MU9E3: 'Mac mini M4 10c/10c 16GB 512GB',
    MCYT4: 'Mac mini M4 10c/10c 24GB 512GB',
    MCX44: 'Mac mini M4 Pro 12c/16c 24GB 512GB',
  },

  "imac": {
    // 8-core GPU, 16GB/256GB
    MWUC3: 'iMac M4 8-GPU 16GB 256GB Silver',
    MWUD3: 'iMac M4 8-GPU 16GB 256GB Yellow',
    MWUE3: 'iMac M4 8-GPU 16GB 256GB Green',
    MWUF3: 'iMac M4 8-GPU 16GB 256GB Blue',
    MWUG3: 'iMac M4 8-GPU 16GB 256GB Pink',
    MWUH3: 'iMac M4 8-GPU 16GB 256GB Purple',
    MWUJ3: 'iMac M4 8-GPU 16GB 256GB Orange',
    // 10-core GPU, 16GB/256GB
    MWUU3: 'iMac M4 10-GPU 16GB 256GB Silver',
    MWUW3: 'iMac M4 10-GPU 16GB 256GB Yellow',
    MWUY3: 'iMac M4 10-GPU 16GB 256GB Green',
    MWV13: 'iMac M4 10-GPU 16GB 256GB Blue',
    MWV43: 'iMac M4 10-GPU 16GB 256GB Pink',
    MWV63: 'iMac M4 10-GPU 16GB 256GB Purple',
    MWV83: 'iMac M4 10-GPU 16GB 256GB Orange',
    // 10-core GPU, 16GB/512GB
    MWUV3: 'iMac M4 10-GPU 16GB 512GB Silver',
    MWUX3: 'iMac M4 10-GPU 16GB 512GB Yellow',
    MWV03: 'iMac M4 10-GPU 16GB 512GB Green',
    MWV33: 'iMac M4 10-GPU 16GB 512GB Blue',
    MWV53: 'iMac M4 10-GPU 16GB 512GB Pink',
    // 10-core GPU, 24GB/512GB
    MCR24: 'iMac M4 10-GPU 24GB 512GB Silver',
    MD2Q4: 'iMac M4 10-GPU 24GB 512GB Green',
    MD2T4: 'iMac M4 10-GPU 24GB 512GB Blue',
    MD2U4: 'iMac M4 10-GPU 24GB 512GB Pink',
    // Nano-texture
    MD3H4: 'iMac M4 Nano-texture 16GB 256GB Silver',
  },

  "mac-studio": {
    MU963: 'Mac Studio M4 Max 36GB 512GB',
    MHQH4: 'Mac Studio M4 Max 64GB 1TB',
    MU973: 'Mac Studio M3 Ultra 96GB 1TB',
  },

  // ═══════════════════════════════════════════
  // Apple Watch
  // ═══════════════════════════════════════════

  "watch-series-11": {
    // 42mm GPS Aluminum
    MEQW4: 'S11 42mm Space Gray S/M Black Sport',
    MEQX4: 'S11 42mm Space Gray M/L Black Sport',
    MEU64: 'S11 42mm Silver S/M Purple Fog Sport',
    MEU74: 'S11 42mm Silver M/L Purple Fog Sport',
    MEU04: 'S11 42mm Rose Gold S/M Light Blush Sport',
    MEU44: 'S11 42mm Rose Gold M/L Light Blush Sport',
    MEQT4: 'S11 42mm Jet Black S/M Black Sport',
    MEQU4: 'S11 42mm Jet Black M/L Black Sport',
    MEW14: 'S11 42mm Space Gray Body Only',
    MEW34: 'S11 42mm Silver Body Only',
    MEW24: 'S11 42mm Rose Gold Body Only',
    MEW04: 'S11 42mm Jet Black Body Only',
    // 46mm GPS Aluminum
    MEV04: 'S11 46mm Space Gray S/M Black Sport',
    MEV44: 'S11 46mm Space Gray M/L Black Sport',
    MEV94: 'S11 46mm Silver S/M Purple Fog Sport',
    MEVA4: 'S11 46mm Silver M/L Purple Fog Sport',
    MEV64: 'S11 46mm Rose Gold S/M Light Blush Sport',
    MEV74: 'S11 46mm Rose Gold M/L Light Blush Sport',
    MEUW4: 'S11 46mm Jet Black S/M Black Sport',
    MEUX4: 'S11 46mm Jet Black M/L Black Sport',
    MEW94: 'S11 46mm Space Gray Body Only',
    MEWC4: 'S11 46mm Silver Body Only',
    MEWA4: 'S11 46mm Rose Gold Body Only',
    MEW84: 'S11 46mm Jet Black Body Only',
    // 42mm GPS+Cellular Aluminum
    MF8A4: 'S11 42mm Cell Space Gray S/M Black Sport',
    MF8C4: 'S11 42mm Cell Space Gray M/L Black Sport',
    MF8H4: 'S11 42mm Cell Silver S/M Purple Fog Sport',
    MF8J4: 'S11 42mm Cell Silver M/L Purple Fog Sport',
    MF8E4: 'S11 42mm Cell Rose Gold S/M Light Blush Sport',
    MF8F4: 'S11 42mm Cell Rose Gold M/L Light Blush Sport',
    MF834: 'S11 42mm Cell Jet Black S/M Black Sport',
    MF854: 'S11 42mm Cell Jet Black M/L Black Sport',
    MF9C4: 'S11 42mm Cell Space Gray Body Only',
    MF9F4: 'S11 42mm Cell Silver Body Only',
    MF9E4: 'S11 42mm Cell Rose Gold Body Only',
    MF994: 'S11 42mm Cell Jet Black Body Only',
    // 42mm GPS+Cellular Titanium
    MF8M4: 'S11 42mm Ti Natural S/M Stone Gray Sport',
    MF8N4: 'S11 42mm Ti Natural M/L Stone Gray Sport',
    MF8R4: 'S11 42mm Ti Slate S/M Black Sport',
    MF8T4: 'S11 42mm Ti Slate M/L Black Sport',
    MF8W4: 'S11 42mm Ti Gold S/M Light Blush Sport',
    MF8X4: 'S11 42mm Ti Gold M/L Light Blush Sport',
    MF8P4: 'S11 42mm Ti Natural Milanese Loop',
    MF8U4: 'S11 42mm Ti Slate Milanese Loop',
    MF8Y4: 'S11 42mm Ti Gold Milanese Loop',
    MF9H4: 'S11 42mm Ti Natural Body Only',
    MF9K4: 'S11 42mm Ti Slate Body Only',
    MF9M4: 'S11 42mm Ti Gold Body Only',
    // 46mm GPS+Cellular Aluminum
    MFC94: 'S11 46mm Cell Space Gray S/M Black Sport',
    MFCA4: 'S11 46mm Cell Space Gray M/L Black Sport',
    MFCP4: 'S11 46mm Cell Silver S/M Purple Fog Sport',
    MFCR4: 'S11 46mm Cell Silver M/L Purple Fog Sport',
    MFCG4: 'S11 46mm Cell Rose Gold S/M Light Blush Sport',
    MFCJ4: 'S11 46mm Cell Rose Gold M/L Light Blush Sport',
    MFC24: 'S11 46mm Cell Jet Black S/M Black Sport',
    MFC44: 'S11 46mm Cell Jet Black M/L Black Sport',
    MFAE4: 'S11 46mm Cell Space Gray Body Only',
    MFAJ4: 'S11 46mm Cell Silver Body Only',
    MFAF4: 'S11 46mm Cell Rose Gold Body Only',
    MFAA4: 'S11 46mm Cell Jet Black Body Only',
    // 46mm GPS+Cellular Titanium
    MFCW4: 'S11 46mm Ti Natural S/M Stone Gray Sport',
    MFCX4: 'S11 46mm Ti Natural M/L Stone Gray Sport',
    MFD14: 'S11 46mm Ti Slate S/M Black Sport',
    MFD24: 'S11 46mm Ti Slate M/L Black Sport',
    MFD54: 'S11 46mm Ti Gold S/M Light Blush Sport',
    MFD64: 'S11 46mm Ti Gold M/L Light Blush Sport',
    MFCY4: 'S11 46mm Ti Natural S/M Milanese Loop',
    MFD04: 'S11 46mm Ti Natural M/L Milanese Loop',
    MFD34: 'S11 46mm Ti Slate S/M Milanese Loop',
    MFD44: 'S11 46mm Ti Slate M/L Milanese Loop',
    MFD74: 'S11 46mm Ti Gold S/M Milanese Loop',
    MFD84: 'S11 46mm Ti Gold M/L Milanese Loop',
    MFAY4: 'S11 46mm Ti Natural Body Only',
    MFC34: 'S11 46mm Ti Slate Body Only',
    MFC14: 'S11 46mm Ti Gold Body Only',
  },

  "watch-ultra-3": {
    // Natural Titanium
    MEWK4: 'Ultra 3 Natural Ti S Light Blue Alpine',
    MEWM4: 'Ultra 3 Natural Ti M Light Blue Alpine',
    MEWP4: 'Ultra 3 Natural Ti L Light Blue Alpine',
    MEWR4: 'Ultra 3 Natural Ti S/M Bright Blue Trail',
    MEWU4: 'Ultra 3 Natural Ti M/L Bright Blue Trail',
    MEWH4: 'Ultra 3 Natural Ti Anchor Blue Ocean',
    MEWW4: 'Ultra 3 Natural Ti S Milanese',
    MEWY4: 'Ultra 3 Natural Ti M Milanese',
    MF0E4: 'Ultra 3 Natural Ti L Milanese',
    MF1V4: 'Ultra 3 Natural Ti Body Only',
    // Black Titanium
    MF0Q4: 'Ultra 3 Black Ti S Black Alpine',
    MF0V4: 'Ultra 3 Black Ti M Black Alpine',
    MF0X4: 'Ultra 3 Black Ti L Black Alpine',
    MF1D4: 'Ultra 3 Black Ti S/M Black Charcoal Trail',
    MF1H4: 'Ultra 3 Black Ti M/L Black Charcoal Trail',
    MF0J4: 'Ultra 3 Black Ti Black Ocean',
    MF1N4: 'Ultra 3 Black Ti S Milanese',
    MF1Q4: 'Ultra 3 Black Ti M Milanese',
    MF1T4: 'Ultra 3 Black Ti L Milanese',
    MF254: 'Ultra 3 Black Ti Body Only',
  },

  "watch-se": {
    // 40mm GPS
    MEH34: 'SE 40mm Starlight S/M Starlight Sport',
    MEH54: 'SE 40mm Starlight M/L Starlight Sport',
    MEH94: 'SE 40mm Midnight S/M Midnight Sport',
    MEHC4: 'SE 40mm Midnight M/L Midnight Sport',
    MEHV4: 'SE 40mm Starlight Body Only',
    MEHX4: 'SE 40mm Midnight Body Only',
    // 44mm GPS
    MEHG4: 'SE 44mm Starlight S/M Starlight Sport',
    MEHJ4: 'SE 44mm Starlight M/L Starlight Sport',
    MEHN4: 'SE 44mm Midnight S/M Midnight Sport',
    MEHQ4: 'SE 44mm Midnight M/L Midnight Sport',
    MEP04: 'SE 44mm Starlight Body Only',
    MEP34: 'SE 44mm Midnight Body Only',
    // 40mm GPS+Cellular
    MEP64: 'SE 40mm Cell Starlight S/M Starlight Sport',
    MEP74: 'SE 40mm Cell Starlight M/L Starlight Sport',
    MEP94: 'SE 40mm Cell Midnight S/M Midnight Sport',
    MEPC4: 'SE 40mm Cell Midnight M/L Midnight Sport',
    MEQ14: 'SE 40mm Cell Starlight Body Only',
    MEQ24: 'SE 40mm Cell Midnight Body Only',
    // 44mm GPS+Cellular
    MEPE4: 'SE 44mm Cell Starlight S/M Starlight Sport',
    MEPF4: 'SE 44mm Cell Starlight M/L Starlight Sport',
    MEPH4: 'SE 44mm Cell Midnight S/M Midnight Sport',
    MEPJ4: 'SE 44mm Cell Midnight M/L Midnight Sport',
    MEQ34: 'SE 44mm Cell Starlight Body Only',
    MEQ44: 'SE 44mm Cell Midnight Body Only',
  },

  // ═══════════════════════════════════════════
  // AirPods
  // ═══════════════════════════════════════════

  "airpods": {
    MXP63: 'AirPods 4',
    MXP93: 'AirPods 4 ANC',
    MFHP4: 'AirPods Pro 3',
    MWW43: 'AirPods Max Midnight',
    MWW53: 'AirPods Max Starlight',
    MWW63: 'AirPods Max Blue',
    MWW73: 'AirPods Max Orange',
    MWW83: 'AirPods Max Purple',
  },
};

// Category groups for --product shorthand aliases
const PRODUCT_GROUPS = {
  iphone: ["iphone-17-pro-max", "iphone-17-pro", "iphone-air", "iphone-17", "iphone-17e", "iphone-16", "iphone-16-plus"],
  ipad: ["ipad-pro-11", "ipad-pro-13", "ipad-air-11", "ipad-air-13", "ipad-mini", "ipad"],
  mac: ["macbook-pro", "macbook-air", "mac-mini", "imac", "mac-studio"],
  watch: ["watch-series-11", "watch-ultra-3", "watch-se"],
  airpods: ["airpods"],
};

// All valid category names (individual + group aliases)
const VALID_CATEGORIES = new Set([
  ...Object.keys(PRODUCTS),
  ...Object.keys(PRODUCT_GROUPS),
]);

// Favorites — base codes for models you most want notifications about
// Default: M5 Max models (typically hardest to find in store)
const FAVORITES = [
  "MGDQ4", // 14" M5 Max Silver
  "MGDU4", // 14" M5 Max Space Black
  "MGE74", // 16" M5 Max 36GB Silver
  "MGED4", // 16" M5 Max 36GB Space Black
  "MGE94", // 16" M5 Max 48GB Silver
  "MGEE4", // 16" M5 Max 48GB Space Black
];

// Valid US state codes for state-based search
const US_STATES = new Set([
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL",
  "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
  "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
  "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
  "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
]);

// Hardcoded fallback: US Apple Store numbers grouped by state
// Refresh with: node index.js --refresh-stores
const STORES_BY_STATE = {
  AL: ["R225", "R266"],
  AZ: ["R026", "R031", "R086", "R247", "R267", "R292"],
  CA: ["R001", "R002", "R004", "R014", "R015", "R023", "R029", "R033", "R034", "R040", "R044", "R050", "R051", "R057", "R069", "R070", "R071", "R075", "R082", "R094", "R099", "R101", "R108", "R122", "R124", "R146", "R148", "R156", "R189", "R213", "R217", "R231", "R285", "R294", "R297", "R298", "R322", "R345", "R414", "R451", "R550", "R720"],
  CO: ["R030", "R047", "R172", "R182", "R228", "R338"],
  CT: ["R025", "R093", "R202", "R282", "R446", "R613", "R629"],
  DC: ["R287", "R516"],
  DE: ["R102"],
  FL: ["R012", "R024", "R074", "R087", "R115", "R127", "R169", "R185", "R214", "R312", "R623", "R752"],
  GA: ["R006", "R080", "R184", "R259", "R364", "R591"],
  HI: ["R073", "R210"],
  IA: ["R109"],
  ID: ["R303"],
  IL: ["R018", "R035", "R056", "R089", "R237", "R258", "R284", "R348"],
  IN: ["R066", "R360"],
  KS: ["R283"],
  KY: ["R264", "R288"],
  LA: ["R235", "R263"],
  MA: ["R011", "R021", "R076", "R110", "R137", "R149", "R155", "R191", "R232", "R346", "R622"],
  MD: ["R084", "R112", "R142", "R168"],
  ME: ["R307"],
  MI: ["R041", "R055", "R132", "R230", "R616", "R763"],
  MN: ["R007", "R022", "R054", "R183"],
  MO: ["R062", "R097", "R114"],
  MS: ["R324"],
  NC: ["R049", "R083", "R116", "R293", "R796"],
  NE: ["R190"],
  NH: ["R027", "R354", "R631"],
  NJ: ["R067", "R088", "R104", "R138", "R206", "R549", "R755"],
  NM: ["R177"],
  NV: ["R064", "R161", "R219", "R650"],
  NY: ["R016", "R017", "R032", "R095", "R107", "R139", "R250", "R251", "R415", "R582", "R594", "R612", "R654", "R715", "R753"],
  OH: ["R009", "R028", "R081", "R192", "R299", "R353", "R417", "R518"],
  OK: ["R130", "R233"],
  OR: ["R077", "R090", "R134"],
  PA: ["R065", "R096", "R147", "R162", "R166", "R234", "R281", "R413"],
  RI: ["R167"],
  SC: ["R318", "R355"],
  TN: ["R020", "R123", "R133", "R203", "R513"],
  TX: ["R042", "R058", "R085", "R126", "R131", "R144", "R151", "R164", "R204", "R205", "R216", "R290", "R316", "R321", "R437", "R492", "R746"],
  UT: ["R125", "R461", "R599"],
  VA: ["R010", "R036", "R078", "R129", "R221", "R271", "R598", "R614"],
  WA: ["R003", "R072", "R100", "R106", "R339", "R420"],
  WI: ["R059", "R229", "R257"],
};

module.exports = { COUNTRIES, WATCH_CATEGORIES, PRODUCTS, PRODUCT_GROUPS, VALID_CATEGORIES, FAVORITES, US_STATES, STORES_BY_STATE };

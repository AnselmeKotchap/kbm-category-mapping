export const UNITS = [
  "gb",
  "kg",
  "g",
  "b/s",
  "m",
  "l",
  "s",
  "inch",
  "pt",
  "ml",
  "mg",
  "set",
  "mm",
  "mo",
  "cm",
  "H&sets",
  "pounds",
  "km",
  "pack",
  "hz",
  "watts",
  "newton",
  "pa",
  "db",
  "tonne",
];

export const catergoryData = [
  {
    name: "Fashion & Jewellery",
    level: 4,
    rootPath: [],
    criteria: [],
  },
  {
    name: "Women",
    level: 3,
    rootPath: ["Fashion & Jewellery"],
    criteria: [],
  },
  {
    name: "Clothing",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Women"],
    criteria: [],
  },
  {
    name: "Dresses",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Tops & Tees",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Jumpsuits",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Jeans",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Pants",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Swimwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Fashion Hoodies & Sweatshirts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Underwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Sleepwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Jackets, Coats & Hoodies",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Eyewear",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Women"],
    criteria: [],
  },
  {
    name: "Sunglasses",
    level: 1,
    rootPath: [
      "Fashion & Jewellery",
      "Women",
      "Sunglasses & Eyewear Accessories",
    ],
    criteria: [
      {
        name: "Lens width",
        value: ["53 millimeters", "50 millimeters"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: ["Glasses", "Replacement glaces"],
      },
    ],
  },
  {
    name: "Eyewear Frames",
    level: 1,
    rootPath: [
      "Fashion & Jewellery",
      "Women",
      "Sunglasses & Eyewear Accessories",
    ],
    criteria: [
      {
        name: "Lens width",
        value: ["53 millimeters", "50 millimeters"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: ["Glasses", "Replacement glaces"],
      },
    ],
  },
  {
    name: "Replacement sunglass Lenses",
    level: 1,
    rootPath: [
      "Fashion & Jewellery",
      "women",
      "Sunglasses & Eyewear Accessories",
    ],
    criteria: [
      {
        name: "Lens width",
        value: ["53 millimeters", "50 millimeters"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: ["Glasses", "Replacement glaces"],
      },
    ],
  },
  {
    name: "Eyeglass Chains",
    level: 1,
    rootPath: [
      "Fashion & Jewellery",
      "women",
      "Sunglasses & Eyewear Accessories",
    ],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Eyeglass Cases",
    level: 1,
    rootPath: [
      "Fashion & Jewellery",
      "women",
      "Sunglasses & Eyewear Accessories",
    ],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Watches",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Men"],
    criteria: [],
  },
  {
    name: "Wrist watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Watch men",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Pocket watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Smartwatches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Certified",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "pre-owned",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Bag & Accessories",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Women"],
    criteria: [],
  },
  {
    name: "Totes & hobos",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Bag & Accessories"],
    criteria: [
      {
        name: "size",
        value: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Cross body bags",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Bag & Accessories"],
    criteria: [
      {
        name: "size",
        value: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Clutches & evening",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Bag & Accessories"],
    criteria: [
      {
        name: "size",
        value: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "bags",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Bag & Accessories"],
    criteria: [
      {
        name: "size",
        value: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Wallets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Bag & Accessories"],
    criteria: [
      {
        name: "size",
        value: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Watches",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Women"],
    criteria: [],
  },
  {
    name: "Wrist watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Watch women",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Pocket watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Smartwatches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Certified",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "pre-owned",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Watches"],
    criteria: [
      {
        name: "size",
        value: ["18mm", "19mm", "20mm", "21mm", "22mm"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["Stainless Steel", "Silicone"],
      },
    ],
  },
  {
    name: "Jewellery",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Women"],
    criteria: [],
  },
  {
    name: "Necklaces & pendants",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: [
          "18mm",
          "25mm",
          "28mm",
          "3 Pairs-Design1",
          "3 Pairs-Design 2",
          "3 pairs gold",
          "31mm",
          "35mm",
          "40mm",
          "6 Paris",
          "6 Pairs-Rose Gold",
          "6 Pairs-White Gold",
        ],
      },
    ],
  },
  {
    name: "Earrings",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: [
          "18mm",
          "25mm",
          "28mm",
          "3 Pairs-Design1",
          "3 Pairs-Design 2",
          "3 pairs gold",
          "31mm",
          "35mm",
          "40mm",
          "6 Paris",
          "6 Pairs-Rose Gold",
          "6 Pairs-White Gold",
        ],
      },
    ],
  },
  {
    name: "Bracelets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: [
          "18mm",
          "25mm",
          "28mm",
          "3 Pairs-Design1",
          "3 Pairs-Design 2",
          "3 pairs gold",
          "31mm",
          "35mm",
          "40mm",
          "6 Paris",
          "6 Pairs-Rose Gold",
          "6 Pairs-White Gold",
        ],
      },
    ],
  },
  {
    name: "Jewellery sets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: [
          "18mm",
          "25mm",
          "28mm",
          "3 Pairs-Design1",
          "3 Pairs-Design 2",
          "3 pairs gold",
          "31mm",
          "35mm",
          "40mm",
          "6 Paris",
          "6 Pairs-Rose Gold",
          "6 Pairs-White Gold",
        ],
      },
    ],
  },
  {
    name: "Brooches & pins",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: [
          "18mm",
          "25mm",
          "28mm",
          "3 Pairs-Design1",
          "3 Pairs-Design 2",
          "3 pairs gold",
          "31mm",
          "35mm",
          "40mm",
          "6 Paris",
          "6 Pairs-Rose Gold",
          "6 Pairs-White Gold",
        ],
      },
    ],
  },
  {
    name: "rings",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: [
          "18mm",
          "25mm",
          "28mm",
          "3 Pairs-Design1",
          "3 Pairs-Design 2",
          "3 pairs gold",
          "31mm",
          "35mm",
          "40mm",
          "6 Paris",
          "6 Pairs-Rose Gold",
          "6 Pairs-White Gold",
        ],
      },
    ],
  },
  {
    name: "Shoes",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Women"],
    criteria: [],
  },
  {
    name: "Athletic",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Casual & sneakers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Heels",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Flats",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "S&al & slippers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Boots",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Women", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Men",
    level: 3,
    rootPath: ["Fashion & Jewellery"],
    criteria: [],
  },
  {
    name: "Clothing",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Men"],
    criteria: [],
  },
  {
    name: "Shirts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Polos",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "T-Shirts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Jeans",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Pants",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Sportswear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Shorts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Swimwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Underwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Sleepwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "Size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Jackets, Coats & Hoodies",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Clothing"],
    criteria: [
      {
        name: "size",
        value: [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "2X-Large",
          "3X-Large",
          "29W x 32L",
          "30W x 32L",
          "32W x 32L",
          "32W x 34L",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Khaki", "Cotton", "Nylon", "Polyester"],
      },
      {
        name: "size",
        value: ["Regular", "Straight", "Big Tall"],
      },
    ],
  },
  {
    name: "Bags & Accessories",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Men"],
    criteria: [],
  },
  {
    name: "Belts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Bags & Accessories"],
    criteria: [
      {
        name: "size",
        value: [
          "28-34 Waist Adjustable",
          "28-36 Waist Adjustable",
          "36-42 Waist Adjustable",
          "42-44 Waist Adjustable",
          "[42-48 Waist Adjustable]",
          "42-52 Waist Adjustable",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Wallets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Bag & Accessories"],
    criteria: [
      {
        name: "size",
        value: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Hats & caps",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Bag & Accessories"],
    criteria: [
      {
        name: "size",
        value: [
          "28-34 Waist Adjustable",
          "28-36 Waist Adjustable",
          "36-42 Waist Adjustable",
          "42-44 Waist Adjustable",
          "[42-48 Waist Adjustable]",
          "42-52 Waist Adjustable",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Cufflinks",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Bag & Accessories"],
    criteria: [
      {
        name: "Material",
        value: ["Stainless Steel"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Shoes",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Men"],
    criteria: [],
  },
  {
    name: "Athletic",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Casual & sneakers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "S&al & slippers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Boots",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "11",
          "12",
          "13",
        ],
      },
    ],
  },
  {
    name: "Eyewear",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Men"],
    criteria: [],
  },
  {
    name: "Sunglasses",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Eyewear"],
    criteria: [
      {
        name: "Lens width",
        value: ["53 millimeters", "50 millimeters"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: ["Glasses", "Replacement glaces"],
      },
    ],
  },
  {
    name: "Eyewear Frames",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Eyewear"],
    criteria: [
      {
        name: "Lens width",
        value: ["53 millimeters", "50 millimeters"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: ["Glasses", "Replacement glaces"],
      },
    ],
  },
  {
    name: "Replacement sunglass Lenses",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Eyewear"],
    criteria: [
      {
        name: "Lens width",
        value: ["53 millimeters", "50 millimeters"],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
      {
        name: "Style",
        value: ["Glasses", "Replacement glaces"],
      },
    ],
  },
  {
    name: "Eyeglass Chains",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Eyewear"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Eyeglass Cases",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Men", "Eyewear"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Girl",
    level: 3,
    rootPath: ["Fashion & Jewellery"],
    criteria: [],
  },
  {
    name: "Shoes",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Girl"],
    criteria: [],
  },
  {
    name: "Athletic",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Boots",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Clogs & Mules",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Flats",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Loafers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Outdoor",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Oxfords",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "S&als",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Slippers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Sneakers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Shoes"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red", "Red/Green/Blue", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "5 Toddler",
          "6 Toddler",
          "6.5 Toddler",
          "7 Toddler",
          "8 Toddler",
          "8.5 Toddler",
          "9 Toddler",
          "10 Toddler",
          "11 Toddler",
        ],
      },
      {
        name: "size Type 2",
        value: [
          "6 Little Kid",
          "7 Little Kid",
          "8 Little Kid",
          "9 Little Kid",
          "10 Little Kid",
          "11 Little Kid",
          "12 Little Kid",
          "13 Little Kid",
        ],
      },
    ],
  },
  {
    name: "Bag & Accessories",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Girl"],
    criteria: [],
  },
  {
    name: "Cold Weather",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Bag & Accessories"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
    ],
  },
  {
    name: "Hats & Caps",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Bag & Accessories"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
    ],
  },
  {
    name: "Belts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Bag & Accessories"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
    ],
  },
  {
    name: "Sunglass",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Bag & Accessories"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
    ],
  },
  {
    name: "Fashion Scarves",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Bag & Accessories"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
    ],
  },
  {
    name: "Special Occasion Gloves",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Bag & Accessories"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
    ],
  },
  {
    name: "First Communion Veils",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Bag & Accessories"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
    ],
  },
  {
    name: "Clothing",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Girl"],
    criteria: [],
  },
  {
    name: "Dresses",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Clothing Sets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Tops & Tees",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Sweaters",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Fashion Hoodies & Sweatshirts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Active",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Jeans",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Overalls",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Jumpsuits & Rompers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Pants & Capris",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/20 plus/8/9/6", "3T/4T/5T/6x", "12 plus", ""],
      },
      {
        name: "size Type 2",
        value: ["3-8 years", "6-12 months", "10-14 years", " 3-18 months"],
      },
    ],
  },
  {
    name: "Shorts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Swim",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "3T/4T/5T/6x"],
      },
      {
        name: "size Type 2",
        value: ["3-8 years 10-14 years", "6-12 months 3-18 months"],
      },
    ],
  },
  {
    name: "Jackets & Coats",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type 1",
        value: [
          "X-small",
          "Large",
          "Medium",
          "X-large",
          "XX-large",
          "Small-medium",
          "small",
        ],
      },
    ],
  },
  {
    name: "Socks & Tights",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size Type ",
        value: [
          "X-small",
          "Large",
          "Medium",
          "X-large",
          "XX-large",
          "Small-medium",
          "small",
        ],
      },
    ],
  },
  {
    name: "Leggins",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size",
        value: ["2 pack", "5 packs", "3 packs", "big girls"],
      },
    ],
  },
  {
    name: "Underwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size",
        value: ["10/11/13/14/12 plus/20 plus/8/9/6", "22 plus/10 plus/6xx/6x"],
      },
    ],
  },
  {
    name: "Skirts, Scooters & Skorts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Clothing"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White", " New Olive"],
      },
      {
        name: "size",
        value: [
          "10/11/13/14/12 plus/20 plus/8/9/6",
          "18 plus/19 plus/16 plus/8x",
        ],
      },
    ],
  },
  {
    name: "Boys",
    level: 3,
    rootPath: ["Fashion & Jewellery"],
    criteria: [],
  },
  {
    name: "Clothing",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Boys"],
    criteria: [],
  },
  {
    name: "Suits & Sport Coats",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Clothing Sets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Top & Tees",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Button-Down Dess Shirts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Sweaters",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Fashion Hoodies Sweartshirts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Active",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Jeans",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Overalls",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Pants",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Shorts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Jackets & Coats",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Sleepwear & Robes",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Underwear",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Swim",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Clothing"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "2T",
          "3T",
          "4T",
          "5T",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "xsmall",
          "small",
          "medium",
          "large",
          "xlarge",
        ],
      },
      {
        name: "Age range",
        value: [
          "5-6 years",
          "6-7 years",
          "7-8 years",
          "8-9 years",
          "9-10 years",
          "10-11 years",
          "11-12 years",
          "12-13 years",
          "13-14 years",
        ],
      },
      {
        name: "material",
        value: [
          "cotton",
          "cotton blend",
          "acrylic",
          "leather",
          "others fibers",
          "Nylon",
          "polyester",
          "merino wool",
          "sp&ex",
        ],
      },
    ],
  },
  {
    name: "Shoes",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Boys"],
    criteria: [],
  },
  {
    name: "Athletic",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Boots",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Clogs & Mules",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Loafers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Outdoor",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Oxfords",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "S&als",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Slippers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Sneakers",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Shoes"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Watches",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Boys"],
    criteria: [],
  },
  {
    name: "Wrist Watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Watches"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: ["18mm", "20mm", "22mm", "24mm", "26mm"],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Watch boy",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Watches"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: ["18mm", "20mm", "22mm", "24mm", "26mm"],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Pocket Watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Watches"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: ["18mm", "20mm", "22mm", "24mm", "26mm"],
      },
      {
        name: "material",
        value: [
          "synthetic",
          "croslite",
          "acrylic",
          "leather",
          "rubber sole",
          "synthetic sole",
          "polyester",
          "Ethylene Vinyl Acetate sole",
          "textile",
        ],
      },
    ],
  },
  {
    name: "Accessories",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Boys"],
    criteria: [],
  },
  {
    name: "Cold Sweater",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Accessories"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Hats & Caps",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Accessories"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Neckties",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Accessories"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Bow Ties",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Accessories"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Belts",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Accessories"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Suspenders",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Accessories"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Sunglasses",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Accessories"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "size",
        value: [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Jewellery",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Boys"],
    criteria: [],
  },
  {
    name: "Bracelets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Necklaces",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Cuff Links",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Rings",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Tie Clips",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Religious",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Boys", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: [
          "red",
          "blue",
          "green",
          "white",
          "black",
          "yellow",
          "pink",
          "purple",
          "silver",
          "gray",
        ],
      },
      {
        name: "length",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
      {
        name: "material",
        value: [
          "copper",
          "satin polyester",
          "acrylic",
          "leather",
          "elastic",
          "stainless steel",
          "polyester",
          "brass",
          "silver",
          "stone",
          "nylon",
          "plastic",
        ],
      },
    ],
  },
  {
    name: "Jewellery",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Girl"],
    criteria: [],
  },
  {
    name: "Anklets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White"],
      },
    ],
  },
  {
    name: "Bracelets",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White"],
      },
    ],
  },
  {
    name: "Earrings",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White"],
      },
    ],
  },
  {
    name: "Necklaces & Pendants",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White"],
      },
    ],
  },
  {
    name: "Rings",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Jewellery"],
    criteria: [
      {
        name: "color",
        value: ["silver", "gold"],
      },
      {
        name: "size",
        value: [
          "16 pcs king Sets",
          "17 pcs king Sets",
          "14 pcs king Sets",
          "15 pcs king Sets",
        ],
      },
    ],
  },
  {
    name: "Watches",
    level: 2,
    rootPath: ["Fashion & Jewellery", "Girl"],
    criteria: [],
  },
  {
    name: "Wrist Watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Watches"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White"],
      },
    ],
  },
  {
    name: "Watch Girl",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Watches"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White"],
      },
    ],
  },
  {
    name: "Pocket Watches",
    level: 1,
    rootPath: ["Fashion & Jewellery", "Girl", "Watches"],
    criteria: [
      {
        name: "color",
        value: ["Blue/Gray/Red/Black", "Red/Green/Blue/White"],
      },
    ],
  },
  {
    name: "Groceries & Drinks",
    level: 3,
    rootPath: [],
    criteria: [],
  },
  {
    name: "Alcohol",
    level: 2,
    rootPath: ["Groceries & Drinks"],
    criteria: [],
  },
  {
    name: "Import Beers",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "New & Seasonal Acohol",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Domestic Beers",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Flavored & Speciality Beverage",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Red Wine",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "White Wine",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Rose & Blush Wine",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Champagne & Sparkling Wine",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Liquor",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Cockttails & Mixers",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Light & Low Calorie Alcohol",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Non-Alcoholic Beer & Wine",
    level: 1,
    rootPath: ["Groceries & Drinks", "Alcohol"],
    criteria: [
      {
        name: "Degree",
        value: ["10", "11", "12"],
      },
    ],
  },
  {
    name: "Beverages",
    level: 2,
    rootPath: ["Groceries & Drinks"],
    criteria: [],
  },
  {
    name: "Water",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Soft Drinks",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Fruits Juice",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Sport Drinks",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Energy Drinks",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Tea",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["8", "10", "20", "25", "40"],
      },
    ],
  },
  {
    name: "Hot Chocolate & Cocoa",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["8", "10", "20", "25", "40"],
      },
    ],
  },
  {
    name: "Drinks Mixes & Water Enhancers",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Non-Alcoholic Mixers",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Fresh Juice & Chilled Beverages",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Ice",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "0.75", "1", "1.5"],
      },
    ],
  },
  {
    name: "Cockttails & Mixes",
    level: 1,
    rootPath: ["Groceries & Drinks", "Beverages"],
    criteria: [
      {
        name: "size",
        value: ["0.33", "0.5", "0.65", "1", "1.5"],
      },
    ],
  },
  {
    name: "Fresh Produce",
    level: 2,
    rootPath: ["Groceries & Drinks"],
    criteria: [],
  },
  {
    name: "Fresh Fruits",
    level: 1,
    rootPath: ["Groceries & Drinks", "Fresh Produce"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Fresh Vegetables",
    level: 1,
    rootPath: ["Groceries & Drinks", "Fresh Produce"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Fresh Herbs",
    level: 1,
    rootPath: ["Groceries & Drinks", "Fresh Produce"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Organic Produce",
    level: 1,
    rootPath: ["Groceries & Drinks", "Fresh Produce"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Plant-Based Protein & Tofu",
    level: 1,
    rootPath: ["Groceries & Drinks", "Fresh Produce"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Meat & Seafood",
    level: 2,
    rootPath: ["Groceries & Drinks"],
    criteria: [],
  },
  {
    name: "Beef & Lamb",
    level: 1,
    rootPath: ["Groceries & Drinks", "Meat & Seafood"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Chicken",
    level: 1,
    rootPath: ["Groceries & Drinks", "Meat & Seafood"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Pork",
    level: 1,
    rootPath: ["Groceries & Drinks", "Meat & Seafood"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Seafood",
    level: 1,
    rootPath: ["Groceries & Drinks", "Meat & Seafood"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Sustainable Food",
    level: 1,
    rootPath: ["Groceries & Drinks", "Meat & Seafood"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Bacon, Hot Dogs & Sausage",
    level: 1,
    rootPath: ["Groceries & Drinks", "Meat & Seafood"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Dairy & Eggs",
    level: 2,
    rootPath: ["Groceries & Drinks"],
    criteria: [],
  },
  {
    name: "Milk",
    level: 1,
    rootPath: ["Groceries & Drinks", "Dairy & Eggs"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Creams & Creamers",
    level: 1,
    rootPath: ["Groceries & Drinks", "Dairy & Eggs"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Yogurt",
    level: 1,
    rootPath: ["Groceries & Drinks", "Dairy & Eggs"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Eggs",
    level: 1,
    rootPath: ["Groceries & Drinks", "Dairy & Eggs"],
    criteria: [
      {
        name: "content",
        value: ["6", "15", "30"],
      },
    ],
  },
  {
    name: "Butter & Margarine",
    level: 1,
    rootPath: ["Groceries & Drinks", "Dairy & Eggs"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "0.9", "1", "1.5"],
      },
    ],
  },
  {
    name: "Biscuits, Cookies, Dought & Crusts",
    level: 1,
    rootPath: ["Groceries & Drinks", "Dairy & Eggs"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Panty",
    level: 2,
    rootPath: ["Groceries & Drinks"],
    criteria: [],
  },
  {
    name: "Canned Goods",
    level: 1,
    rootPath: ["Groceries & Drinks", "Panty"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Condiments",
    level: 1,
    rootPath: ["roceries & Drinks", "Panty"],
    criteria: [
      {
        name: "Flavour",
        value: ["Mayo", "Ketchup", "Moutarde", "Fruits"],
      },
    ],
  },
  {
    name: "Pasta",
    level: 1,
    rootPath: ["Groceries & Drinks", "Panty"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Herbs, Spices & Seasoning Mixes",
    level: 1,
    rootPath: ["Groceries & Drinks", "Panty"],
    criteria: [
      {
        name: "content",
        value: ["Powder", "Hach", "Grain"],
      },
    ],
  },
  {
    name: "Rice, Grains & Dried Beans",
    level: 1,
    rootPath: ["Groceries & Drinks", "Panty"],
    criteria: [
      {
        name: "Weight",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Cooking Oils & Vinegar",
    level: 1,
    rootPath: ["Groceries & Drinks", "Panty"],
    criteria: [
      {
        name: "content",
        value: ["0.5", "1", "1.5"],
      },
    ],
  },
  {
    name: "Electronics",
    level: 3,
    rootPath: [],
    criteria: [],
  },
  {
    name: "appliances",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Refrigerators",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: ["true stainless steel", "black stainless steel", "white"],
      },
      {
        name: "size",
        value: ["16 cubic feet ", "650pounds"],
      },
      {
        name: "material",
        value: ["stainless glass", "plastic glass"],
      },
    ],
  },
  {
    name: "Washing machines",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: [
          "white & blue",
          "magnetic gray",
          "champagne gold",
          "gray",
          "black",
          "merlot",
          "silver",
        ],
      },
      {
        name: "size",
        value: [
          "17.6 pounds ",
          "17.6 ibs",
          "5 kilograms",
          "8 kilograms",
          "1.6 cubic feet",
          "9 pounds",
          "6.6 pounds",
        ],
      },
      {
        name: "material",
        value: ["stainless steel", "alloy steel", "plastic"],
      },
    ],
  },
  {
    name: "Ovens & Ranges",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: ["stainless steel", "black brushed silver", "white"],
      },
      {
        name: "material",
        value: ["metal", "nonstick", "plastic"],
      },
    ],
  },
  {
    name: "Air Conditioners",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: ["black", "black & white", "white"],
      },
      {
        name: "size",
        value: [
          "13.58 * 13.98 * 27.68 inches",
          "33.5 * 40.6 * 30.6 cm",
          "81.8 cm",
          "30.5 * 33 * 76.2 cm",
        ],
      },
    ],
  },
  {
    name: "Microwaves",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: [
          "stainless steel",
          "black stainless steel",
          "white",
          "green",
          "red",
          "stainless",
          "blue",
        ],
      },
      {
        name: "size",
        value: [
          "0.6 cu ft ",
          "0.7 cu ft",
          "0.9 cu ft",
          "1.1 cu ft",
          "1.2 cubic feet",
          "1.3 cu ft",
        ],
      },
      {
        name: "material",
        value: ["stainless steel", "glass", "metal", "metal+ABS+glass"],
      },
    ],
  },
  {
    name: "Room Air Conditioners",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: ["white"],
      },
      {
        name: "item dimension LxWxH",
        value: [
          "7 x 7 x 7.4 inches",
          "11.85 x 6.85 x 6.69 inches",
          "16.44 x 15.00 x 12.56 inches",
        ],
      },
    ],
  },
  {
    name: "Laptops",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Macbooks",
    level: 1,
    rootPath: ["Electronics", "Laptops"],
    criteria: [
      {
        name: "color",
        value: ["gray", "silver"],
      },
      {
        name: "size",
        value: ["128 GB", "256 GB", "512 GB", "1 TB"],
      },
    ],
  },
  {
    name: "All In Ones",
    level: 1,
    rootPath: ["Electronics", "Laptops"],
    criteria: [
      {
        name: "color",
        value: [
          "blue",
          "purple",
          "green",
          "orange",
          "black",
          "yellow",
          "silver",
        ],
      },
      {
        name: "disk size",
        value: ["128 GB", "256 GB", "512 GB", "1 TB"],
      },
      {
        name: "ram",
        value: [
          "4 GB",
          "8 GB",
          "16 GB",
          "32 GB",
          "64 GB",
          "128 GB",
          "256 GB",
          "512 GB",
        ],
      },
      {
        name: "style",
        value: ["AIO", "AOI Only", "monitor bundle"],
      },
    ],
  },
  {
    name: "2 In 1 Laptops",
    level: 1,
    rootPath: ["Electronics", "Laptops"],
    criteria: [
      {
        name: "color",
        value: ["platinium silver", "graphite grey", "red", "gray", "black"],
      },
      {
        name: "size",
        value: ["11.6 inches", "13.4 inches", "14 inches"],
      },

      {
        name: "Condition",
        value: ["new", "second hand"],
      },
    ],
  },
  {
    name: "Accessories",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Hard Disks",
    level: 1,
    rootPath: ["Electronics", "Accessories"],
    criteria: [
      {
        name: "color",
        value: ["black", "silver", "blue", "red"],
      },
      {
        name: "size",
        value: [
          "128 GB",
          "256 GB",
          "512 GB",
          "1 TB",
          "2 TB",
          "4 TB",
          "5 TB",
          "8 TB",
          "12 TB",
          "14 TB",
          "16 TB",
          "18 TB",
        ],
      },
      {
        name: "type",
        value: ["Internal HDD", "Internal SSD", "External HDD", "External SSD"],
      },
    ],
  },
  {
    name: "Routers",
    level: 1,
    rootPath: ["Electronics", "Accessories"],
    criteria: [
      {
        name: "style",
        value: [
          "VPN Router",
          "Hardware controller",
          "AC 1000 WIFI",
          "AC 1200 WIFI",
          "AC 1600 WIFI",
          "AC WIFI",
          "AX WIFI 6",
        ],
      },
      {
        name: "ports",
        value: ["1", "2", "3", "4", "5"],
      },
      {
        name: "bandwidth",
        value: [
          "150 Mbps",
          "1200 Mbps",
          "1300 Mbps",
          "1600 Mbps",
          "1750 Mbps",
          "100 Mbps",
        ],
      },
      {
        name: "color",
        value: ["black", "white"],
      },
    ],
  },
  {
    name: "Printers",
    level: 1,
    rootPath: ["Electronics", "Accessories"],
    criteria: [
      {
        name: "style",
        value: ["printer", "printer+instant ink", "printer+ XL ink", "ET-2720"],
      },
    ],
  },
  {
    name: "Monitors",
    level: 1,
    rootPath: ["Electronics", "Accessories"],
    criteria: [
      {
        name: "size",
        value: ["24 inches", "27 inches", "34 inches"],
      },
      {
        name: "style ",
        value: ["60Hz", "75Hz", "75Hz AMD", "160HHz"],
      },
      {
        name: "color",
        value: ["blue", "black"],
      },
    ],
  },
  {
    name: "USB Drives",
    level: 1,
    rootPath: ["Electronics", "Accessories"],
    criteria: [
      {
        name: "size",
        value: [
          "2GB",
          "4GB",
          "8GB",
          "16GB",
          "32GB",
          "64GB",
          "128GB",
          "256GB",
          "512GB",
          "1TB",
        ],
      },
      {
        name: "color",
        value: ["blue", "black", "green", "red", "pink", "silver", "yellow"],
      },
    ],
  },
  {
    name: "Projectors",
    level: 1,
    rootPath: ["Electronics", "Accessories"],
    criteria: [
      {
        name: "color",
        value: ["blue", "black"],
      },
    ],
  },
  {
    name: "Télévisions",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "LED",
    level: 1,
    rootPath: ["Electronics", "Télévisions"],
    criteria: [
      {
        name: "Refresh Rate",
        value: ["60Hz", "120Hz"],
      },
      {
        name: "size",
        value: [
          "32 inches",
          "40 inches",
          "43 inches",
          "50 inches",
          "55 inches",
          "65 inches",
          "75 inches",
          "85 inches",
          "90 inches",
        ],
      },
    ],
  },
  {
    name: "4K UHD ",
    level: 1,
    rootPath: ["Electronics", "Télévisions"],
    criteria: [
      {
        name: "Refresh Rate",
        value: ["60Hz", "120Hz"],
      },
      {
        name: "size",
        value: [
          "32 inches",
          "40 inches",
          "43 inches",
          "50 inches",
          "55 inches",
          "65 inches",
          "75 inches",
          "85 inches",
          "90 inches",
        ],
      },
    ],
  },
  {
    name: "Smart TV ",
    level: 1,
    rootPath: ["Electronics", "Télévisions"],
    criteria: [
      {
        name: "Refresh Rate",
        value: ["60Hz", "120Hz"],
      },
      {
        name: "size",
        value: [
          "32 inches",
          "40 inches",
          "43 inches",
          "50 inches",
          "55 inches",
          "65 inches",
          "75 inches",
          "85 inches",
          "90 inches",
        ],
      },
    ],
  },
  {
    name: "Télévisions Accessories ",
    level: 1,
    rootPath: ["Electronics", "Télévisions"],
    criteria: [
      {
        name: "Material",
        value: ["metal", "plastic"],
      },
      {
        name: "Minimum compatble TV size",
        value: ["37 inches"],
      },
    ],
  },
  {
    name: " Speakers",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Home Theaters",
    level: 1,
    rootPath: ["Electronics", "Speakers"],
    criteria: [
      {
        name: "color",
        value: ["black"],
      },
      {
        name: "style",
        value: ["PSW", "subwoofer", "analog", "analog/optic", "denon AVR"],
      },
    ],
  },
  {
    name: "Headphones ",
    level: 1,
    rootPath: ["Electronics", "Télévisions"],
    criteria: [
      {
        name: "color",
        value: [
          "blue",
          "black",
          "green",
          "red",
          "pink",
          "silver",
          "yellow",
          "champagne",
          "purple",
          "stealth",
          "gray",
          "white",
        ],
      },
      {
        name: "size",
        value: ["small", "medium"],
      },
    ],
  },
  {
    name: " Videos Games",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Playstation 4",
    level: 1,
    rootPath: ["Electronics", " Videos Games"],
    criteria: [
      {
        name: "color",
        value: ["white+blue", "white+black", "black", "white", "blue"],
      },
      {
        name: "Material",
        value: ["plastic"],
      },
      {
        name: "size",
        value: ["64GB", "128GB", "256GB"],
      },
    ],
  },
  {
    name: "Playstation 3 ",
    level: 1,
    rootPath: ["Electronics", "Videos Games"],
    criteria: [
      {
        name: "color",
        value: ["white+blue", "white+black", "black", "white", "blue"],
      },
      {
        name: "Material",
        value: ["plastic"],
      },
      {
        name: "size",
        value: ["64GB", "128GB", "256GB"],
      },
    ],
  },
  {
    name: "Xbox One ",
    level: 1,
    rootPath: ["Electronics", "Videos Games"],
    criteria: [
      {
        name: "color",
        value: ["white+blue", "white+black", "black", "white", "blue"],
      },
      {
        name: "Material",
        value: ["plastic"],
      },
      {
        name: "size",
        value: ["64GB", "128GB", "256GB"],
      },
    ],
  },
  {
    name: "Nintendo Switch ",
    level: 1,
    rootPath: ["Electronics", "Videos Games"],
    criteria: [
      {
        name: "color",
        value: ["white+blue", "white+black", "black", "white", "blue"],
      },
      {
        name: "Material",
        value: ["plastic"],
      },
      {
        name: "size",
        value: ["64GB", "128GB", "256GB"],
      },
    ],
  },
  {
    name: "Cameras",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Lense & Flash",
    level: 1,
    rootPath: ["Electronics", "Cameras"],
    criteria: [
      {
        name: "NC",
        value: [],
      },
      {
        name: "Accessories",
        value: [],
      },
    ],
  },
  {
    name: " Car & Vehicule Electronics",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Office Products",
    level: 3,
    rootPath: [],
    criteria: [],
  },
  {
    name: " Office Electronics",
    level: 2,
    rootPath: ["Office Products"],
    criteria: [],
  },
  {
    name: "Electronic Organizers",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["black", "gray", "cyan"],
      },
    ],
  },
  {
    name: "Electronic Dictionaries",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["black", "gray", "cyan"],
      },
    ],
  },
  {
    name: "Headsets",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["black", "gray", "cyan"],
      },
    ],
  },
  {
    name: "copiers",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
    ],
  },
  {
    name: "calculators",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
    ],
  },
  {
    name: "Document Cameras",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
    ],
  },
  {
    name: "Fax Machines",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
    ],
  },
  {
    name: "Other Office Equipment",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
    ],
  },
  {
    name: "PDAs,H&helds & Accessories",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "size",
        value: [
          "3G communication",
          "3G communication + 1D Scanning",
          "3G communication + 1D Scanning + 1 NFC module",
          "3G communication + NFC module",
        ],
      },
    ],
  },
  {
    name: "POS Equipment",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "Style",
        value: ["Bluetooth", "Ethernet LAN", "USB", "wifi WLAN"],
      },
    ],
  },
  {
    name: "Presentation products",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
    ],
  },
  {
    name: "Scanners & Accesories",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "Style",
        value: [
          "ScanSnap IX 1400 Black",
          "ScanSnap IX 1600 Black Deluxe Bundle",
          "ScanSnap IX 1600 white",
        ],
      },
    ],
  },
  {
    name: "Telephones & Accessories",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["silver", "white"],
      },
      {
        name: "size ",
        value: [" 2 h&sets", "3 H&sets", "3 H&sets", "VS112 Accessory H&sets"],
      },
      {
        name: "Material",
        value: ["plastic", "Metal"],
      },
    ],
  },
  {
    name: "Videos Projectors & Accessories",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: [],
      },
    ],
  },
  {
    name: " Office supplies",
    level: 2,
    rootPath: ["Office Products"],
    criteria: [],
  },
  {
    name: "Filleng Products",
    level: 1,
    rootPath: ["Office Products", "Office supplies"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "size",
        value: ["A4 ", "A3", "A2", "A1"],
      },
      {
        name: "style",
        value: [],
      },
    ],
  },
  {
    name: "Blinder",
    level: 1,
    rootPath: ["Office Products", "Office supplies"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "size",
        value: [
          "0.5 inches ",
          "1.5 inches",
          "3 Inches",
          "4 Inches",
          "5 Inches",
        ],
      },
      {
        name: "style",
        value: ["1 Pack", "12 Pack", "4 Pack"],
      },
    ],
  },
  {
    name: " appliances",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "Refrigerators ",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: ["true stainless steel", "black stainless steel", "white"],
      },
      {
        name: "capacity",
        value: ["16 cubic feet ", "650pounds"],
      },
      {
        name: "material",
        value: ["stainless glass", "plastic glass"],
      },
    ],
  },
  {
    name: "Washing machines ",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: [
          "white & blue",
          "magnetic gray",
          "champagne gold",
          "gray",
          "black",
          "merlot",
          "silver",
        ],
      },
      {
        name: "size",
        value: [
          "17.6 pounds ",
          "17.6 ibs",
          "5 kilograms",
          "8 kilograms",
          "1.6 cubic feet",
          "9 pounds",
          "6.6 pounds",
        ],
      },
      {
        name: "material",
        value: ["stainless steel", "alloy steel", "plastic"],
      },
    ],
  },
  {
    name: "Ovens & Ranges ",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: ["stainless steel", "black brushed silver", "white"],
      },
      {
        name: "material",
        value: ["metal", "nonstick", "plastic"],
      },
    ],
  },
  {
    name: "Microwaves ",
    level: 1,
    rootPath: ["Electronics", "appliances"],
    criteria: [
      {
        name: "color",
        value: [
          "stainless steel",
          "black stainless steel",
          "white",
          "green",
          "red",
          "stainless",
          "blue",
        ],
      },
      {
        name: "capacity",
        value: [
          "0.6 cu ft ",
          "0.7 cu ft",
          "0.9 cu ft",
          "1.1 cu ft",
          "1.2 cubic feet",
          "1.3 cu ft",
        ],
      },
      {
        name: "material",
        value: ["stainless steel", "glass", "metal", "metal+ABS+glass"],
      },
    ],
  },
  {
    name: " Laptops",
    level: 2,
    rootPath: ["Electronics"],
    criteria: [],
  },
  {
    name: "All In Ones ",
    level: 1,
    rootPath: ["Electronics", "Laptops"],
    criteria: [
      {
        name: "color",
        value: [
          "blue",
          "purple",
          "green",
          "orange",
          "black",
          "yellow",
          "silver",
        ],
      },
      {
        name: "Disk size",
        value: ["128 GB", "256 GB", "512 GB", "1 TB"],
      },
      {
        name: "ram",
        value: ["4 GB", "8 GB", "16 GB"],
      },
      {
        name: "style",
        value: ["AIO", "AOI Only", "monitor bundle"],
      },
      {
        name: "Processor Description",
        value: [
          "Intel Core I5-10400T",
          "Ryzen 5 4500U",
          "Ryzen 5 5500U",
          "Ryzen 7 5700U",
          "Ryzen 3 3250U",
          "7- core GPU",
          "Intel pentium gold 7505",
        ],
      },
    ],
  },
  {
    name: "2 In 1 Laptops ",
    level: 1,
    rootPath: ["Electronics", "Laptops"],
    criteria: [
      {
        name: "color",
        value: ["platinium silver", "graphite grey", "red", "gray", "black"],
      },
      {
        name: "size",
        value: ["11.6 inches", "13.4 inches", "14 inches"],
      },

      {
        name: "Condition",
        value: ["new"],
      },
    ],
  },
  {
    name: "Routers ",
    level: 1,
    rootPath: ["Electronics", "Accessories"],
    criteria: [
      {
        name: "style",
        value: [
          "VPN Router",
          "Hardware controller",
          "AC 1000 WIFI",
          "AC 1200 WIFI",
          "AC 1600 WIFI",
          "AC WIFI",
          "AX WIFI 6",
        ],
      },
      {
        name: "Number of port ",
        value: ["1", "2", "3", "4", "5"],
      },
      {
        name: "Data Transfert Rate",
        value: [
          "150 Mbps",
          "1200 Mbps",
          "1300 Mbps",
          "1600 Mbps",
          "1750 Mbps",
          "100 Mbps",
        ],
      },
      {
        name: "color",
        value: ["black", "white"],
      },
    ],
  },
  {
    name: "Office Electronics",
    level: 1,
    rootPath: ["Office Products", "Office Electronics"],
    criteria: [
      {
        name: "color",
        value: ["black", "gray", "cyan"],
      },
    ],
  },
  {
    name: "Letter Trays & Stacking Supports",
    level: 1,
    rootPath: ["Office Products", "Office supplies"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "Material",
        value: ["Paper ", "Metal", "silver", "Alloy Steel", "plastic"],
      },
      {
        name: "syze",
        value: ["6 Pack - Letter", "0.6 Pack-letter", "12x12 Inches"],
      },
    ],
  },
  {
    name: "Drawer Organizers",
    level: 1,
    rootPath: ["Office Products", "Office supplies"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
    ],
  },
  {
    name: "Desk supplies Holders & Dispensers",
    level: 1,
    rootPath: ["Office Products", "Office supplies"],
    criteria: [],
  },
  {
    name: "Paper",
    level: 2,
    rootPath: ["Office Products"],
    criteria: [],
  },
  {
    name: "Copy & Multipurpose Paper",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "size",
        value: [
          "25 Sheets",
          "50 Sheets",
          "100 Sheets",
          " 250 Sheets",
          "500 Sheets",
          "1000 Sheets",
        ],
      },
      {
        name: "style",
        value: [
          "3 Holes (8.5x11)",
          "Ledger (11x17)",
          "Legal (8.5x14)",
          "Letter (8.5x11), A4",
          "Multipurpose (8.5x11)",
          "30% Recycled (8.5x11)",
        ],
      },
    ],
  },
  {
    name: "Laser Printer Paper",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["customize"],
      },
      {
        name: "size",
        value: [
          "25 Sheets",
          "50 Sheets",
          "100 Sheets",
          " 250 Sheets",
          "500 Sheets",
          "1000 Sheets",
        ],
      },
      {
        name: "style",
        value: [
          "Premium24",
          "Premium28",
          "Premium32",
          "11 X 17, 24 Lb",
          "8.5 X 11, 28 Lb",
          "8.5 X 11, 80 Lb Cover",
          "8.5 X 14, 24 Lb",
          "8.5 X 11, 24 Lb",
          "8.5 X 11",
          "3-Hole Punch, 24 Lb",
        ],
      },
    ],
  },
  {
    name: "Filler Paper",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["Beige", "Green", "White", "Wide", "Graph", "Wide01"],
      },
      {
        name: "size",
        value: [
          "1 Pack",
          "2 Pack",
          "3 Pack",
          "4 Pack",
          "12 Pack",
          "Reinforced Filler",
        ],
      },
    ],
  },
  {
    name: "Cover Stock",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["Assorted", "White", "Blue", "Green", "Red", "Yellow"],
      },
      {
        name: "material",
        value: ["Paper"],
      },
    ],
  },
  {
    name: "Carbonless Copy Paper",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["White", "Green"],
      },
      {
        name: "number of items",
        value: ["2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
    ],
  },
  {
    name: "Cards & Card Stock",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["White", "Assorted"],
      },
      {
        name: "size",
        value: [
          "1 Set (3X5, 1000 Count)",
          "4X6, 1000 Count",
          "4X6, 2000 Count",
          "3X5, 1000 Count",
          "4X6, 1000 Count",
        ],
      },
      {
        name: "style",
        value: ["Cards", " Cards + Assortment"],
      },
    ],
  },
  {
    name: "Graph Paper",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "size",
        value: ["A1", "A2", "A3", "A4", "A5", "B5"],
      },
    ],
  },
  {
    name: "Notebooks & Writing Pads",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "style",
        value: ["5-Inch by 8-Inch", "8.5-Inch By 11.75-Inch"],
      },
      {
        name: "size",
        value: ["10 Pack", "20 Pack", "40 Pack", "100 Pack"],
      },
    ],
  },
  {
    name: "Photo Paper",
    level: 1,
    rootPath: ["Office Products", "Paper"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "style",
        value: ["Gift Bundle", "Print Photo Paper", "Starter Bundle"],
      },
      {
        name: "size",
        value: ["10 Pack", "20 Pack", "40 Pack", "100 Pack"],
      },
    ],
  },
  {
    name: "Office Furniture & Lighting",
    level: 2,
    rootPath: ["Office Products"],
    criteria: [],
  },
  {
    name: "Cabinets, Racks & Shelves",
    level: 1,
    rootPath: ["Office Products", "Office Furniture & Lighting"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "material",
        value: ["Wood", "Alloy Steel", "Metal"],
      },
    ],
  },
  {
    name: "Sofas & Couches",
    level: 1,
    rootPath: ["Office Products", "Office Furniture & Lighting"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "material",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Desks & Workstations",
    level: 1,
    rootPath: ["Office Products", "Office Furniture & Lighting"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "material",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Furniture Accessories",
    level: 1,
    rootPath: ["Office Products", "Office Furniture & Lighting"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "material",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Tables",
    level: 1,
    rootPath: ["Office Products", "Office Furniture & Lighting"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
      {
        name: "material",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Printers & Ink",
    level: 2,
    rootPath: ["Office Products"],
    criteria: [],
  },
  {
    name: "Inkjet Computer Printers",
    level: 1,
    rootPath: ["Office Products", "Printers & Ink"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White"],
      },
      {
        name: "style",
        value: [
          "Printer",
          "Printer + Instant Ink",
          "Printer + St&ard Ink",
          "Printer + XL Ink",
        ],
      },
    ],
  },
  {
    name: "Laser Computer Printers",
    level: 1,
    rootPath: ["Office Products", "Printers & Ink"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White"],
      },
      {
        name: "model",
        value: ["Print", "Print, Scan, Copy"],
      },
      {
        name: "style",
        value: ["Printer", "Printer + 550-Sheet Feeder"],
      },
    ],
  },
  {
    name: "Multi-Function Printers",
    level: 1,
    rootPath: ["Office Products", "Printers & Ink"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White"],
      },
      {
        name: "model",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Office & School Supplies",
    level: 1,
    rootPath: ["Office Products", "Printers & Ink"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Computer Printer Ink & Toner",
    level: 1,
    rootPath: ["Office Products", "Printers & Ink"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Laser Printer Drums & Toner",
    level: 1,
    rootPath: ["Office Products", "Printers & Ink"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Inkjet Computer Printer Ink",
    level: 1,
    rootPath: ["Office Products", "Printers & Ink"],
    criteria: [
      {
        name: "color",
        value: ["customized"],
      },
    ],
  },
  {
    name: "Home goods",
    level: 3,
    rootPath: [],
    criteria: [],
  },
  {
    name: "Furniture",
    level: 2,
    rootPath: ["Home goods "],
    criteria: [],
  },
  {
    name: "Bedroom",
    level: 1,
    rootPath: ["Home goods", "Furniture"],
    criteria: [
      {
        name: "size",
        value: [
          "Twin",
          "Twin XL",
          "Full",
          "Queen",
          "Short queen",
          "King",
          "California king",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Wood", "Metal", "Steel"],
      },
      {
        name: "style",
        value: [
          "8 inch mattress only",
          "8 inch mattress with platform bed frame",
          "10 inch mattress only",
          "10 inch mattress with platform",
          "12 inch mattress only",
          "12 inch mattress with platform bed frame",
          "14-inch",
          "16-Inch",
          "18-inch",
          "19-inch",
        ],
      },
    ],
  },
  {
    name: "Living Room",
    level: 1,
    rootPath: ["Home goods", "Furniture"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: [
          "Wood",
          "Steel",
          "Particleboard & Metal",
          "Tempered glass",
          "Glass",
          "Plastic",
          "Particle Board",
          "Aluminum",
          "Laminate",
        ],
      },
    ],
  },
  {
    name: "Kitchen & driving room",
    level: 1,
    rootPath: ["Home goods", "Furniture"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: [
          "Carbon Steel",
          "Plastic",
          "Metal",
          "Glass",
          "Wood",
          "PVC",
          "Chipboard",
        ],
      },
    ],
  },
  {
    name: "Home office",
    level: 1,
    rootPath: ["Home goods", "Furniture"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: [
          "Mesh",
          "Locking",
          "MDF + Metal",
          "Wood",
          "Steel",
          "Paperboard",
          "Plastic",
        ],
      },
    ],
  },
  {
    name: "Home entertainment",
    level: 1,
    rootPath: ["Home goods", "Furniture"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: [
          "Plastic",
          "Glass",
          "Steel",
          "Medium",
          "Density",
          "Fiberboard",
          "Wood",
        ],
      },
    ],
  },
  {
    name: "Bean bags",
    level: 1,
    rootPath: ["Home goods", "Furniture"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: [
          "Polyurethane",
          "Polystyrene",
          "Textile",
          "Fabric",
          "Memory Foam",
          "Amazon Basics",
        ],
      },
      {
        name: "size",
        value: [
          "75L",
          "100L",
          "100L 2 Packs",
          "Medium",
          "Chair 3’",
          "Chair 4’",
          "Chair’5",
          "Lounger 6’",
          "Lounger 7’",
        ],
      },
    ],
  },
  {
    name: "Decor",
    level: 2,
    rootPath: ["Home goods"],
    criteria: [],
  },
  {
    name: "Wallpaper & decals",
    level: 1,
    rootPath: ["Home goods", "Decor"],
    criteria: [
      {
        name: "size",
        value: [
          "11.8’’ x78.7",
          "15.7” x 118”",
          "17.71’’ x78’’",
          "17.71’’x196.8’’",
          "24’’ x118’’",
          "24” x 196”",
          "17.71’’ x 78’’",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Polyvinyl Chloride", "Vinyl", "Plastic"],
      },
    ],
  },
  {
    name: "clocks",
    level: 1,
    rootPath: ["Home goods", "Decor"],
    criteria: [
      {
        name: "size",
        value: [
          "With projection”, “With projection & bed shaker”, “10 Inch”, “12 Inch”, “13 Inch”, “16 Inch",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "Operation Mode",
        value: ["Electrical", "Mechanical"],
      },
    ],
  },
  {
    name: "painting",
    level: 1,
    rootPath: ["Home goods", "Decor"],
    criteria: [
      {
        name: "size",
        value: [
          "With projection”, “With projection & bed shaker”, “10 Inch”, “12 Inch”, “13 Inch”, “16 Inch",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "Frame Material",
        value: ["Plastic", "Regular", "Engineered Wood"],
      },
    ],
  },
  {
    name: "C&les & holders",
    level: 1,
    rootPath: ["Home goods", "Decor"],
    criteria: [
      {
        name: "size",
        value: [
          "Small tumbler",
          "Medium",
          "2-wick tumbler",
          "Medium jar",
          "Medium perfect pillar",
          "Large 2-wick tumbler",
          "Large jar",
        ],
      },
      {
        name: "style",
        value: [
          "Apple cider",
          "Apple pumpkin",
          "Autumn leave",
          "Autumn pearl",
          "Cranberry chutney",
          "Crisp Fall night",
          "Farmers market",
          "Honeycrisp apple cider",
          "Spiced",
          "Pumpkin",
          "Sugared cinnamon apple",
          "Apple pumpkin",
          "Sugared pumpkin swirl",
          "Autumn gathering",
          "Autumn in the park",
          "Autumn leaves",
          "Autumn wreath",
        ],
      },
      {
        name: "pattern",
        value: ["Large", "X large", "XX large", "66", "88", "78"],
      },
    ],
  },
  {
    name: "slipcovers",
    level: 1,
    rootPath: ["Home goods", "Decor"],
    criteria: [
      {
        name: "size",
        value: [
          "Apple cider",
          "Apple pumpkin",
          "Autumn leave",
          "Autumn pearl",
          "Cranberry chutney",
          "Crisp Fall night",
          "Farmers market",
          "Honeycrisp apple cider",
          "Spiced",
          "Pumpkin",
          "Sugared cinnamon apple",
          "Apple pumpkin",
          "Sugared pumpkin swirl",
          "Autumn gathering",
          "Autumn in the park",
          "Autumn leaves",
          "Autumn wreath",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "curtains",
    level: 1,
    rootPath: ["Home goods", "Decor"],
    criteria: [
      {
        name: "size",
        value: [
          "38x54 inch",
          "38x63 inch",
          "38x84 inch",
          "42x63 inch",
          "42x84 inch",
          " 42x95 inch",
          "52x95 inch",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "Green", "red", "yellow"],
      },
    ],
  },
  {
    name: "Kitchen & Dining",
    level: 2,
    rootPath: ["Home goods"],
    criteria: [],
  },
  {
    name: "cookware",
    level: 1,
    rootPath: ["Home goods", "Kitchen & Dining"],
    criteria: [
      {
        name: "size",
        value: ["21 inch", "25 inch", "5 quart", "8 inch", "12.5 inch"],
      },
      {
        name: "color",
        value: ["Black", "Green", "White", "red", "yellow"],
      },
      {
        name: "material",
        value: ["Wood", "Metal", "Steel"],
      },
      {
        name: "style",
        value: [
          "Chef’s platter",
          "large oval",
          "Fajita platter",
          "rectangle",
          "Small oval3 options",
          "Oval with h&le",
          "skillet",
          "Dutch oven",
          "grill pan",
        ],
      },
    ],
  },
  {
    name: "dinnerware",
    level: 1,
    rootPath: ["Home goods", "Kitchen & Dining"],
    criteria: [
      {
        name: "size",
        value: [
          "Service for 4 (12pcs)",
          "Service fos 4 (16pcs)",
          "Service for 6 (42 pcs)",
        ],
      },
      {
        name: "color",
        value: ["Black", "Green", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "bakeware",
    level: 1,
    rootPath: ["Home goods", "Kitchen & Dining"],
    criteria: [
      {
        name: "size",
        value: [
          "2-pack",
          "1-pack",
          "1-pack/big sheet",
          "pack of 1,2-pack",
          "pack of 2(half sheet)",
        ],
      },
      {
        name: "style",
        value: [
          "Half sheet",
          "big sheet",
          "pack of 1 aluminium",
          "3-piece pan set",
        ],
      },
    ],
  },
  {
    name: "cutlery",
    level: 1,
    rootPath: ["Home goods", "Kitchen & Dining"],
    criteria: [
      {
        name: "color",
        value: ["Black", "Green", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Glassware & drinkware",
    level: 1,
    rootPath: ["Home goods", "Kitchen & Dining"],
    criteria: [
      {
        name: "color",
        value: ["Black", "Green", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Kitchen tools",
    level: 1,
    rootPath: ["Home goods", "Kitchen & Dining"],
    criteria: [
      {
        name: "size",
        value: ["15-pack", "30-pack", "45-pack"],
      },
      {
        name: "material",
        value: ["cotton"],
      },
      {
        name: "color",
        value: ["Black", "Green", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Home Accents & Other Crafts",
    level: 2,
    rootPath: ["Home goods"],
    criteria: [],
  },
  {
    name: "Lightings",
    level: 1,
    rootPath: ["Home goods", "Home Accents & Other Crafts"],
    criteria: [
      {
        name: "Item display length",
        value: ["100.0 feet", "50.0 fee"],
      },
      {
        name: "material",
        value: ["100.0 feet", "50.0 fee"],
      },
      {
        name: "material",
        value: ["glass"],
      },
    ],
  },
  {
    name: "Carpets & rugs",
    level: 1,
    rootPath: ["Home goods", "Home Accents & Other Crafts"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Decorative cushions",
    level: 1,
    rootPath: ["Home goods", "Home Accents & Other Crafts"],
    criteria: [
      {
        name: "size",
        value: ["Medium", "large"],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Sewing & accessories",
    level: 1,
    rootPath: ["Home goods", "Home Accents & Other Crafts"],
    criteria: [
      {
        name: "size",
        value: ["Sewing machine bag", "Sewing machine bag with wheels"],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Coins & stamps collection",
    level: 1,
    rootPath: ["Home goods", "Home Accents & Other Crafts"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Bed",
    level: 2,
    rootPath: ["Home goods "],
    criteria: [],
  },
  {
    name: "Comforters",
    level: 1,
    rootPath: ["Home goods", "Bed"],
    criteria: [
      {
        name: "size",
        value: [
          "Twin",
          "Twin XL",
          "Full",
          "Queen",
          "Short queen",
          "King",
          "California king",
        ],
      },
    ],
  },
  {
    name: "pillows",
    level: 1,
    rootPath: ["Home goods", "HBed"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Duvet sets",
    level: 1,
    rootPath: ["Home goods", "Bed"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "Twin",
          "Twin XL",
          "Full",
          "Queen",
          "Short queen",
          "King",
          "California king",
        ],
      },
    ],
  },
  {
    name: "bedspreads",
    level: 1,
    rootPath: ["Home goods", "Bed"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "Twin",
          "Twin XL",
          "Full",
          "Queen",
          "Short queen",
          "King",
          "California king",
        ],
      },
    ],
  },
  {
    name: "Bedding sheets",
    level: 1,
    rootPath: ["Home goods", "Bed"],
    criteria: [
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "size",
        value: [
          "Twin",
          "Twin XL",
          "Full",
          "Queen",
          "Short queen",
          "King",
          "California king",
        ],
      },
    ],
  },
  {
    name: "Maitress stoppers",
    level: 1,
    rootPath: ["Home goods", "Bed"],
    criteria: [
      {
        name: "style",
        value: [
          "2’’  soothing lavender infusion",
          "2’’ calving aloe vera infusion",
          "3’’ soothing lavender infusion",
          " 3’’ calvin aloe vera infusion",
          "4’’ fresh bamboo charcoal infusion",
          "4’’ soothing lavender infusion",
          "4’’ calving aloe vera infusion",
          "4’’ calming green tea  infusion",
        ],
      },
      {
        name: "size",
        value: [
          "Twin",
          "Twin XL",
          "Full",
          "Queen",
          "Short queen",
          "King",
          "California king",
        ],
      },
    ],
  },
  {
    name: "Bathroom fixtures",
    level: 2,
    rootPath: ["Home goods "],
    criteria: [],
  },
  {
    name: "towels",
    level: 1,
    rootPath: ["Home goods", "Bathroom fixtures"],
    criteria: [
      {
        name: "size",
        value: [
          "Twin",
          "Twin XL",
          "Full",
          "Queen",
          "Short queen",
          "King",
          "California king",
        ],
      },
    ],
  },
  {
    name: "sink",
    level: 1,
    rootPath: ["Home goods", "Bathroom fixtures"],
    criteria: [
      {
        name: "size",
        value: ["12x12 inch"],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "urinals",
    level: 1,
    rootPath: ["Home goods", "Bathroom fixtures"],
    criteria: [
      {
        name: "style",
        value: [
          "Clear shower head",
          "white blue shower head",
          "white clear shower head",
          "blue shower head",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
      {
        name: "Material",
        value: ["acrylonitrile butadiene styrene"],
      },
    ],
  },
  {
    name: "Beauty & personal care",
    level: 3,
    rootPath: [],
    criteria: [],
  },
  {
    name: "Hair care",
    level: 2,
    rootPath: ["Beauty & personal care"],
    criteria: [],
  },
  {
    name: "Hair dyes",
    level: 1,
    rootPath: ["Beauty & personal care", "Hair care"],
    criteria: [
      {
        name: "size",
        value: [
          "Pack of 1",
          "Pack of 2",
          "Pack of 3",
          "1 count ( pack of 1)",
          " 5 count ( pack of 1)",
          "5.58 FI Oz (pack of 6)",
          "5.6 FL Oz (pack of 6)",
          "5.75 FI Oz (pack of 6)",
        ],
      },
      {
        name: "color",
        value: ["Black", "White", "red", "yellow"],
      },
    ],
  },
  {
    name: "Hair treatment",
    level: 1,
    rootPath: ["Beauty & personal care", "Hair care"],
    criteria: [
      {
        name: "size",
        value: ["1 pack", "2 pack"],
      },
    ],
  },
  {
    name: "conditioners",
    level: 1,
    rootPath: ["Beauty & personal care", "Hair care"],
    criteria: [
      {
        name: "size",
        value: ["new", "old"],
      },
    ],
  },
  {
    name: "Tool & Accessories",
    level: 2,
    rootPath: ["Beauty & Personal Care"],
    criteria: [],
  },
  {
    name: "Makeup brushes",
    level: 1,
    rootPath: ["Beauty & Personal Care", "Tool & accessories"],
    criteria: [
      {
        name: "color",
        value: ["White", "Black"],
      },
    ],
  },
  {
    name: "Cotton & Swaba",
    level: 1,
    rootPath: ["Beauty & Personal Care", "Tool & accessories"],
    criteria: [
      {
        name: "size",
        value: ["2.9 Inch (Pack of 1125", "2400 pcs wood"],
      },
    ],
  },
  {
    name: "Nails Tools",
    level: 1,
    rootPath: ["Beauty & Personal Care", "Tool & accessories"],
    criteria: [
      {
        name: "color",
        value: ["White", "Black", "Red", "Pink", "Gold"],
      },
    ],
  },
  {
    name: "Mirrors",
    level: 1,
    rootPath: ["Beauty & Personal Care", "Tool & accessories"],
    criteria: [
      {
        name: "size",
        value: ["xsmall", "small", "medium", "large", "xlarge"],
      },
    ],
  },
  {
    name: "Skin Care",
    level: 2,
    rootPath: ["Beauty & Personal Care"],
    criteria: [],
  },
  {
    name: "Body Lotions",
    level: 1,
    rootPath: ["Beauty & Personal Care", "Skin Care"],
    criteria: [
      {
        name: "size",
        value: ["2.5 FL OZ", "6.8 FL OZ", "8.4 FL OZ", "16.9 FL OZ"],
      },
    ],
  },
  {
    name: "Face Creams",
    level: 1,
    rootPath: ["Beauty & Personal Care", "Skin Care"],
    criteria: [
      {
        name: "size",
        value: ["21 Ounce", "32 FL OZ"],
      },
    ],
  },
  {
    name: "Personal care",
    level: 2,
    rootPath: ["Beauty & personal care"],
    criteria: [],
  },
  {
    name: "Soap & shower gel",
    level: 1,
    rootPath: ["Beauty & personal care", "Personal care"],
    criteria: [
      {
        name: "color",
        value: ["Sage Milk", "verbena", "argumes"],
      },
      {
        name: "size ",
        value: ["150 gramm", "350 gramm"],
      },
    ],
  },
  {
    name: "Mouth wash",
    level: 1,
    rootPath: ["Beauty & personal care", "Personal care"],
    criteria: [
      {
        name: "size",
        value: ["16.9 FL OZ (pack of4 )"],
      },
    ],
  },
  {
    name: "Toothbrushes",
    level: 1,
    rootPath: ["Beauty & personal care", "Personal care"],
    criteria: [
      {
        name: "size",
        value: [
          "3 count",
          "set of 3",
          "set of 3",
          " 1 box 3 count",
          "pack of 3",
        ],
      },
    ],
  },
  {
    name: "toothpaste",
    level: 1,
    rootPath: ["Beauty & personal care", "Personal care"],
    criteria: [
      {
        name: "size",
        value: ["Pack of 3", "Pack of 6"],
      },
      {
        name: "style",
        value: [
          "Frosty mint",
          "brisk mint",
          " 8 ounce",
          "20 count",
          "75 count",
          "90 count",
          "150 count",
        ],
      },
    ],
  },
  {
    name: "dodorants",
    level: 1,
    rootPath: ["Beauty & personal care", "Personal care"],
    criteria: [
      {
        name: "size",
        value: ["2.7 ounce ( pack of 2 )"],
      },
      {
        name: "style",
        value: ["everest"],
      },
    ],
  },
  {
    name: "Feminine hygiene",
    level: 1,
    rootPath: ["Beauty & personal care", "Personal care"],
    criteria: [
      {
        name: "size",
        value: [
          "Baby powder",
          "Blissful escape",
          "Sheer floral",
          "Freshening spray",
          "Single",
          "Dry wash spray",
        ],
      },
      {
        name: "style",
        value: ["2 FL OZ (pack of 1)", "2 ounce( pack of 3 )"],
      },
    ],
  },
];

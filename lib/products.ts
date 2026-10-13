export interface Product {
  id: string;
  name: string;
  subtitle: string;
  collection: "royal" | "alpha" | "laperfume" | "sets";
  collectionName: string;
  price: number;
  image: string;
  secondaryImage?: string;
  volume: string;
  notes: string;
  description: string;
  categories: ("men" | "women" | "unisex" | "new-arrivals" | "new-collection" | "royal" | "sets")[];
  tag: string;
  isRoyal: boolean;
}

export const PRODUCTS: Product[] = [
  // ==========================================
  // NEW COLLECTION - THE ROYAL COLLECTION ($375)
  // ==========================================
  {
    id: "black-phoenix",
    name: "Black Phoenix",
    subtitle: "Charred Oud, Cinnamon Bark & Dark Leather",
    collection: "royal",
    collectionName: "The Royal Collection",
    price: 375,
    image: "/products/black_phoenix.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Black Spices, Charred Oud, Ceylon Cinnamon, Smoked Tobacco, Amber Resin",
    description:
      "A commanding extrait de parfum housed in our signature gold flask. Black Phoenix rises with fiery spice, charred woods, and sensual leather.",
    categories: ["men", "unisex", "new-arrivals", "new-collection", "royal"],
    tag: "New Collection",
    isRoyal: true,
  },
  {
    id: "cobalt-royale",
    name: "Cobalt Royale",
    subtitle: "Noble Bourbon Vetiver & Smoked Bergamot",
    collection: "royal",
    collectionName: "The Royal Collection",
    price: 375,
    image: "/products/cobalt_royale.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "French Bergamot, Elemi Resin, Vetiver Bourbon, Blue Cedar, Ambergris",
    description:
      "Sculpted in rich royal blue and gleaming gold, Cobalt Royale delivers a magnetic sillage of crisp citrus and smoked vetiver woods.",
    categories: ["men", "unisex", "new-arrivals", "new-collection", "royal"],
    tag: "New Collection",
    isRoyal: true,
  },
  {
    id: "desert-rose",
    name: "Desert Rose",
    subtitle: "Royal Taif Rose, Crimson Saffron & Amber",
    collection: "royal",
    collectionName: "The Royal Collection",
    price: 375,
    image: "/products/desert_rose.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Taif Rose Petals, Crimson Saffron, Amber Resin, Velvet Sandalwood, White Musk",
    description:
      "A radiant rose gold masterpiece. Desert Rose weaves velvety petals with intoxicating warm saffron and golden desert amber.",
    categories: ["women", "unisex", "new-arrivals", "new-collection", "royal"],
    tag: "New Collection",
    isRoyal: true,
  },
  {
    id: "imperial-gold-elixir",
    name: "Imperial Gold Elixir",
    subtitle: "Pure Liquid Amber & Warm Tonka Accord",
    collection: "royal",
    collectionName: "The Royal Collection",
    price: 375,
    image: "/products/imperial_gold_elixir.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Spiced Cinnamon, Pure Liquid Amber, Rare Benzoin, Roasted Tonka Bean",
    description:
      "Finished in pure metallic gold, Imperial Gold Elixir is an opulent banquet of spiced warmth, melted resins, and sweet balsamic undertones.",
    categories: ["unisex", "women", "new-arrivals", "new-collection", "royal"],
    tag: "New Collection",
    isRoyal: true,
  },
  {
    id: "mysterious",
    name: "Mysterious",
    subtitle: "Enigmatic Frankincense & Dark Black Plum",
    collection: "royal",
    collectionName: "The Royal Collection",
    price: 375,
    image: "/products/mysterious.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Dark Black Plum, Omani Frankincense, Ambergris, Smoked Birch, Labdanum",
    description:
      "Housed in opulent emerald green and gold, Mysterious is an alluring nocturnal elixir that casts an unforgettable trail of incense and dark fruit.",
    categories: ["unisex", "men", "new-arrivals", "new-collection", "royal"],
    tag: "New Collection",
    isRoyal: true,
  },

  // ==========================================
  // CLASSIC ALPHA COLLECTION ($250)
  // ==========================================
  {
    id: "alpha-chrome",
    name: "Alpha Chrome Redefined",
    subtitle: "Woody Aromatic & Crisp Bergamot",
    collection: "alpha",
    collectionName: "Alpha Signature Collection",
    price: 250,
    image: "/products/chrome03.webp",
    secondaryImage: "/products/chrome02.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Cardamom, Silver Birch, Cedarwood, Haitian Vetiver, Crisp Citrus",
    description:
      "Pure architectural sophistication. Alpha Chrome Redefined shines with bright crystalline woods and metallic bergamot clarity.",
    categories: ["men", "unisex"],
    tag: "Signature",
    isRoyal: false,
  },
  {
    id: "alpha-saphir",
    name: "Alpha Saphir",
    subtitle: "Oceanic Cedar & Spiced Blue Cypress",
    collection: "alpha",
    collectionName: "Alpha Signature Collection",
    price: 250,
    image: "/products/sapphire03.webp",
    secondaryImage: "/products/sapphire01.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Sea Salt, Crushed Black Pepper, Blue Cypress, Ambergris, Florentine Iris",
    description:
      "Deep oceanic sapphire elegance. A brisk coastal breeze over sun-warmed driftwood and mineral ambergris.",
    categories: ["men", "unisex"],
    tag: "Classic",
    isRoyal: false,
  },
  {
    id: "alpha-jade",
    name: "Alpha Jade",
    subtitle: "White Tea Blossom, Jasmine & Cashmere",
    collection: "alpha",
    collectionName: "Alpha Signature Collection",
    price: 250,
    image: "/products/jade03.webp",
    secondaryImage: "/products/jade01-1.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Green Tea Blossom, Sambac Jasmine, Cashmeran Woods, Silken White Musk",
    description:
      "Serene imperial green jade. Delicate steamed tea leaves laced with blooming night jasmine and plush cashmere woods.",
    categories: ["women", "unisex"],
    tag: "Artisanal",
    isRoyal: false,
  },
  {
    id: "alpha-oros-grande",
    name: "Alpha Oros Grande",
    subtitle: "Precious Saffron, Golden Amber & White Oud",
    collection: "alpha",
    collectionName: "Alpha Signature Collection",
    price: 250,
    image: "/products/oros03.webp",
    secondaryImage: "/products/oros01.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Crimson Saffron, Golden Amber, Smoked Cedar, Rare White Oud",
    description:
      "Gilded luxury in every facet. Oros Grande envelops the wearer in warm liquid sunshine, saffron threads, and precious woods.",
    categories: ["unisex", "men"],
    tag: "Bestseller",
    isRoyal: false,
  },

  // ==========================================
  // LA PERFUMÉ CLASSIC COLLECTION ($250)
  // ==========================================
  {
    id: "fearless-extrait",
    name: "La Perfumé Fearless",
    subtitle: "Smoky Tuscan Leather & Dark Amber Woods",
    collection: "laperfume",
    collectionName: "La Perfumé Collection",
    price: 250,
    image: "/products/fearless03.webp",
    secondaryImage: "/products/fearless01-1.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Tuscan Leather, Incense, Dark Amber, Oud Wood, Warm Bergamot",
    description:
      "Daring, passionate, and magnetic. Fearless commands attention with charred leather, smoldering incense, and opulent resinous base notes.",
    categories: ["men", "unisex", "women"],
    tag: "Bestseller",
    isRoyal: false,
  },
  {
    id: "wild-caramel",
    name: "La Perfumé Wild Caramel",
    subtitle: "Velvet Vanilla, Dulce de Leche & Praline",
    collection: "laperfume",
    collectionName: "La Perfumé Collection",
    price: 250,
    image: "/products/wild03.webp",
    secondaryImage: "/products/wild02.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Dulce de Leche, Madagascar Bourbon Vanilla, Caramelized Praline, Sandalwood",
    description:
      "An irresistible, mouth-watering gourmand. Rich burnt sugar and buttery toffee melded with comforting warm sandalwood.",
    categories: ["women", "unisex"],
    tag: "Gourmand",
    isRoyal: false,
  },
  {
    id: "intensa-velour",
    name: "La Perfumé Intensa",
    subtitle: "Damask Rose, Wild Blackberry & Golden Honey",
    collection: "laperfume",
    collectionName: "La Perfumé Collection",
    price: 250,
    image: "/products/intensa03.webp",
    secondaryImage: "/products/intensa02-e1715461426862.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "Turkish Rose, Wild Blackberry, Patchouli, Benzoin, Honeycomb",
    description:
      "A nocturnal floral velvet. Intensa pairs luscious tart dark berries with opulent crimson roses dipped in molten honey.",
    categories: ["women", "unisex"],
    tag: "Intense",
    isRoyal: false,
  },
  {
    id: "enchante-prive",
    name: "La Perfumé Enchanté",
    subtitle: "Powdery Violet Petals & Silken Amber",
    collection: "laperfume",
    collectionName: "La Perfumé Collection",
    price: 250,
    image: "/products/enchante03.webp",
    secondaryImage: "/products/enchante02.webp",
    volume: "100ml / 3.4 fl. oz.",
    notes: "French Sweet Violet, Heliotrope, White Cedarwood, Silken Amber Petals",
    description:
      "Pure romantic reverie. A dreamy veil of powdery lilac-violet florets grounded in delicate cedarwood and cashmere amber.",
    categories: ["women"],
    tag: "Artisanal",
    isRoyal: false,
  },

  // ==========================================
  // DISCOVERY GIFT SETS ($250)
  // ==========================================
  {
    id: "set-fearless-wild",
    name: "Fearless & Wild Caramel Gift Set",
    subtitle: "Luxury Duo Set in Collector Presentation Box",
    collection: "sets",
    collectionName: "Discovery Duo Sets",
    price: 250,
    image: "/products/set_fearless.webp",
    volume: "2x 100ml Full Set",
    notes: "Smoky Tuscan Leather & Gourmand Dulce de Leche",
    description:
      "The ultimate contrasting duo. Features full-size La Perfumé Fearless and Wild Caramel beautifully presented in a foil-stamped gift box.",
    categories: ["new-arrivals", "sets", "unisex"],
    tag: "Gift Set",
    isRoyal: false,
  },
  {
    id: "set-intensa-enchante",
    name: "Intensa & Enchanté Gift Set",
    subtitle: "Feminine Haute Parfumerie Presentation Set",
    collection: "sets",
    collectionName: "Discovery Duo Sets",
    price: 250,
    image: "/products/set_intense.webp",
    volume: "2x 100ml Full Set",
    notes: "Damask Rose Honey & Powdery Violet Amber",
    description:
      "A breathtaking celebration of florals. Includes full-size bottles of Intensa and Enchanté in a floral-embossed presentation casket.",
    categories: ["new-arrivals", "sets", "women"],
    tag: "Gift Set",
    isRoyal: false,
  },
  {
    id: "set-jade-chrome",
    name: "Alpha Jade & Chrome Gift Set",
    subtitle: "Architectural Precision Double Extrait Set",
    collection: "sets",
    collectionName: "Discovery Duo Sets",
    price: 250,
    image: "/products/set_jade.webp",
    volume: "2x 100ml Full Set",
    notes: "Green Tea Jasmine & Crisp Citrus Cardamom Cedar",
    description:
      "The definitive Alpha statement. Includes full-size Alpha Jade and Alpha Chrome Redefined in a dual metallic presentation case.",
    categories: ["new-arrivals", "sets", "men", "unisex"],
    tag: "Gift Set",
    isRoyal: false,
  },
  {
    id: "set-oros-saphir",
    name: "Alpha Oros Grande & Saphir Gift Set",
    subtitle: "Gold & Oceanic Blue Collector Edition",
    collection: "sets",
    collectionName: "Discovery Duo Sets",
    price: 250,
    image: "/products/set_orosgrande.webp",
    volume: "2x 100ml Full Set",
    notes: "Precious Saffron Oud & Blue Cypress Oceanic Cedar",
    description:
      "The pinnacle of the Alpha series. Features full-size bottles of Oros Grande and Saphir in an executive split-color luxury box.",
    categories: ["new-arrivals", "sets", "unisex", "men"],
    tag: "Gift Set",
    isRoyal: false,
  },
];

export const ROYAL_COLLECTION = PRODUCTS.filter((p) => p.isRoyal);
export const CLASSIC_COLLECTION = PRODUCTS.filter((p) => !p.isRoyal);

export const CATEGORY_DETAILS: Record<
  string,
  {
    title: string;
    subtitle: string;
    badge: string;
    featuredImage: string;
    products: Product[];
  }
> = {
  men: {
    title: "Men's Niche Fragrances",
    subtitle:
      "Distinguished extraits featuring the new royal masterpieces and classic woods & leathers.",
    badge: "Pour Homme & Unisex",
    featuredImage: "/products/cobalt_royale.webp",
    products: PRODUCTS.filter((p) => p.categories.includes("men")),
  },
  women: {
    title: "Women's Niche Fragrances",
    subtitle:
      "Opulent floral elixirs, warm gourmands, and the new royal creations alongside signature classics.",
    badge: "Pour Femme & Unisex",
    featuredImage: "/products/desert_rose.webp",
    products: PRODUCTS.filter((p) => p.categories.includes("women")),
  },
  unisex: {
    title: "Unisex Haute Parfumerie",
    subtitle:
      "Boundary-defying artisanal compositions tailored for individual identity. Explore the new royal series and classic extraits.",
    badge: "Universal Elegance",
    featuredImage: "/products/imperial_gold_elixir.webp",
    products: PRODUCTS.filter((p) => p.categories.includes("unisex")),
  },
  "new-arrivals": {
    title: "New Arrivals & The Royal Collection",
    subtitle:
      "Discover our latest releases: the new Royal Collection bottles and exclusive discovery gift sets.",
    badge: "The New Collection",
    featuredImage: "/products/black_phoenix.webp",
    products: PRODUCTS.filter((p) => p.categories.includes("new-arrivals")),
  },
  "new-collection": {
    title: "The Royal Collection",
    subtitle:
      "Artisan-crafted bottles encased in gold and luxury leather cases. Each fragrance is an intensive extrait de parfum.",
    badge: "The Royal Collection",
    featuredImage: "/products/black_phoenix.webp",
    products: ROYAL_COLLECTION,
  },
  royal: {
    title: "The Royal Collection",
    subtitle:
      "Our prestigious flagship collection. Five distinctive scents sculpted in custom royal bottles.",
    badge: "The Royal Collection",
    featuredImage: "/products/black_phoenix.webp",
    products: ROYAL_COLLECTION,
  },
};

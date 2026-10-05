/* ============================================================
   AURELIA HOME — Product Catalogue
   Central product data used by index, shop, product, and cart pages.
   Replace image URLs, prices, and copy with real product data when
   handing this site off to the client.
   ============================================================ */

const CATEGORY_LABELS = {
  "living-room": "Living Room",
  "bedroom": "Bedroom",
  "lighting": "Lighting",
  "wall-decor": "Wall Decor",
  "table-decor": "Table Decor",
  "accessories": "Home Accessories"
};

const PRODUCTS = [
  {
    id: "siena-ceramic-vase",
    name: "Siena Ceramic Vase",
    category: "table-decor",
    price: 4500,
    oldPrice: null,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Hand-glazed stoneware ceramic",
    dimensions: "H 28cm x W 14cm",
    color: "Warm ivory",
    weight: "1.1 kg",
    care: "Wipe clean with a soft, dry cloth. Keep away from direct, prolonged sunlight.",
    description: "A rounded, hand-finished vase thrown in warm ivory stoneware. The soft, imperfect glaze catches the light differently through the day, making it equally striking empty or filled with a single stem.",
    features: [
      "Hand-thrown by regional ceramic artisans",
      "Wide mouth suits both dried and fresh stems",
      "Weighted base resists tipping",
      "Works as a single statement piece or in a trio"
    ]
  },
  {
    id: "luna-table-lamp",
    name: "Luna Table Lamp",
    category: "lighting",
    price: 8900,
    oldPrice: null,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Brushed brass base, linen shade",
    dimensions: "H 46cm x Base ø18cm",
    color: "Brass & natural linen",
    weight: "2.3 kg",
    care: "Dust shade with a soft brush. Avoid damp cloths on the linen shade.",
    description: "Luna pairs a brushed brass base with a hand-stitched linen shade, casting a soft, amber-toned glow that suits reading corners, console tables and bedside styling alike.",
    features: [
      "Warm, diffused light through natural linen",
      "Weighted brass base for stability",
      "In-line dimmer-compatible fitting",
      "1.8m fabric-braided cord"
    ]
  },
  {
    id: "aria-decorative-mirror",
    name: "Aria Decorative Mirror",
    category: "wall-decor",
    price: 18500,
    oldPrice: 22000,
    badge: "Sale",
    images: [
      "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Solid ash frame, bevelled glass",
    dimensions: "H 90cm x W 60cm",
    color: "Natural ash",
    weight: "6.4 kg",
    care: "Clean glass with a soft, lint-free cloth. Dust frame regularly.",
    description: "An arched silhouette in solid ash with a bevelled mirror pane. Aria brightens entryways and living spaces while quietly anchoring the room with warm, natural wood tones.",
    features: [
      "Bevelled edge glass for a soft light reflection",
      "Solid ash frame, not veneer",
      "Concealed wall-mount hardware included",
      "Pairs well with brass and black fixtures"
    ]
  },
  {
    id: "verona-candle-holder-set",
    name: "Verona Candle Holder Set",
    category: "table-decor",
    price: 5200,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1526198330131-9b0bc79625e4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1481401908818-600b7a676c0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1631125916276-69bcd14e3980?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Cast aluminium, brass finish",
    dimensions: "Set of 3, H 12–22cm",
    color: "Antique brass",
    weight: "0.9 kg (set)",
    care: "Polish occasionally with a dry brass cloth to maintain shine.",
    description: "A trio of taper candle holders in graduated heights, cast in aluminium with a warm antique-brass finish. Grouped or spread along a table runner, they add instant evening ambience.",
    features: [
      "Set of three graduated heights",
      "Fits standard taper candles",
      "Stable weighted base",
      "Tarnish-resistant brass finish"
    ]
  },
  {
    id: "oslo-accent-chair",
    name: "Oslo Accent Chair",
    category: "living-room",
    price: 32000,
    oldPrice: 36000,
    badge: "Sale",
    images: [
      "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Solid walnut frame, boucle upholstery",
    dimensions: "H 78cm x W 68cm x D 72cm",
    color: "Oatmeal boucle",
    weight: "14 kg",
    care: "Vacuum upholstery weekly. Spot clean with a mild upholstery cleaner.",
    description: "Oslo brings a sculptural walnut frame together with plush boucle upholstery. Deep enough to sink into, refined enough for a formal sitting room.",
    features: [
      "Solid walnut legs and frame",
      "High-density foam seat cushion",
      "Removable, spot-cleanable cushion cover",
      "Assembly required — hardware included"
    ]
  },
  {
    id: "milano-side-table",
    name: "Milano Side Table",
    category: "living-room",
    price: 21500,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Solid oak with marble top",
    dimensions: "H 52cm x ø45cm",
    color: "Natural oak & white marble",
    weight: "9.8 kg",
    care: "Wipe marble with a damp cloth; avoid acidic liquids and abrasive cleaners.",
    description: "A honest, well-proportioned side table in solid oak, topped with a honed marble disc. Milano sits comfortably beside a sofa or armchair as a resting place for a lamp or evening tea.",
    features: [
      "Genuine honed marble top",
      "Solid oak tripod legs",
      "Protective felt pads included",
      "Minimal assembly — legs screw into base"
    ]
  },
  {
    id: "terra-decorative-bowl",
    name: "Terra Decorative Bowl",
    category: "table-decor",
    price: 4800,
    oldPrice: null,
    badge: "Bestseller",
    images: [
      "https://images.unsplash.com/photo-1660721671073-e139688fa3cf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1631125915973-e0d155a14e4e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1633000116322-d7f5cb7d3ebb?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Terracotta stoneware",
    dimensions: "ø32cm x H 10cm",
    color: "Sand terracotta",
    weight: "1.6 kg",
    care: "Hand wash only. Dry thoroughly before storing.",
    description: "A generously sized centrepiece bowl in matte terracotta stoneware, equally at home holding fruit on a dining table or standing alone on a console as sculptural decor.",
    features: [
      "Food-safe glazed interior",
      "Wide, stable footprint",
      "Matte exterior, glossy interior finish",
      "Statement centrepiece for dining or console tables"
    ]
  },
  {
    id: "nova-pendant-light",
    name: "Nova Pendant Light",
    category: "lighting",
    price: 15900,
    oldPrice: 18900,
    badge: "Sale",
    images: [
      "https://images.unsplash.com/photo-1621177555630-b861919c864f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573676386604-78f8ed228e2b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551380701-5dd33d5b5d06?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Spun metal shade, matte black finish",
    dimensions: "ø26cm, adjustable drop up to 120cm",
    color: "Matte black & brass interior",
    weight: "1.4 kg",
    care: "Dust exterior with a dry cloth. Switch off and cool before cleaning.",
    description: "Nova's spun-metal dome throws a warm, brass-lined glow downward — ideal above a dining table, kitchen island, or reading nook. Drop length is fully adjustable at install.",
    features: [
      "Brass-lined interior for warm light diffusion",
      "Adjustable cord drop, up to 120cm",
      "Suits E27 warm-white bulbs (included)",
      "Professional installation recommended"
    ]
  },
  {
    id: "amara-table-runner",
    name: "Amara Table Runner",
    category: "table-decor",
    price: 3200,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "100% washed linen",
    dimensions: "33cm x 180cm",
    color: "Natural taupe",
    weight: "0.3 kg",
    care: "Machine wash cold, gentle cycle. Iron on low heat if needed.",
    description: "A relaxed, stonewashed linen runner that softens any table setting. Frayed-edge detailing adds texture without feeling undone.",
    features: [
      "Pre-washed for a soft, lived-in drape",
      "Frayed edge detailing",
      "Reversible — no visible right side",
      "Pairs with the Verona candle holder set"
    ]
  },
  {
    id: "casa-round-wall-mirror",
    name: "Casa Round Wall Mirror",
    category: "wall-decor",
    price: 12800,
    oldPrice: null,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1775241186452-c3d99b09f223?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Slim metal frame, float glass",
    dimensions: "ø60cm",
    color: "Brushed brass",
    weight: "3.1 kg",
    care: "Clean glass with a soft, lint-free cloth.",
    description: "A slim brushed-brass ring frames a clean circular mirror — an easy way to add light and a soft metallic accent to a hallway, bedroom, or gallery wall.",
    features: [
      "Slim 1.5cm brass-finish frame",
      "Pre-fitted hanging hardware",
      "Lightweight — hangs on a single picture hook",
      "Works well layered with framed art"
    ]
  },
  {
    id: "ivory-scented-candle-trio",
    name: "Ivory Scented Candle Trio",
    category: "accessories",
    price: 2800,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1631125915973-e0d155a14e4e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526198330131-9b0bc79625e4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1631125916276-69bcd14e3980?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Soy wax blend, ceramic vessel",
    dimensions: "Set of 3, H 8cm each",
    color: "Ivory ceramic",
    weight: "0.6 kg (set)",
    care: "Trim wick to 5mm before each burn. Keep away from drafts.",
    description: "Three soy-wax candles in reusable ceramic vessels — sandalwood, amber, and fresh linen. A quiet, understated way to layer scent through the home.",
    features: [
      "Clean-burning soy wax blend",
      "Approx. 25 hours burn time each",
      "Reusable ceramic vessels once finished",
      "Unscented gift box included"
    ]
  },
  {
    id: "bloom-ceramic-planter",
    name: "Bloom Ceramic Planter",
    category: "accessories",
    price: 3600,
    oldPrice: null,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Glazed stoneware ceramic",
    dimensions: "ø20cm x H 18cm",
    color: "Sage green",
    weight: "1.3 kg",
    care: "Wipe exterior with a damp cloth. Drainage hole included — use a saucer indoors.",
    description: "A softly glazed planter in muted sage, sized for a mid-size fiddle-leaf fig or a cluster of smaller potted plants. Drainage hole included for healthy root growth.",
    features: [
      "Built-in drainage hole",
      "Fits pots up to 18cm diameter",
      "Frost-resistant glaze",
      "Matching saucer available separately"
    ]
  },
  {
    id: "textured-cushion-set",
    name: "Textured Cushion Set",
    category: "living-room",
    price: 5400,
    oldPrice: 6800,
    badge: "Sale",
    images: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Bouclé & ribbed cotton covers, feather-blend inserts",
    dimensions: "Set of 2, 45cm x 45cm",
    color: "Oatmeal & taupe",
    weight: "1.2 kg (set)",
    care: "Remove cover before washing. Machine wash cold, low tumble dry.",
    description: "A set of two textured cushions in complementary oatmeal and taupe covers, filled with a plush feather-blend insert for a sofa that invites you to sit down.",
    features: [
      "Feather-blend inner for a full, soft shape",
      "Hidden zip closure",
      "Mix-and-match texture pairing",
      "Machine-washable covers"
    ]
  },
  {
    id: "marrakech-area-rug",
    name: "Marrakech Area Rug",
    category: "living-room",
    price: 24000,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Hand-knotted wool blend",
    dimensions: "200cm x 300cm",
    color: "Ivory with taupe motif",
    weight: "8.5 kg",
    care: "Vacuum on low suction. Professional cleaning recommended for spills.",
    description: "A hand-knotted wool-blend rug with a subtly traced geometric motif inspired by traditional weaving patterns, reworked in a muted, contemporary palette.",
    features: [
      "Hand-knotted by skilled weavers",
      "Dense pile resists flattening",
      "Non-slip backing recommended for hard floors",
      "Also available in 160cm x 230cm"
    ]
  },
  {
    id: "haven-bedside-lamp",
    name: "Haven Bedside Lamp",
    category: "bedroom",
    price: 7200,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1771287490579-afd6e8d3c09a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Ceramic base, cotton shade",
    dimensions: "H 38cm x Base ø14cm",
    color: "Matte black & natural cotton",
    weight: "1.5 kg",
    care: "Dust shade regularly. Wipe base with a dry cloth.",
    description: "A compact, softly glowing lamp sized for a nightstand. The matte ceramic base and cotton shade keep bedtime lighting warm rather than clinical.",
    features: [
      "Compact footprint for nightstands",
      "In-line on/off switch on cord",
      "Suits E14 warm-white bulbs (included)",
      "1.5m fabric-braided cord"
    ]
  },
  {
    id: "linen-bedding-set",
    name: "Linen Bedding Set",
    category: "bedroom",
    price: 12500,
    oldPrice: null,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1610307522657-8c0304960189?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1699942681763-d1da9f692489?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "100% stonewashed linen",
    dimensions: "Queen: 1 duvet cover, 2 pillowcases",
    color: "Warm oatmeal",
    weight: "1.8 kg",
    care: "Machine wash cold. Tumble dry low. Linen softens with every wash.",
    description: "Stonewashed linen bedding in a warm oatmeal tone, breathable through every season and softer with every wash. Understated enough to layer with any headboard style.",
    features: [
      "Breathable, temperature-regulating linen",
      "Pre-washed for immediate softness",
      "Button-closure duvet cover",
      "Also available in King size"
    ]
  },
  {
    id: "cascade-floor-lamp",
    name: "Cascade Floor Lamp",
    category: "lighting",
    price: 19500,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1621177555630-b861919c864f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585597647877-6eaa01bf9a05?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Powder-coated steel, linen shade",
    dimensions: "H 150cm x Base ø32cm",
    color: "Charcoal & natural linen",
    weight: "4.6 kg",
    care: "Dust shade with a soft brush. Wipe steel base with a dry cloth.",
    description: "A tall, slender floor lamp that reads more sculpture than fixture. The linen drum shade softens the light for evening reading corners and quiet living-room styling.",
    features: [
      "Adjustable-angle lamp head",
      "Weighted round base for stability",
      "Foot-pedal on/off switch",
      "Suits E27 warm-white bulbs (included)"
    ]
  },
  {
    id: "willow-rattan-basket",
    name: "Willow Rattan Basket",
    category: "accessories",
    price: 3900,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Hand-woven natural rattan",
    dimensions: "ø38cm x H 30cm",
    color: "Natural rattan",
    weight: "1.0 kg",
    care: "Dust with a dry brush. Keep away from prolonged direct sunlight.",
    description: "A hand-woven rattan basket that works equally well storing throws, plants, or magazines. The natural, textural weave softens any corner it sits in.",
    features: [
      "Hand-woven by regional artisans",
      "Sturdy woven base",
      "Built-in side handles",
      "Available in two sizes"
    ]
  },
  {
    id: "onyx-framed-wall-art-set",
    name: "Onyx Framed Wall Art Set",
    category: "wall-decor",
    price: 8400,
    oldPrice: null,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1771287490579-afd6e8d3c09a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1705526966290-2de7b8a33f03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1775241186452-c3d99b09f223?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Oak frame, matte fine-art print",
    dimensions: "Set of 3, 30cm x 40cm each",
    color: "Natural oak frame",
    weight: "2.4 kg (set)",
    care: "Dust frames with a dry cloth. Keep out of direct sunlight to preserve print tone.",
    description: "A set of three abstract, earth-toned prints in slim oak frames, designed to be hung together as a considered gallery moment above a console or sofa.",
    features: [
      "Set of three coordinated prints",
      "Solid oak frames, ready to hang",
      "Fade-resistant archival ink",
      "Hanging template included"
    ]
  },
  {
    id: "como-console-table",
    name: "Como Console Table",
    category: "living-room",
    price: 28500,
    oldPrice: null,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Solid mango wood, iron legs",
    dimensions: "H 80cm x W 120cm x D 35cm",
    color: "Natural wood & matte black",
    weight: "18 kg",
    care: "Wipe with a dry or slightly damp cloth. Avoid direct sunlight on the wood top.",
    description: "A long, low console in solid mango wood on slim iron legs — built for an entryway or the wall behind a sofa, with enough surface for lamps, trays, and framed prints.",
    features: [
      "Solid mango wood top, not veneer",
      "Powder-coated iron legs",
      "Levelling feet for uneven floors",
      "Flat-pack with simple assembly"
    ]
  }
];

const BESTSELLER_IDS = [
  "siena-ceramic-vase", "luna-table-lamp", "oslo-accent-chair", "aria-decorative-mirror",
  "terra-decorative-bowl", "nova-pendant-light", "marrakech-area-rug", "milano-side-table"
];

const NEW_ARRIVAL_IDS = [
  "haven-bedside-lamp", "linen-bedding-set", "onyx-framed-wall-art-set",
  "casa-round-wall-mirror", "bloom-ceramic-planter", "willow-rattan-basket"
];

function findProduct(id) {
  return PRODUCTS.find(function (p) { return p.id === id; });
}

function formatPKR(amount) {
  return "PKR " + Number(amount).toLocaleString("en-PK");
}

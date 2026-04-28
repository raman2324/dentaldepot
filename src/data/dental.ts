export const store = {
  name: "Dental Depot",
  phone: "(800) 210-5897",
  email: "info@dentaldepot.com",
  address: "35 Woodberry Lane, North Andover, MA 01845",
  city: "North Andover, MA",
  founded: "1999",
  freeShipping: 75,
  reviewCount: "8,400+",
};

export const categoryNav = [
  { label: "Shop by Category", to: "/categories" },
  { label: "Brands", to: "/brands" },
  { label: "New Arrivals", to: "/new-arrivals" },
  { label: "Deals & Dental Dollar Store", to: "/deals" },
  { label: "Dental Information", to: "/dental-information" },
  { label: "Help & FAQ", to: "/faq" },
  { label: "Return Policy", to: "/returns" },
] as const;

export const categories = [
  { slug: "toothbrushes", name: "Toothbrushes", count: 42, tone: "brush" },
  { slug: "electric-toothbrushes", name: "Electric Toothbrushes", count: 28, tone: "electric" },
  { slug: "floss-tapes", name: "Floss & Tapes", count: 56, tone: "floss" },
  { slug: "mouthwash", name: "Mouthwash", count: 31, tone: "rinse" },
  { slug: "mouth-guards", name: "Mouth Guards", count: 24, tone: "guard" },
  { slug: "oral-irrigators", name: "Oral Irrigators", count: 18, tone: "irrigator" },
  { slug: "denture-care-repair", name: "Denture Care & Repair", count: 22, tone: "denture" },
  { slug: "braces-orthodontic", name: "Braces & Orthodontic", count: 20, tone: "ortho" },
  { slug: "kids-dental", name: "Kids' Dental", count: 35, tone: "kids" },
  { slug: "dry-mouth", name: "Dry Mouth (Xerostomia)", count: 26, tone: "dry" },
  { slug: "halitosis", name: "Halitosis (Bad Breath)", count: 19, tone: "breath" },
  { slug: "lip-tongue-care", name: "Lip & Tongue Care", count: 14, tone: "tongue" },
  { slug: "gum-stimulators", name: "Gum Stimulators", count: 11, tone: "gum" },
  { slug: "medications", name: "Medications", count: 16, tone: "med" },
  { slug: "xylitol-gum-candy", name: "Xylitol Gum & Candy", count: 29, tone: "xylitol" },
  { slug: "dental-emergencies", name: "Dental Emergencies", count: 13, tone: "repair" },
  { slug: "dental-dollar-store", name: "Dental Dollar Store", count: 47, tone: "dollar" },
  { slug: "new-arrivals", name: "New Arrivals", count: 21, tone: "new" },
] as const;

export const brands = ["Oral-B", "Waterpik", "Sonicare", "OxyFresh", "DenTek", "POH", "Sleep Right", "Dr. Brux", "Aqualizer", "GUM", "Tom's of Maine", "Listerine", "Proxysoft", "Hydro Floss", "FlossAID", "Biotene"];

export const products = [
  { slug: "flossaid-floss-holder", brand: "FLOSSAID", name: "FLOSSAID Dental Floss Holder", category: "floss-tapes", price: 3.39, msrp: 4.49, rating: 4.8, reviews: 214, stock: "In stock — ships in 1 business day", badge: "Dentist recommended", consumable: true, sale: true, art: "floss", description: "A simple reusable floss holder for easier reach around back teeth, bridges, and tight contacts." },
  { slug: "acryline-denture-repair", brand: "ACRYLINE", name: "Acryline Temporary Denture Repair Kit", category: "denture-care-repair", price: 9.8, msrp: 12.5, rating: 4.6, reviews: 143, stock: "In stock — ships in 1 business day", badge: "Repair kit", consumable: false, sale: true, art: "box", description: "A temporary denture repair option for travel kits and backup household supplies." },
  { slug: "dentek-night-guard-comfort-fit", brand: "DENTEK", name: "DenTek Night Guard Comfort Fit", category: "mouth-guards", price: 32.78, msrp: 39.99, rating: 4.7, reviews: 592, stock: "In stock — ships in 1 business day", badge: "Night guard", consumable: false, sale: true, art: "guard", description: "A comfortable boil-and-bite night guard for occasional grinding and clenching." },
  { slug: "proxysoft-bridge-implant-cleaner", brand: "PROXYSOFT", name: "Proxysoft Bridge & Implant Cleaner", category: "floss-tapes", price: 7.05, msrp: 8.95, rating: 4.9, reviews: 368, stock: "In stock — ships in 1 business day", badge: "Implant care", consumable: true, sale: false, art: "floss", description: "Threader-style cleaners designed for bridges, implants, and orthodontic appliances." },
  { slug: "poh-percept-floss", brand: "POH", name: "POH Percept 630 Dental Floss", category: "floss-tapes", price: 5.99, msrp: 6.99, rating: 4.8, reviews: 442, stock: "In stock — ships in 1 business day", badge: "Reorder favorite", consumable: true, sale: false, art: "roll", description: "Classic dentist-recommended floss with dependable texture and clean handling." },
  { slug: "sleep-right-secure-comfort", brand: "SLEEP RIGHT", name: "Sleep Right Secure Comfort Dental Guard", category: "mouth-guards", price: 25.66, msrp: 29.99, rating: 4.5, reviews: 284, stock: "In stock — ships in 1 business day", badge: "Low profile", consumable: false, sale: true, art: "guard", description: "A ready-to-wear guard made for simple nighttime protection without boiling." },
  { slug: "flipper-toothbrush-holder", brand: "FLIPPER", name: "Flipper Toothbrush Holder", category: "toothbrushes", price: 4.75, msrp: 5.49, rating: 4.4, reviews: 91, stock: "In stock — ships in 1 business day", badge: "Travel", consumable: false, sale: false, art: "holder", description: "A compact holder that keeps toothbrush heads covered in the drawer or travel bag." },
  { slug: "happy-morning-kids-set", brand: "HAPPY MORNING", name: "Kids Toothbrush + Mint Paste Set", category: "kids-dental", price: 6.45, msrp: 7.99, rating: 4.6, reviews: 76, stock: "Low stock — order soon", badge: "Kids' care", consumable: true, sale: true, art: "kids", description: "A simple starter set sized for younger brushers and travel routines." },
] as const;

export const featuredProducts = products.slice(0, 6);
export const newProducts = [products[4], products[5], products[6], products[7], products[0], products[3]];
export const dollarProducts = [products[0], products[6], products[4], products[7]];

export const bundles = [
  { title: "The Reordering Patient", description: "Electric brush, replacement heads, and daily toothpaste for the routine your dentist keeps nudging you toward.", price: "$54.40", savings: "Save $8.20" },
  { title: "The Night Guard Starter", description: "DenTek guard, cleaning cup, and retainer cleaner tablets in one practical bedside kit.", price: "$39.95", savings: "Save $6.10" },
  { title: "The Dry Mouth Kit", description: "Lozenges, rinse, and dry-mouth toothpaste for daytime relief and nighttime comfort.", price: "$31.80", savings: "Save $5.45" },
];

export const articles = [
  { title: "What is an Aqualizer? Who needs one?", dek: "A plain-English guide to temporary bite relief products and when to ask your dentist first." },
  { title: "Help with good oral care", dek: "Daily routines that work when you have bridges, implants, braces, or just tight contacts." },
  { title: "How to use your Hydro Floss", dek: "Setup, tips, and replacement schedules for keeping an oral irrigator useful." },
];

export const reviews = [
  { product: "DenTek Night Guard Comfort Fit", quote: "My dentist wrote down the exact guard and Dental Depot had it for less than the big marketplace listings. It arrived in two days and it was the real product.", name: "Linda", city: "Portland, ME", art: "guard" },
  { product: "POH Percept Floss", quote: "This is the floss my hygienist keeps recommending. Easy reorder, fair price, and no guessing between lookalike listings.", name: "Mark", city: "Worcester, MA", art: "roll" },
  { product: "Proxysoft Bridge Cleaner", quote: "Hard to find locally, but it was stocked here. Customer service answered the phone and helped me pick the right pack size.", name: "Nora", city: "Providence, RI", art: "floss" },
];

export const faqs = [
  ["How fast do orders ship?", "Most in-stock orders ship within one business day. US orders over $75 ship free."],
  ["Can I return a product?", "Unopened items can be returned within 30 days. Opened oral-care items cannot be returned for safety reasons."],
  ["Are these the same products my dentist sells?", "Yes. We focus on brand-name oral-care products and authorized retail sourcing."],
  ["Do you ship outside the US?", "The current storefront is set up for US shipping only."],
  ["Can you find a discontinued item?", "Call or email us with the product name or package photo. If it exists, we will try to track it down."],
  ["Do you support dental-office accounts?", "Yes. Contact customer care for wholesale or recurring office supply needs."],
];

/**
 * ==========================================================================
 * AURELIA HOME - Core JavaScript Engine
 * Modern, Minimalist Home Décor E-Commerce Demo
 * Features:
 * - Product Catalog (Single Source of Truth)
 * - Cart Management (localStorage)
 * - Wishlist Management (localStorage)
 * - Quick View Modal
 * - Live Search Overlay
 * - Automated WhatsApp Order & Inquiry Message Generation
 * - Responsive Filters & Dynamic Sorting
 * ==========================================================================
 */

// Replace with Aurelia Home's real WhatsApp number before production.
const WHATSAPP_NUMBER = "923XXXXXXXXX";

// Configurable Delivery Fee in PKR
const DELIVERY_FEE = 250;

/**
 * Curated Demo Products Catalog
 * Replace or extend with real inventory as needed.
 */
const PRODUCTS = [
  {
    id: "ah-01",
    name: "Aurelia Ceramic Vase",
    category: "Vases & Planters",
    categorySlug: "vases-planters",
    price: 4500,
    oldPrice: null,
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ],
    description: "An organically curved stoneware vase finished with a tactile off-white limestone glaze. Designed to complement minimalist botanical arrangements or stand alone as a sculptural focal point.",
    details: [
      "Crafted from premium heavy stoneware",
      "Matte textured limestone glaze finish",
      "Water-resistant interior glazing",
      "Wipe clean with a soft, dry cloth"
    ],
    dimensions: "Height: 28 cm | Diameter: 16 cm | Weight: 1.8 kg",
    inStock: true
  },
  {
    id: "ah-02",
    name: "Minimalist Arch Mirror",
    category: "Wall Décor",
    categorySlug: "wall-decor",
    price: 12500,
    oldPrice: 14000,
    badge: "Sale",
    rating: 5.0,
    reviewsCount: 22,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A refined architectural arch mirror framed in ultra-slim brushed champagne brass. Designed to reflect natural light and create an immediate sense of spacious elegance.",
    details: [
      "High-definition silver-backed glass",
      "Slim brushed brass-toned metal perimeter",
      "Pre-installed heavy-duty wall mounting brackets",
      "Safety shatter-proof backing"
    ],
    dimensions: "Height: 90 cm | Width: 60 cm | Depth: 2.5 cm",
    inStock: true
  },
  {
    id: "ah-03",
    name: "Sandstone Decorative Tray",
    category: "Table Décor",
    categorySlug: "table-decor",
    price: 3200,
    oldPrice: null,
    badge: "Curated Favorite",
    rating: 4.8,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Hand-finished natural composite sandstone tray with rounded organic contours. Perfect for staging perfume bottles, candles, or coffee table accents.",
    details: [
      "Natural composite sandstone composite",
      "Protective velvet base pads prevent table scratching",
      "Resistant to light moisture and heat",
      "Sealed with a subtle satin protective coat"
    ],
    dimensions: "Length: 32 cm | Width: 20 cm | Height: 3 cm",
    inStock: true
  },
  {
    id: "ah-04",
    name: "Textured Bouclé Cushion",
    category: "Cushions & Throws",
    categorySlug: "cushions-throws",
    price: 2400,
    oldPrice: null,
    badge: "Popular",
    rating: 4.9,
    reviewsCount: 45,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Deep-textured tactile ivory bouclé cushion designed to bring warmth and cozy sophistication to your sofa, lounge chair, or bed.",
    details: [
      "Heavyweight textured loop bouclé weave",
      "Concealed tonal zipper for easy removal",
      "Includes plush hypoallergenic micro-cluster insert",
      "Dry clean or spot clean gently"
    ],
    dimensions: "50 cm × 50 cm",
    inStock: true
  },
  {
    id: "ah-05",
    name: "Sculptural Table Lamp",
    category: "Lighting",
    categorySlug: "lighting",
    price: 8900,
    oldPrice: 9800,
    badge: "Special Edition",
    rating: 4.9,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80"
    ],
    description: "An architectural ceramic lamp base paired with a finely textured linen shade. Emits a soothing ambient glow that enhances evening interior serenity.",
    details: [
      "Matte ceramic earthenware base",
      "Natural woven linen drum shade",
      "Compatible with standard E27 warm LED bulbs (included)",
      "Braided neutral fabric cord with in-line switch"
    ],
    dimensions: "Height: 46 cm | Shade Diameter: 28 cm",
    inStock: true
  },
  {
    id: "ah-06",
    name: "Abstract Neutral Wall Art",
    category: "Wall Décor",
    categorySlug: "wall-decor",
    price: 6500,
    oldPrice: null,
    badge: "Editorial Pick",
    rating: 4.7,
    reviewsCount: 16,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Fine textured giclée canvas featuring soft plaster brushstrokes, warm umber and cream undertones, encased in an untreated natural ash wood floating frame.",
    details: [
      "Archival quality cotton canvas",
      "Natural solid ash wood gallery frame",
      "Ready to hang with included mounting hardware",
      "Resistant to UV fading"
    ],
    dimensions: "60 cm × 80 cm",
    inStock: true
  },
  {
    id: "ah-07",
    name: "Ceramic Candle Holder",
    category: "Table Décor",
    categorySlug: "table-decor",
    price: 2100,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Dual-height sculptural ceramic candlestick holder with a raw tactile glaze. Designed for standard tapered dinner candles.",
    details: [
      "Handcrafted tactile ceramic finish",
      "Fits standard 2 cm taper candles",
      "Weighted base for stability and safety",
      "Easy wax removal"
    ],
    dimensions: "Height: 18 cm | Base Diameter: 11 cm",
    inStock: true
  },
  {
    id: "ah-08",
    name: "Woven Storage Basket",
    category: "Decorative Accessories",
    categorySlug: "accessories",
    price: 4800,
    oldPrice: null,
    badge: "Artisanal",
    rating: 4.9,
    reviewsCount: 34,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Hand-braided structural storage basket crafted from dried natural rush fiber. Ideal for holding throws, cushions, or potted statement plants.",
    details: [
      "Natural rush fiber weave",
      "Integrated sturdy carrying handles",
      "Collapsible upper rim for dual styling options",
      "Eco-friendly natural material"
    ],
    dimensions: "Diameter: 38 cm | Height: 35 cm",
    inStock: true
  },
  {
    id: "ah-09",
    name: "Fluted Terracotta Planter",
    category: "Vases & Planters",
    categorySlug: "vases-planters",
    price: 3800,
    oldPrice: null,
    badge: "New",
    rating: 4.8,
    reviewsCount: 14,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Architectural cylindrical planter featuring deep vertical fluting in a muted sunbaked earthy tone.",
    details: [
      "Natural porous clay with protective internal seal",
      "Removable silicone drainage plug included",
      "Suitable for indoor styling",
      "Includes matching drainage saucer"
    ],
    dimensions: "Diameter: 22 cm | Height: 24 cm",
    inStock: true
  },
  {
    id: "ah-10",
    name: "Belgian Washed Linen Throw",
    category: "Cushions & Throws",
    categorySlug: "cushions-throws",
    price: 5600,
    oldPrice: 6200,
    badge: "Limited Edition",
    rating: 5.0,
    reviewsCount: 28,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Lightweight, pre-washed Belgian flax linen throw blanket with eyelash fringe edging in relaxed natural oatmeal.",
    details: [
      "100% pre-washed European flax linen",
      "Naturally thermoregulating and breathable",
      "Subtle eyelash fringed ends",
      "Machine washable on gentle cycle"
    ],
    dimensions: "140 cm × 200 cm",
    inStock: true
  },
  {
    id: "ah-11",
    name: "Fluted Alabaster Wall Sconce",
    category: "Lighting",
    categorySlug: "lighting",
    price: 7400,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviewsCount: 11,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Carved translucent alabaster stone wall lamp casting gentle dual-directional warm light across interior walls.",
    details: [
      "Genuine translucent carved alabaster",
      "Brass mounting hardware",
      "Warm ambient accent lighting",
      "Hardwire or plug-in convertible"
    ],
    dimensions: "Height: 30 cm | Width: 12 cm | Depth: 9 cm",
    inStock: true
  },
  {
    id: "ah-12",
    name: "Travertine Pedestal Bowl",
    category: "Decorative Accessories",
    categorySlug: "accessories",
    price: 5900,
    oldPrice: null,
    badge: "Staff Pick",
    rating: 4.9,
    reviewsCount: 20,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Solid honed Italian beige travertine pedestal bowl featuring distinct natural stone veining and an organic matte surface.",
    details: [
      "Solid carved beige travertine stone",
      "Honed matte organic finish",
      "Each piece exhibits unique natural veining",
      "Substantial weight prevents tipping"
    ],
    dimensions: "Diameter: 25 cm | Height: 12 cm | Weight: 3.2 kg",
    inStock: true
  }
];

// Currency Formatter Helper (PKR)
function formatPKR(amount) {
  return "PKR " + Number(amount).toLocaleString("en-PK");
}

/* ==========================================================================
   CART STORE & LOGIC (localStorage)
   ========================================================================== */
function getCart() {
  try {
    const raw = localStorage.getItem("aureliaCart");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading cart from localStorage", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem("aureliaCart", JSON.stringify(cart));
    updateCartBadges();
  } catch (e) {
    console.error("Error saving cart to localStorage", e);
  }
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += Number(quantity);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      quantity: Number(quantity)
    });
  }

  saveCart(cart);
  showToast(`“${product.name}” added to your bag.`, "cart.html");
}

function updateCartQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart(cart);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem("aureliaCart");
  updateCartBadges();
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartBadges() {
  const count = getCartCount();
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });

  const cartLabels = document.querySelectorAll(".cart-label-text");
  cartLabels.forEach(el => {
    el.textContent = `Bag (${count})`;
  });
}

/* ==========================================================================
   WISHLIST STORE & LOGIC (localStorage)
   ========================================================================== */
function getWishlist() {
  try {
    const raw = localStorage.getItem("aureliaWishlist");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(wishlist) {
  try {
    localStorage.setItem("aureliaWishlist", JSON.stringify(wishlist));
    updateWishlistBadges();
  } catch (e) {
    console.error("Error saving wishlist", e);
  }
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const exists = wishlist.some(id => id === productId);
  if (exists) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast(`Removed “${product.name}” from wishlist.`);
  } else {
    wishlist.push(productId);
    showToast(`Saved “${product.name}” to wishlist.`);
  }

  saveWishlist(wishlist);
  updateWishlistUI();
}

function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.includes(productId);
}

function updateWishlistBadges() {
  const wishlist = getWishlist();
  const badges = document.querySelectorAll(".wishlist-count-badge");
  badges.forEach(badge => {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? "inline-flex" : "none";
  });
}

function updateWishlistUI() {
  const wishlist = getWishlist();
  document.querySelectorAll(".product-wishlist-btn").forEach(btn => {
    const id = btn.getAttribute("data-product-id");
    if (wishlist.includes(id)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

/* ==========================================================================
   TOAST NOTIFICATION COMPONENT
   ========================================================================== */
function showToast(message, link = null) {
  let toast = document.getElementById("aurelia-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "aurelia-toast";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  let html = `<span>${message}</span>`;
  if (link) {
    html += ` <a href="${link}" class="toast-view-btn">View Bag →</a>`;
  }
  toast.innerHTML = html;

  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* ==========================================================================
   PRODUCT CARD COMPONENT GENERATOR
   ========================================================================== */
function createProductCardHTML(product) {
  const inFav = isInWishlist(product.id);
  const oldPriceHTML = product.oldPrice 
    ? `<span class="product-old-price">${formatPKR(product.oldPrice)}</span>` 
    : "";
  const badgeHTML = product.badge 
    ? `<span class="product-badge ${product.badge === 'Sale' ? 'sale' : ''}">${product.badge}</span>` 
    : "";

  return `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.categorySlug}" data-price="${product.price}">
      <div class="product-thumb-wrap">
        ${badgeHTML}
        <button class="product-wishlist-btn ${inFav ? 'active' : ''}" 
                data-product-id="${product.id}" 
                aria-label="Save to Wishlist" 
                title="Add to Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="product-thumb" loading="lazy">
        </a>

        <div class="product-actions-bar">
          <button type="button" class="btn-quick-view" data-quickview-id="${product.id}">Quick View</button>
          <button type="button" class="btn-card-cart" data-cart-id="${product.id}">Add to Bag</button>
        </div>
      </div>

      <div class="product-meta">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-price-row">
          <span class="product-price">${formatPKR(product.price)}</span>
          ${oldPriceHTML}
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   QUICK VIEW MODAL SYSTEM
   ========================================================================== */
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let modalOverlay = document.getElementById("quickview-modal-overlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "quickview-modal-overlay";
    modalOverlay.className = "quick-view-overlay";
    document.body.appendChild(modalOverlay);
  }

  const oldPriceHTML = product.oldPrice 
    ? `<span class="product-old-price">${formatPKR(product.oldPrice)}</span>` 
    : "";

  modalOverlay.innerHTML = `
    <div class="quick-view-modal">
      <button class="modal-close-btn" id="quickview-close-btn" aria-label="Close modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="quick-view-image-wrap">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="quick-view-details">
        <span class="product-info-category">${product.category}</span>
        <h2 class="product-name" style="font-size: 1.85rem; margin-bottom: 0.5rem;">${product.name}</h2>
        <div class="product-price-row" style="margin-bottom: 1.25rem;">
          <span class="product-price" style="font-size: 1.35rem;">${formatPKR(product.price)}</span>
          ${oldPriceHTML}
        </div>
        <p class="product-info-short-desc">${product.description}</p>
        
        <div class="qty-and-cart-row" style="margin-bottom: 1rem;">
          <div class="quantity-selector">
            <button type="button" class="qty-btn" id="qv-minus">-</button>
            <input type="number" id="qv-qty-input" class="qty-input" value="1" min="1" max="10" readonly>
            <button type="button" class="qty-btn" id="qv-plus">+</button>
          </div>
          <button type="button" class="btn btn-primary" id="qv-add-cart" style="flex:1;">
            Add to Bag
          </button>
        </div>

        <a href="${getWhatsAppProductInquiryUrl(product)}" target="_blank" rel="noopener noreferrer" class="whatsapp-inquire-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Ask About This Product via WhatsApp
        </a>

        <div style="margin-top: 1.5rem; font-size: 0.82rem; color: var(--text-muted);">
          <a href="product.html?id=${product.id}" style="text-decoration: underline;">View Full Details & Specifications →</a>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Bind Quick View Actions
  const closeBtn = document.getElementById("quickview-close-btn");
  closeBtn.addEventListener("click", closeQuickView);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeQuickView();
  });

  const qtyInput = document.getElementById("qv-qty-input");
  document.getElementById("qv-minus").addEventListener("click", () => {
    let val = parseInt(qtyInput.value, 10);
    if (val > 1) qtyInput.value = val - 1;
  });
  document.getElementById("qv-plus").addEventListener("click", () => {
    let val = parseInt(qtyInput.value, 10);
    if (val < 10) qtyInput.value = val + 1;
  });

  document.getElementById("qv-add-cart").addEventListener("click", () => {
    addToCart(product.id, parseInt(qtyInput.value, 10));
    closeQuickView();
  });
}

function closeQuickView() {
  const modalOverlay = document.getElementById("quickview-modal-overlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
  }
  document.body.style.overflow = "";
}

/* ==========================================================================
   WHATSAPP MESSAGE BUILDERS
   ========================================================================== */

/**
 * Builds direct WhatsApp inquiry link for a single product
 */
function getWhatsAppProductInquiryUrl(product) {
  const msg = `Hello Aurelia Home,

I'm interested in:

Product: ${product.name}
Price: ${formatPKR(product.price)}

Is this product available?

Thank you.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/**
 * Builds automated WhatsApp order confirmation message with full line items, customer details & total
 */
function generateWhatsAppOrderMessage(customer, cart, subtotal, delivery, total) {
  let itemsText = "";
  cart.forEach((item, index) => {
    itemsText += `${index + 1}. ${item.name} × ${item.quantity} — ${formatPKR(item.price * item.quantity)}\n`;
  });

  const notesText = customer.notes ? customer.notes : "None";

  const msg = `Hello Aurelia Home,

I would like to place an order.

Customer Details:
Name: ${customer.name}
Phone: ${customer.phone}
WhatsApp: ${customer.whatsapp || customer.phone}
Email: ${customer.email || 'N/A'}
City: ${customer.city}
Area: ${customer.area}
Address: ${customer.address}

Order:
${itemsText}
Subtotal: ${formatPKR(subtotal)}
Delivery: ${formatPKR(delivery)}
Total: ${formatPKR(total)}

Order Notes:
${notesText}

Please confirm my order.

Thank you.`;

  return msg;
}

/**
 * Generates an aesthetic unique demo order ID, e.g. AH-2026-048
 */
function generateOrderNumber() {
  const year = 2026;
  const rand = Math.floor(100 + Math.random() * 900);
  return `AH-${year}-${rand}`;
}

/* ==========================================================================
   GLOBAL SEARCH OVERLAY
   ========================================================================== */
function initSearchOverlay() {
  const searchTriggers = document.querySelectorAll(".header-search-trigger");
  let overlay = document.getElementById("search-modal-overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "search-modal-overlay";
    overlay.className = "search-modal-overlay";
    overlay.innerHTML = `
      <div class="search-modal-container">
        <div class="search-input-header">
          <input type="text" id="live-search-input" class="search-modal-input" placeholder="What are you looking for?" autocomplete="off">
          <button type="button" class="search-close-btn" id="search-close-btn" aria-label="Close search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="search-live-results" id="search-live-results">
          <p style="color: var(--text-muted); font-size: 0.88rem; padding: 1rem 0;">Type at least 2 characters to search by product name, category, or description...</p>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const input = document.getElementById("live-search-input");
  const resultsContainer = document.getElementById("search-live-results");
  const closeBtn = document.getElementById("search-close-btn");

  const openSearch = () => {
    overlay.classList.add("active");
    input.value = "";
    resultsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem; padding: 1rem 0;">Search across ceramics, lighting, mirrors, cushions, and décor...</p>`;
    setTimeout(() => input.focus(), 100);
    document.body.style.overflow = "hidden";
  };

  const closeSearch = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  searchTriggers.forEach(btn => btn.addEventListener("click", openSearch));
  closeBtn.addEventListener("click", closeSearch);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSearch();
  });

  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 2) {
      resultsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem; padding: 1rem 0;">Type at least 2 characters to search...</p>`;
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p style="color: var(--text-secondary); padding: 1.5rem 0; text-align: center;">No pieces found matching “${q}”.</p>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(p => `
      <a href="product.html?id=${p.id}" class="search-result-item">
        <img src="${p.image}" alt="${p.name}" class="search-result-thumb">
        <div style="flex: 1;">
          <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted);">${p.category}</span>
          <h4 style="font-family: var(--font-serif); font-size: 1.05rem; color: var(--text-primary); margin: 2px 0;">${p.name}</h4>
          <span style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary);">${formatPKR(p.price)}</span>
        </div>
      </a>
    `).join("");
  });
}

/* ==========================================================================
   WISHLIST DRAWER
   ========================================================================== */
function initWishlistDrawer() {
  const triggers = document.querySelectorAll(".header-wishlist-trigger");
  let overlay = document.getElementById("wishlist-drawer-overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "wishlist-drawer-overlay";
    overlay.className = "wishlist-drawer-overlay";
    overlay.innerHTML = `
      <div class="wishlist-drawer">
        <div class="wishlist-drawer-header">
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem;">Saved Pieces</h3>
          <button type="button" id="wishlist-close-btn" style="color: var(--text-primary);" aria-label="Close wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="wishlist-drawer-items" id="wishlist-drawer-items"></div>
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-light);">
          <a href="shop.html" class="btn btn-secondary btn-block">Explore Full Collection</a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const renderDrawer = () => {
    const ids = getWishlist();
    const container = document.getElementById("wishlist-drawer-items");
    if (ids.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="margin-bottom: 1rem;">You have not saved any pieces yet.</p>
        <p style="font-size: 0.85rem;">Click the heart icon on any product to keep track of your favorites.</p>
      </div>`;
      return;
    }

    const items = PRODUCTS.filter(p => ids.includes(p.id));
    container.innerHTML = items.map(item => `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}" class="wishlist-item-thumb">
        <div style="flex:1;">
          <h4 style="font-family: var(--font-serif); font-size: 1rem; margin-bottom: 2px;">
            <a href="product.html?id=${item.id}">${item.name}</a>
          </h4>
          <span style="font-size: 0.88rem; font-weight: 600;">${formatPKR(item.price)}</span>
          <div style="margin-top: 6px; display: flex; gap: 0.75rem;">
            <button type="button" class="btn btn-sm btn-primary" onclick="addToCart('${item.id}', 1)">Add to Bag</button>
            <button type="button" style="font-size: 0.78rem; color: var(--text-muted); text-decoration: underline;" onclick="toggleWishlist('${item.id}'); renderWishlistDrawer();">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
  };

  window.renderWishlistDrawer = renderDrawer;

  const openDrawer = () => {
    renderDrawer();
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };
  const closeDrawer = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  triggers.forEach(t => t.addEventListener("click", openDrawer));
  document.getElementById("wishlist-close-btn").addEventListener("click", closeDrawer);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDrawer();
  });
}

/* ==========================================================================
   MOBILE MENU NAVIGATION
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const overlay = document.querySelector(".mobile-nav-overlay");
  const closeBtn = document.querySelector(".mobile-drawer-close");

  if (!toggle || !overlay) return;

  const openMenu = () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMenu();
  });
}

/* ==========================================================================
   DELEGATED EVENT HANDLERS (Cart, Wishlist, QuickView)
   ========================================================================== */
function bindGlobalEvents() {
  document.addEventListener("click", (e) => {
    // Add to cart from card
    const cartBtn = e.target.closest("[data-cart-id]");
    if (cartBtn) {
      e.preventDefault();
      const id = cartBtn.getAttribute("data-cart-id");
      addToCart(id, 1);
      return;
    }

    // Quick View
    const qvBtn = e.target.closest("[data-quickview-id]");
    if (qvBtn) {
      e.preventDefault();
      const id = qvBtn.getAttribute("data-quickview-id");
      openQuickView(id);
      return;
    }

    // Wishlist Toggle
    const favBtn = e.target.closest(".product-wishlist-btn");
    if (favBtn) {
      e.preventDefault();
      const id = favBtn.getAttribute("data-product-id");
      toggleWishlist(id);
      return;
    }
  });

  // Global ESC key listener to close modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      const searchOverlay = document.getElementById("search-modal-overlay");
      if (searchOverlay) searchOverlay.classList.remove("active");
      const wishOverlay = document.getElementById("wishlist-drawer-overlay");
      if (wishOverlay) wishOverlay.classList.remove("active");
      const mobOverlay = document.querySelector(".mobile-nav-overlay");
      if (mobOverlay) mobOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Header scroll shadow effect
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Newsletter dummy handler
  const newsForm = document.querySelector(".newsletter-form");
  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const feedback = document.querySelector(".newsletter-feedback");
      if (feedback) {
        feedback.style.display = "block";
        feedback.textContent = "Thank you for subscribing to Aurelia Home.";
      }
      newsForm.reset();
    });
  }
}

/* ==========================================================================
   PAGE: HOMEPAGE INITIALIZER
   ========================================================================== */
function initHomePage() {
  const container = document.getElementById("featured-products-grid");
  if (!container) return;

  // Render 8 curated favorites
  const favorites = PRODUCTS.slice(0, 8);
  container.innerHTML = favorites.map(createProductCardHTML).join("");
}

/* ==========================================================================
   PAGE: SHOP CATALOG INITIALIZER
   ========================================================================== */
function initShopPage() {
  const grid = document.getElementById("shop-products-grid");
  if (!grid) return;

  const searchInput = document.getElementById("shop-filter-search");
  const sortSelect = document.getElementById("shop-sort-select");
  const countDisplay = document.getElementById("shop-count-display");
  const filterPills = document.querySelectorAll(".category-filter-pills .filter-pill");

  // Read URL params for category or query if present (e.g. shop.html?category=wall-decor)
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let activeSearch = urlParams.get("q") || "";
  let activeSort = "featured";

  // Activate matching category pill from URL
  filterPills.forEach(pill => {
    if (pill.getAttribute("data-category") === activeCategory) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }

    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-category");
      renderFilteredProducts();
    });
  });

  if (searchInput) {
    if (activeSearch) searchInput.value = activeSearch;
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value.trim().toLowerCase();
      renderFilteredProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSort = e.target.value;
      renderFilteredProducts();
    });
  }

  function renderFilteredProducts() {
    let filtered = [...PRODUCTS];

    // Filter by Category
    if (activeCategory !== "all") {
      filtered = filtered.filter(p => p.categorySlug === activeCategory);
    }

    // Filter by Search Query
    if (activeSearch) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(activeSearch) ||
        p.category.toLowerCase().includes(activeSearch) ||
        p.description.toLowerCase().includes(activeSearch)
      );
    }

    // Sort
    switch (activeSort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // Simulated: reverse ID order
        filtered.reverse();
        break;
      case "best-selling":
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      default: // featured
        break;
    }

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} curated pieces`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin-bottom: 0.75rem;">No matching pieces found</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try choosing another category or clearing your search term.</p>
          <button class="btn btn-secondary" onclick="window.location.href='shop.html'">Reset Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(createProductCardHTML).join("");
    updateWishlistUI();
  }

  renderFilteredProducts();
}

/* ==========================================================================
   PAGE: PRODUCT DETAILS INITIALIZER
   ========================================================================== */
function initProductPage() {
  const container = document.getElementById("product-detail-container");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "ah-01";
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  // Update Page Title
  document.title = `${product.name} | Aurelia Home`;

  // Breadcrumbs
  const breadcrumbCategory = document.getElementById("breadcrumb-category");
  const breadcrumbProduct = document.getElementById("breadcrumb-product");
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = `shop.html?category=${product.categorySlug}`;
  }
  if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;

  // Gallery
  const thumbsContainer = document.getElementById("product-gallery-thumbs");
  const mainImage = document.getElementById("product-gallery-main-img");

  if (thumbsContainer && mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;

    const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    thumbsContainer.innerHTML = galleryImages.map((src, idx) => `
      <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-full-src="${src}">
        <img src="${src}" alt="${product.name} angle ${idx + 1}">
      </div>
    `).join("");

    const thumbs = thumbsContainer.querySelectorAll(".thumb-item");
    thumbs.forEach(t => {
      t.addEventListener("click", () => {
        thumbs.forEach(th => th.classList.remove("active"));
        t.classList.add("active");
        mainImage.src = t.getAttribute("data-full-src");
      });
    });
  }

  // Details
  const elCategory = document.getElementById("p-category");
  const elName = document.getElementById("p-name");
  const elPrice = document.getElementById("p-price");
  const elOldPrice = document.getElementById("p-old-price");
  const elRating = document.getElementById("p-rating");
  const elShortDesc = document.getElementById("p-short-desc");
  const elFullDesc = document.getElementById("tab-pane-description");
  const elSpecs = document.getElementById("tab-pane-specs");
  const elCare = document.getElementById("tab-pane-care");
  const elWhatsAppInquiry = document.getElementById("p-whatsapp-inquiry");

  if (elCategory) elCategory.textContent = product.category;
  if (elName) elName.textContent = product.name;
  if (elPrice) elPrice.textContent = formatPKR(product.price);
  if (elOldPrice) {
    if (product.oldPrice) {
      elOldPrice.textContent = formatPKR(product.oldPrice);
      elOldPrice.style.display = "inline";
    } else {
      elOldPrice.style.display = "none";
    }
  }
  if (elRating) {
    elRating.textContent = `${product.rating} (${product.reviewsCount} reviews)`;
  }
  if (elShortDesc) elShortDesc.textContent = product.description;

  if (elFullDesc) {
    elFullDesc.innerHTML = `
      <p style="margin-bottom: 1.25rem;">${product.description}</p>
      <p>Every piece in the Aurelia Home collection is chosen with meticulous attention to natural textures, sculptural poise, and timeless durability. Whether displayed as an eye-catching standalone object or grouped within a curated vignette, it imparts serene warmth and understated luxury.</p>
    `;
  }

  if (elSpecs) {
    const detailsList = product.details.map(d => `<li>${d}</li>`).join("");
    elSpecs.innerHTML = `
      <ul style="padding-left: 1.25rem; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
        ${detailsList}
      </ul>
      <p><strong>Dimensions & Weight:</strong> ${product.dimensions}</p>
    `;
  }

  if (elCare) {
    elCare.innerHTML = `
      <p style="margin-bottom: 1rem;">To maintain the original beauty and organic finish of your Aurelia Home piece:</p>
      <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
        <li>Dust regularly with a dry, soft microfiber cloth.</li>
        <li>Avoid harsh chemical cleaners, bleach, or abrasive scouring pads.</li>
        <li>Protect surfaces from direct exposure to extreme heat and prolonged direct sunlight.</li>
      </ul>
    `;
  }

  if (elWhatsAppInquiry) {
    elWhatsAppInquiry.href = getWhatsAppProductInquiryUrl(product);
  }

  // Quantity and Add to Cart
  const qtyInput = document.getElementById("p-qty");
  const btnMinus = document.getElementById("p-qty-minus");
  const btnPlus = document.getElementById("p-qty-plus");
  const btnAdd = document.getElementById("p-add-cart-btn");
  const btnBuyNow = document.getElementById("p-buy-now-btn");

  if (btnMinus && qtyInput) {
    btnMinus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10);
      if (val > 1) qtyInput.value = val - 1;
    });
  }
  if (btnPlus && qtyInput) {
    btnPlus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10);
      if (val < 10) qtyInput.value = val + 1;
    });
  }
  if (btnAdd && qtyInput) {
    btnAdd.addEventListener("click", () => {
      addToCart(product.id, parseInt(qtyInput.value, 10));
    });
  }
  if (btnBuyNow && qtyInput) {
    btnBuyNow.addEventListener("click", () => {
      addToCart(product.id, parseInt(qtyInput.value, 10));
      window.location.href = "checkout.html";
    });
  }

  // Product Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const targetPane = document.getElementById(`tab-pane-${target}`);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // Related Products
  const relatedGrid = document.getElementById("related-products-grid");
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.categorySlug === product.categorySlug)
      .slice(0, 4);
    const fallback = related.length < 4 
      ? related.concat(PRODUCTS.filter(p => p.id !== product.id && !related.includes(p)).slice(0, 4 - related.length))
      : related;

    relatedGrid.innerHTML = fallback.map(createProductCardHTML).join("");
  }
}

/* ==========================================================================
   PAGE: SHOPPING CART INITIALIZER
   ========================================================================== */
function initCartPage() {
  const container = document.getElementById("cart-page-content");
  if (!container) return;

  function renderCartView() {
    const cart = getCart();

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="empty-cart-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h2 style="font-family: var(--font-serif);">Your bag is currently empty.</h2>
          <p>Discover our curated collection of ceramics, lighting, and décor designed for beautiful living.</p>
          <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
        </div>
      `;
      return;
    }

    const subtotal = getCartSubtotal();
    const total = subtotal + DELIVERY_FEE;

    const rowsHTML = cart.map(item => `
      <tr class="cart-item-row" data-id="${item.id}">
        <td class="cart-product-cell">
          <img src="${item.image}" alt="${item.name}" class="cart-product-thumb">
          <div class="cart-product-info">
            <span class="cart-item-category">${item.category}</span>
            <h4><a href="product.html?id=${item.id}">${item.name}</a></h4>
            <span class="cart-item-price">${formatPKR(item.price)}</span>
            <div>
              <button type="button" class="cart-remove-btn" onclick="removeFromCart('${item.id}'); initCartPage();">Remove item</button>
            </div>
          </div>
        </td>
        <td>
          <div class="quantity-selector" style="height: 40px;">
            <button type="button" class="qty-btn" onclick="updateCartQuantity('${item.id}', -1); initCartPage();">-</button>
            <input type="number" class="qty-input" value="${item.quantity}" readonly>
            <button type="button" class="qty-btn" onclick="updateCartQuantity('${item.id}', 1); initCartPage();">+</button>
          </div>
        </td>
        <td style="text-align: right; font-weight: 600; font-size: 1.05rem;">
          ${formatPKR(item.price * item.quantity)}
        </td>
      </tr>
    `).join("");

    container.innerHTML = `
      <div class="cart-layout">
        <div>
          <table class="cart-items-table">
            <thead>
              <tr>
                <th>Product</th>
                <th style="width: 140px;">Quantity</th>
                <th style="text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHTML}
            </tbody>
          </table>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem;">
            <a href="shop.html" class="btn btn-secondary btn-sm">← Continue Shopping</a>
            <button type="button" class="btn btn-secondary btn-sm" onclick="clearCart(); initCartPage();">Clear Bag</button>
          </div>
        </div>

        <div class="order-summary-card">
          <h3 style="font-family: var(--font-serif);">Order Summary</h3>
          <div class="summary-line">
            <span>Subtotal</span>
            <span style="font-weight: 600;">${formatPKR(subtotal)}</span>
          </div>
          <div class="summary-line">
            <span>Standard Home Delivery</span>
            <span style="font-weight: 600;">${formatPKR(DELIVERY_FEE)}</span>
          </div>
          <div class="summary-line total-line">
            <span>Estimated Total</span>
            <span>${formatPKR(total)}</span>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-muted); margin: 1.25rem 0;">
            Taxes included. Order confirmed instantly via WhatsApp with Cash on Delivery.
          </p>

          <a href="checkout.html" class="btn btn-primary btn-block" style="margin-bottom: 0.85rem;">
            Proceed to Checkout
          </a>

          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Aurelia Home, I would like assistance with my order.')}" target="_blank" rel="noopener noreferrer" class="whatsapp-inquire-btn" style="text-align: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Need Help? WhatsApp Us
          </a>
        </div>
      </div>
    `;
  }

  renderCartView();
}

/* ==========================================================================
   PAGE: CHECKOUT & WHATSAPP ORDER SUBMISSION
   ========================================================================== */
function initCheckoutPage() {
  const checkoutContainer = document.getElementById("checkout-content-wrap");
  const successScreen = document.getElementById("order-success-screen");
  const checkoutSummaryItems = document.getElementById("checkout-summary-items");
  const checkoutSubtotal = document.getElementById("checkout-subtotal");
  const checkoutDelivery = document.getElementById("checkout-delivery");
  const checkoutTotal = document.getElementById("checkout-total");
  const checkoutForm = document.getElementById("checkout-form");

  if (!checkoutContainer || !checkoutForm) return;

  const cart = getCart();
  if (cart.length === 0) {
    checkoutContainer.innerHTML = `
      <div class="empty-cart-state" style="grid-column: 1 / -1;">
        <h2 style="font-family: var(--font-serif);">Your bag is empty</h2>
        <p>Please select items before proceeding to checkout.</p>
        <a href="shop.html" class="btn btn-primary">Return to Shop</a>
      </div>
    `;
    return;
  }

  // Populate Order Summary
  const subtotal = getCartSubtotal();
  const delivery = DELIVERY_FEE;
  const total = subtotal + delivery;

  if (checkoutSummaryItems) {
    checkoutSummaryItems.innerHTML = cart.map(item => `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; font-size: 0.9rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${item.image}" alt="${item.name}" style="width: 44px; height: 44px; object-fit: cover; border-radius: var(--radius-sm);">
          <div>
            <span style="font-weight: 600; display: block;">${item.name}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Qty: ${item.quantity}</span>
          </div>
        </div>
        <span style="font-weight: 600;">${formatPKR(item.price * item.quantity)}</span>
      </div>
    `).join("");
  }

  if (checkoutSubtotal) checkoutSubtotal.textContent = formatPKR(subtotal);
  if (checkoutDelivery) checkoutDelivery.textContent = formatPKR(delivery);
  if (checkoutTotal) checkoutTotal.textContent = formatPKR(total);

  // Form Submission -> WhatsApp Link Generation & Order Success Screen
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const whatsapp = document.getElementById("cust-whatsapp").value.trim() || phone;
    const email = document.getElementById("cust-email").value.trim();
    const city = document.getElementById("cust-city").value.trim();
    const area = document.getElementById("cust-area").value.trim();
    const address = document.getElementById("cust-address").value.trim();
    const notes = document.getElementById("cust-notes").value.trim();

    if (!fullName || !phone || !city || !area || !address) {
      alert("Please fill in all required delivery fields.");
      return;
    }

    const customer = {
      name: fullName,
      phone: phone,
      whatsapp: whatsapp,
      email: email,
      city: city,
      area: area,
      address: address,
      notes: notes
    };

    const orderNumber = generateOrderNumber();
    const whatsappMessage = generateWhatsAppOrderMessage(customer, cart, subtotal, delivery, total);
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // 1. Open WhatsApp in new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // 2. Clear Cart only after the order confirmation flow is triggered
    clearCart();

    // 3. Render Order Success Screen
    checkoutContainer.style.display = "none";
    if (successScreen) {
      document.getElementById("success-order-number").textContent = orderNumber;
      document.getElementById("success-summary-preview").textContent = whatsappMessage;
      
      const sendWaBtn = document.getElementById("success-send-wa-again");
      if (sendWaBtn) {
        sendWaBtn.href = waUrl;
      }

      successScreen.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

/* ==========================================================================
   PAGE: CONTACT & FAQ ACCORDION
   ========================================================================== */
function initContactPage() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  const contactForm = document.getElementById("contact-page-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const feedback = document.getElementById("contact-feedback");
      if (feedback) {
        feedback.style.display = "block";
        feedback.textContent = "Thank you. Your message has been received. Our team will contact you shortly.";
      }
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   DOM READY INITIALIZER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadges();
  updateWishlistBadges();
  initSearchOverlay();
  initWishlistDrawer();
  initMobileMenu();
  bindGlobalEvents();

  // Detect current page and invoke specific controller
  const path = window.location.pathname.toLowerCase();
  if (path.includes("shop.html")) {
    initShopPage();
  } else if (path.includes("product.html")) {
    initProductPage();
  } else if (path.includes("cart.html")) {
    initCartPage();
  } else if (path.includes("checkout.html")) {
    initCheckoutPage();
  } else if (path.includes("contact.html")) {
    initContactPage();
  } else {
    // Default to Homepage
    initHomePage();
  }
});

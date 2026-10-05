/* ============================================================
   AURELIA HOME — main.js
   Shared behaviour used on every page: sticky nav, mobile menu,
   search panel, cart/wishlist state (localStorage), toasts,
   product card rendering, WhatsApp link builders, scroll reveal,
   and newsletter validation.

   CONFIG — update these two lines for a real deployment:
   ============================================================ */
const WHATSAPP_NUMBER = "923001234567"; // <-- replace with the business's real WhatsApp number (no + or spaces)
const FREE_DELIVERY_THRESHOLD = 15000;
const DELIVERY_FEE = 350;

/* ---------------- Cart & Wishlist storage ---------------- */
const Store = {
  getCart() {
    try { return JSON.parse(localStorage.getItem("aurelia_cart")) || []; }
    catch (e) { return []; }
  },
  saveCart(cart) {
    localStorage.setItem("aurelia_cart", JSON.stringify(cart));
    updateCartBadge();
  },
  addToCart(id, qty) {
    qty = qty || 1;
    const cart = Store.getCart();
    const existing = cart.find(function (i) { return i.id === id; });
    if (existing) { existing.qty += qty; } else { cart.push({ id: id, qty: qty }); }
    Store.saveCart(cart);
  },
  updateQty(id, qty) {
    let cart = Store.getCart();
    if (qty <= 0) { cart = cart.filter(function (i) { return i.id !== id; }); }
    else { cart.forEach(function (i) { if (i.id === id) i.qty = qty; }); }
    Store.saveCart(cart);
  },
  removeFromCart(id) {
    const cart = Store.getCart().filter(function (i) { return i.id !== id; });
    Store.saveCart(cart);
  },
  cartCount() {
    return Store.getCart().reduce(function (sum, i) { return sum + i.qty; }, 0);
  },
  getWishlist() {
    try { return JSON.parse(localStorage.getItem("aurelia_wishlist")) || []; }
    catch (e) { return []; }
  },
  toggleWishlist(id) {
    let list = Store.getWishlist();
    if (list.includes(id)) { list = list.filter(function (x) { return x !== id; }); }
    else { list.push(id); }
    localStorage.setItem("aurelia_wishlist", JSON.stringify(list));
    updateWishlistBadge();
    return list.includes(id);
  },
  isWishlisted(id) {
    return Store.getWishlist().includes(id);
  }
};

function updateCartBadge() {
  document.querySelectorAll(".js-cart-count").forEach(function (el) {
    const count = Store.cartCount();
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}
function updateWishlistBadge() {
  document.querySelectorAll(".js-wishlist-count").forEach(function (el) {
    const count = Store.getWishlist().length;
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

/* ---------------- Toasts ---------------- */
function showToast(message) {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  wrap.appendChild(toast);
  setTimeout(function () {
    toast.classList.add("leaving");
    setTimeout(function () { toast.remove(); }, 300);
  }, 2600);
}

/* ---------------- WhatsApp helpers ---------------- */
function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
function whatsappProductInquiry(product) {
  const msg = "Hi Aurelia Home! I'd like to ask about the " + product.name + " (" + formatPKR(product.price) + "). Is it currently in stock?";
  return whatsappLink(msg);
}
function whatsappCartOrder() {
  const cart = Store.getCart();
  if (cart.length === 0) return whatsappLink("Hi Aurelia Home! I'd like to place an order.");
  let lines = ["Hi Aurelia Home! I'd like to order:"];
  let subtotal = 0;
  cart.forEach(function (item) {
    const p = findProduct(item.id);
    if (!p) return;
    const lineTotal = p.price * item.qty;
    subtotal += lineTotal;
    lines.push("- " + p.name + " x" + item.qty + " — " + formatPKR(lineTotal));
  });
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE;
  lines.push("");
  lines.push("Subtotal: " + formatPKR(subtotal));
  lines.push("Delivery: " + (delivery === 0 ? "Free" : formatPKR(delivery)));
  lines.push("Total: " + formatPKR(subtotal + delivery));
  return whatsappLink(lines.join("\n"));
}

/* ---------------- Product card markup ---------------- */
function productCardHTML(p) {
  const wished = Store.isWishlisted(p.id) ? "is-active" : "";
  let badge = "";
  if (p.badge) {
    const cls = p.badge === "Sale" ? "sale" : (p.badge === "New" ? "new" : "");
    badge = '<span class="product-badge ' + cls + '">' + p.badge + '</span>';
  }
  const oldPrice = p.oldPrice ? '<span class="price-old">' + formatPKR(p.oldPrice) + '</span>' : "";
  return (
    '<article class="product-card">' +
      '<div class="product-media">' +
        badge +
        '<button class="wishlist-btn ' + wished + '" data-wishlist="' + p.id + '" aria-label="Toggle wishlist for ' + p.name + '">' +
          '<svg viewBox="0 0 24 24" stroke-width="1.6"><path d="M12 21s-7.5-4.6-10-9.3C.4 8 2 4.5 5.6 4a5.4 5.4 0 0 1 6.4 3 5.4 5.4 0 0 1 6.4-3C22 4.5 23.6 8 22 11.7 19.5 16.4 12 21 12 21Z"/></svg>' +
        '</button>' +
        '<a href="product.html?id=' + p.id + '"><img src="' + p.images[0] + '" alt="' + p.name + '" loading="lazy"></a>' +
        '<div class="product-quickadd">' +
          '<button class="btn btn-light btn-block btn-sm" data-quickadd="' + p.id + '">Add to Cart</button>' +
        '</div>' +
      '</div>' +
      '<div class="product-info">' +
        '<div class="product-cat">' + CATEGORY_LABELS[p.category] + '</div>' +
        '<h3 class="product-name"><a href="product.html?id=' + p.id + '">' + p.name + '</a></h3>' +
        '<div class="product-price"><span class="price-now">' + formatPKR(p.price) + '</span>' + oldPrice + '</div>' +
      '</div>' +
    '</article>'
  );
}

function bindProductCardEvents(container) {
  container.querySelectorAll("[data-wishlist]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const id = btn.getAttribute("data-wishlist");
      const active = Store.toggleWishlist(id);
      btn.classList.toggle("is-active", active);
      showToast(active ? "Added to your wishlist" : "Removed from wishlist");
    });
  });
  container.querySelectorAll("[data-quickadd]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const id = btn.getAttribute("data-quickadd");
      Store.addToCart(id, 1);
      const p = findProduct(id);
      showToast((p ? p.name : "Item") + " added to cart");
    });
  });
}

/* ---------------- Navigation: sticky, mobile menu, search ---------------- */
function initNav() {
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }, { passive: true });
  }

  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".nav-overlay");
  function closeMobileNav() {
    hamburger && hamburger.classList.remove("is-open");
    mobileNav && mobileNav.classList.remove("is-open");
    overlay && overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function openMobileNav() {
    hamburger && hamburger.classList.add("is-open");
    mobileNav && mobileNav.classList.add("is-open");
    overlay && overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      const isOpen = mobileNav.classList.contains("is-open");
      isOpen ? closeMobileNav() : openMobileNav();
    });
  }
  overlay && overlay.addEventListener("click", closeMobileNav);
  document.querySelector(".mobile-nav-close") && document.querySelector(".mobile-nav-close").addEventListener("click", closeMobileNav);
  document.querySelectorAll(".mobile-nav a").forEach(function (a) { a.addEventListener("click", closeMobileNav); });

  const searchTrigger = document.querySelector(".search-trigger");
  const searchPanel = document.querySelector(".search-panel");
  if (searchTrigger && searchPanel) {
    searchTrigger.addEventListener("click", function () {
      searchPanel.classList.toggle("is-open");
      if (searchPanel.classList.contains("is-open")) {
        setTimeout(function () { searchPanel.querySelector("input").focus(); }, 200);
      }
    });
    searchPanel.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      const q = searchPanel.querySelector("input").value.trim();
      window.location.href = "shop.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }
}

/* ---------------- Scroll reveal ---------------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
}

/* ---------------- Newsletter validation ---------------- */
function initNewsletterForms() {
  document.querySelectorAll(".newsletter-form").forEach(function (form) {
    const note = form.parentElement.querySelector(".newsletter-note");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      const value = input.value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!isValid) {
        if (note) { note.textContent = "Please enter a valid email address."; note.style.color = "#E8A0A0"; }
        input.focus();
        return;
      }
      if (note) { note.textContent = "Thank you — you're on the list."; note.style.color = "rgba(255,255,255,0.8)"; }
      showToast("Subscribed! Welcome to Aurelia Home.");
      form.reset();
    });
  });
}

/* ---------------- Smooth scroll for on-page anchors ---------------- */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ---------------- Active nav link highlighting ---------------- */
function markActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a, .mobile-nav a").forEach(function (a) {
    const href = a.getAttribute("href");
    if (href === page) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initScrollReveal();
  initNewsletterForms();
  initSmoothAnchors();
  markActiveNav();
  updateCartBadge();
  updateWishlistBadge();

  // Bind any product cards already in the DOM (home page best sellers etc.)
  bindProductCardEvents(document);

  // Generic WhatsApp inquiry buttons: data-whatsapp-msg
  document.querySelectorAll("[data-whatsapp-msg]").forEach(function (a) {
    a.setAttribute("href", whatsappLink(a.getAttribute("data-whatsapp-msg")));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
});

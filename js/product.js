/* ============================================================
   AURELIA HOME — product.js
   Populates product.html based on ?id= query param: gallery,
   pricing, specs, quantity selector, add to cart / buy now,
   WhatsApp inquiry, frequently bought together, related products.
   ============================================================ */

(function () {
  const root = document.querySelector("[data-pdp-root]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = findProduct(id) || PRODUCTS[0];
  let qty = 1;

  // Breadcrumb
  const crumbCat = document.querySelector("[data-crumb-category]");
  if (crumbCat) {
    crumbCat.textContent = CATEGORY_LABELS[product.category];
    crumbCat.setAttribute("href", "shop.html?cat=" + product.category);
  }
  const crumbName = document.querySelector("[data-crumb-name]");
  if (crumbName) crumbName.textContent = product.name;

  // Gallery
  const mainImg = document.querySelector("[data-pdp-main-image]");
  const thumbWrap = document.querySelector("[data-pdp-thumbs]");
  function setActiveImage(index) {
    mainImg.src = product.images[index];
    mainImg.alt = product.name;
    thumbWrap.querySelectorAll("button").forEach(function (b, i) {
      b.classList.toggle("active", i === index);
    });
  }
  if (mainImg && thumbWrap) {
    thumbWrap.innerHTML = product.images.map(function (img, i) {
      return '<button class="' + (i === 0 ? "active" : "") + '" data-thumb-index="' + i + '"><img src="' + img + '" alt="' + product.name + ' view ' + (i + 1) + '"></button>';
    }).join("");
    setActiveImage(0);
    thumbWrap.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () { setActiveImage(Number(b.getAttribute("data-thumb-index"))); });
    });
  }

  // Text content
  document.title = product.name + " — Aurelia Home";
  setText("[data-pdp-category]", CATEGORY_LABELS[product.category]);
  setText("[data-pdp-name]", product.name);
  setText("[data-pdp-desc]", product.description);
  const priceNow = document.querySelector("[data-pdp-price-now]");
  if (priceNow) priceNow.textContent = formatPKR(product.price);
  const priceOld = document.querySelector("[data-pdp-price-old]");
  if (priceOld) {
    if (product.oldPrice) {
      priceOld.textContent = formatPKR(product.oldPrice);
      priceOld.style.display = "";
      const pct = Math.round((1 - product.price / product.oldPrice) * 100);
      const badge = document.querySelector("[data-pdp-discount-badge]");
      if (badge) { badge.textContent = pct + "% off"; badge.style.display = ""; }
    } else {
      priceOld.style.display = "none";
    }
  }

  // Specs
  setText("[data-spec-material]", product.material);
  setText("[data-spec-dimensions]", product.dimensions);
  setText("[data-spec-color]", product.color);
  setText("[data-spec-weight]", product.weight);
  setText("[data-spec-care]", product.care);

  // Features ("Why You'll Love It")
  const featureList = document.querySelector("[data-pdp-features]");
  if (featureList) {
    featureList.innerHTML = product.features.map(function (f) { return "<li>" + f + "</li>"; }).join("");
  }

  // Wishlist button state
  const wishBtn = document.querySelector("[data-pdp-wishlist]");
  if (wishBtn) {
    wishBtn.classList.toggle("is-active", Store.isWishlisted(product.id));
    wishBtn.addEventListener("click", function () {
      const active = Store.toggleWishlist(product.id);
      wishBtn.classList.toggle("is-active", active);
      showToast(active ? "Added to your wishlist" : "Removed from wishlist");
    });
  }

  // Quantity selector
  const qtyDisplay = document.querySelector("[data-qty-display]");
  document.querySelector("[data-qty-minus]").addEventListener("click", function () {
    qty = Math.max(1, qty - 1);
    qtyDisplay.textContent = qty;
  });
  document.querySelector("[data-qty-plus]").addEventListener("click", function () {
    qty = Math.min(10, qty + 1);
    qtyDisplay.textContent = qty;
  });

  // Add to cart / Buy now
  document.querySelector("[data-add-to-cart]").addEventListener("click", function () {
    Store.addToCart(product.id, qty);
    showToast(product.name + " (x" + qty + ") added to cart");
  });
  document.querySelector("[data-buy-now]").addEventListener("click", function () {
    Store.addToCart(product.id, qty);
    window.location.href = "cart.html";
  });

  // WhatsApp inquiry
  const waBtn = document.querySelector("[data-whatsapp-product]");
  if (waBtn) {
    waBtn.setAttribute("href", whatsappProductInquiry(product));
    waBtn.setAttribute("target", "_blank");
    waBtn.setAttribute("rel", "noopener");
  }

  // Frequently bought together
  const fbtWrap = document.querySelector("[data-fbt]");
  if (fbtWrap) {
    const sameCat = PRODUCTS.filter(function (p) { return p.category === product.category && p.id !== product.id; });
    const pair = sameCat.slice(0, 2);
    fbtWrap.innerHTML = renderFBT(product, pair);
    const addAllBtn = fbtWrap.querySelector("[data-fbt-add-all]");
    if (addAllBtn) {
      addAllBtn.addEventListener("click", function () {
        Store.addToCart(product.id, 1);
        pair.forEach(function (p) { Store.addToCart(p.id, 1); });
        showToast("Bundle added to cart");
      });
    }
  }

  // You may also like
  const relatedWrap = document.querySelector("[data-related]");
  if (relatedWrap) {
    const related = PRODUCTS.filter(function (p) { return p.category === product.category && p.id !== product.id; }).slice(0, 4);
    const fallback = related.length ? related : PRODUCTS.filter(function (p) { return p.id !== product.id; }).slice(0, 4);
    relatedWrap.innerHTML = fallback.map(productCardHTML).join("");
    bindProductCardEvents(relatedWrap);
  }

  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function renderFBT(main, extras) {
    let total = main.price;
    let html = '<div class="fbt-row">';
    html += fbtItem(main);
    extras.forEach(function (p) {
      total += p.price;
      html += '<span class="fbt-plus">+</span>' + fbtItem(p);
    });
    html += '<div class="fbt-total"><div style="font-size:0.85rem;color:var(--color-charcoal-soft)">Bundle total</div><div style="font-size:1.2rem;font-weight:600;margin-bottom:8px;">' + formatPKR(total) + '</div><button class="btn btn-primary btn-sm" data-fbt-add-all>Add Bundle to Cart</button></div>';
    html += '</div>';
    return html;
  }
  function fbtItem(p) {
    return '<div class="fbt-item"><img src="' + p.images[0] + '" alt="' + p.name + '"><div><div class="fbt-item-name">' + p.name + '</div><div style="font-size:0.85rem;color:var(--color-charcoal-soft)">' + formatPKR(p.price) + '</div></div></div>';
  }
})();

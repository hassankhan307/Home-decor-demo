/* ============================================================
   AURELIA HOME — shop.js
   Renders the product grid on shop.html and wires up category
   filters, search, price range, and sorting — all client-side.
   ============================================================ */

(function () {
  const grid = document.querySelector(".shop-grid");
  if (!grid) return;

  const resultsCount = document.querySelector(".results-count");
  const searchInput = document.querySelector(".shop-search input");
  const sortSelect = document.querySelector(".shop-sort select");
  const categoryInputs = document.querySelectorAll("[data-filter-category]");
  const priceRange = document.querySelector("[data-filter-price]");
  const priceValueEl = document.querySelector(".price-range-values .current-max");
  const clearBtn = document.querySelector(".clear-filters");
  const mobileToggle = document.querySelector(".mobile-filter-toggle");
  const filterSidebar = document.querySelector(".filter-sidebar");

  const MAX_PRICE = Math.max.apply(null, PRODUCTS.map(function (p) { return p.price; }));

  const params = new URLSearchParams(window.location.search);
  const state = {
    category: params.get("cat") || "all",
    q: params.get("q") || "",
    maxPrice: MAX_PRICE,
    sort: "featured"
  };

  if (searchInput) searchInput.value = state.q;
  if (priceRange) { priceRange.max = MAX_PRICE; priceRange.value = MAX_PRICE; }
  if (priceValueEl) priceValueEl.textContent = formatPKR(MAX_PRICE);

  categoryInputs.forEach(function (input) {
    input.checked = input.value === state.category;
  });

  function applyFilters() {
    let list = PRODUCTS.slice();

    if (state.category !== "all") {
      list = list.filter(function (p) { return p.category === state.category; });
    }
    if (state.q) {
      const q = state.q.toLowerCase();
      list = list.filter(function (p) {
        return p.name.toLowerCase().includes(q) || CATEGORY_LABELS[p.category].toLowerCase().includes(q);
      });
    }
    list = list.filter(function (p) { return p.price <= state.maxPrice; });

    switch (state.sort) {
      case "price-asc": list.sort(function (a, b) { return a.price - b.price; }); break;
      case "price-desc": list.sort(function (a, b) { return b.price - a.price; }); break;
      case "name-asc": list.sort(function (a, b) { return a.name.localeCompare(b.name); }); break;
      case "newest": list = list.slice().reverse(); break;
      default: break; // featured: catalogue order
    }

    renderGrid(list);
  }

  function renderGrid(list) {
    if (list.length === 0) {
      grid.innerHTML = '<div class="empty-state"><p>No products match your filters just yet.</p><button class="btn btn-outline btn-sm" id="resetFromEmpty">Clear filters</button></div>';
      const resetBtn = document.getElementById("resetFromEmpty");
      resetBtn && resetBtn.addEventListener("click", resetFilters);
    } else {
      grid.innerHTML = list.map(productCardHTML).join("");
      bindProductCardEvents(grid);
    }
    if (resultsCount) {
      resultsCount.textContent = list.length + (list.length === 1 ? " product" : " products");
    }
  }

  function resetFilters() {
    state.category = "all";
    state.q = "";
    state.maxPrice = MAX_PRICE;
    state.sort = "featured";
    if (searchInput) searchInput.value = "";
    if (priceRange) priceRange.value = MAX_PRICE;
    if (priceValueEl) priceValueEl.textContent = formatPKR(MAX_PRICE);
    if (sortSelect) sortSelect.value = "featured";
    categoryInputs.forEach(function (input) { input.checked = input.value === "all"; });
    applyFilters();
  }

  categoryInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      state.category = input.value;
      applyFilters();
    });
  });

  if (searchInput) {
    let debounce;
    searchInput.addEventListener("input", function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        state.q = searchInput.value.trim();
        applyFilters();
      }, 200);
    });
  }

  if (priceRange) {
    priceRange.addEventListener("input", function () {
      state.maxPrice = Number(priceRange.value);
      if (priceValueEl) priceValueEl.textContent = formatPKR(state.maxPrice);
      applyFilters();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      state.sort = sortSelect.value;
      applyFilters();
    });
  }

  clearBtn && clearBtn.addEventListener("click", resetFilters);

  if (mobileToggle && filterSidebar) {
    mobileToggle.addEventListener("click", function () {
      filterSidebar.classList.toggle("is-open");
      mobileToggle.textContent = filterSidebar.classList.contains("is-open") ? "Hide Filters" : "Show Filters";
    });
  }

  applyFilters();
})();

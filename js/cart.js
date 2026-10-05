/* ============================================================
   AURELIA HOME — cart.js
   Renders cart.html from localStorage cart data, handles quantity
   changes, removal, totals, and the WhatsApp checkout link.
   ============================================================ */

(function () {
  const list = document.querySelector("[data-cart-list]");
  if (!list) return;

  const emptyState = document.querySelector("[data-cart-empty]");
  const summaryBlock = document.querySelector("[data-cart-summary]");
  const subtotalEl = document.querySelector("[data-cart-subtotal]");
  const deliveryEl = document.querySelector("[data-cart-delivery]");
  const totalEl = document.querySelector("[data-cart-total]");
  const waCheckoutBtn = document.querySelector("[data-whatsapp-checkout]");
  const freeDeliveryNote = document.querySelector("[data-free-delivery-note]");

  function render() {
    const cart = Store.getCart();
    if (cart.length === 0) {
      list.style.display = "none";
      summaryBlock.style.display = "none";
      emptyState.style.display = "block";
      return;
    }
    list.style.display = "block";
    summaryBlock.style.display = "block";
    emptyState.style.display = "none";

    let subtotal = 0;
    list.innerHTML = cart.map(function (item) {
      const p = findProduct(item.id);
      if (!p) return "";
      const lineTotal = p.price * item.qty;
      subtotal += lineTotal;
      return (
        '<div class="cart-item" data-cart-item="' + p.id + '">' +
          '<img src="' + p.images[0] + '" alt="' + p.name + '">' +
          '<div>' +
            '<div class="cart-item-name"><a href="product.html?id=' + p.id + '">' + p.name + '</a></div>' +
            '<div class="cart-item-cat">' + CATEGORY_LABELS[p.category] + ' · ' + formatPKR(p.price) + ' each</div>' +
            '<div class="cart-item-remove" data-remove="' + p.id + '">Remove</div>' +
          '</div>' +
          '<div class="qty-selector">' +
            '<button data-dec="' + p.id + '" aria-label="Decrease quantity">−</button>' +
            '<span>' + item.qty + '</span>' +
            '<button data-inc="' + p.id + '" aria-label="Increase quantity">+</button>' +
          '</div>' +
          '<div class="cart-item-price">' + formatPKR(lineTotal) + '</div>' +
        '</div>'
      );
    }).join("");

    const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    subtotalEl.textContent = formatPKR(subtotal);
    deliveryEl.textContent = delivery === 0 ? "Free" : formatPKR(delivery);
    totalEl.textContent = formatPKR(subtotal + delivery);

    if (freeDeliveryNote) {
      if (delivery === 0) {
        freeDeliveryNote.textContent = "You've unlocked free delivery.";
      } else {
        freeDeliveryNote.textContent = "Add " + formatPKR(FREE_DELIVERY_THRESHOLD - subtotal) + " more to get free delivery.";
      }
    }

    if (waCheckoutBtn) {
      waCheckoutBtn.setAttribute("href", whatsappCartOrder());
      waCheckoutBtn.setAttribute("target", "_blank");
      waCheckoutBtn.setAttribute("rel", "noopener");
    }

    bindRowEvents();
  }

  function bindRowEvents() {
    list.querySelectorAll("[data-inc]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-inc");
        const item = Store.getCart().find(function (i) { return i.id === id; });
        Store.updateQty(id, (item ? item.qty : 0) + 1);
        render();
      });
    });
    list.querySelectorAll("[data-dec]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-dec");
        const item = Store.getCart().find(function (i) { return i.id === id; });
        Store.updateQty(id, (item ? item.qty : 1) - 1);
        render();
      });
    });
    list.querySelectorAll("[data-remove]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        Store.removeFromCart(btn.getAttribute("data-remove"));
        showToast("Removed from cart");
        render();
      });
    });
  }

  render();
})();

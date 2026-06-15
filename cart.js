// ── Cart state (persisted in localStorage) ──

function getCart() {
    return JSON.parse(localStorage.getItem("gusteauCart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("gusteauCart", JSON.stringify(cart));
}

function addToCart(name, price) {
    var cart = getCart();
    var existing = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) { existing = cart[i]; break; }
    }
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name: name, price: price, qty: 1 });
    }
    saveCart(cart);
    renderCart();
    openCart();
}

function removeFromCart(name) {
    var cart = getCart().filter(function(item) { return item.name !== name; });
    saveCart(cart);
    renderCart();
}

function changeQty(name, delta) {
    var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].qty += delta;
            if (cart[i].qty <= 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart(cart);
    renderCart();
}

function clearCart() {
    saveCart([]);
    renderCart();
}

function renderCart() {
    var cart = getCart();
    var itemsEl = document.getElementById("cart-items");
    var totalEl = document.getElementById("cart-total");
    var countEl = document.getElementById("cart-count");

    if (!itemsEl) return;

    // Update badge
    var totalQty = 0;
    var totalPrice = 0;
    cart.forEach(function(item) {
        totalQty += item.qty;
        totalPrice += item.price * item.qty;
    });
    if (countEl) countEl.textContent = totalQty;

    // Render items
    if (cart.length === 0) {
        itemsEl.innerHTML = "<p class='cart-empty'>Your cart is empty.</p>";
        if (totalEl) totalEl.innerHTML = "Total: <span>$0.00</span>";
        return;
    }

    var html = "";
    cart.forEach(function(item) {
        html += "<div class='cart-item'>" +
            "<div class='cart-item-info'>" +
                "<div class='cart-item-name'>" + item.name + "</div>" +
                "<div class='cart-item-price'>$" + (item.price * item.qty).toFixed(2) + " ($" + item.price.toFixed(2) + " each)</div>" +
            "</div>" +
            "<div class='cart-qty'>" +
                "<button class='qty-btn' onclick='changeQty(\"" + item.name.replace(/"/g, "&quot;") + "\", -1)'>&#8722;</button>" +
                "<span>" + item.qty + "</span>" +
                "<button class='qty-btn' onclick='changeQty(\"" + item.name.replace(/"/g, "&quot;") + "\", 1)'>&#43;</button>" +
            "</div>" +
            "<button class='remove-item-btn' onclick='removeFromCart(\"" + item.name.replace(/"/g, "&quot;") + "\")' title='Remove'>&#215;</button>" +
        "</div>";
    });
    itemsEl.innerHTML = html;

    if (totalEl) totalEl.innerHTML = "Total: <span>$" + totalPrice.toFixed(2) + "</span>";
}

function openCart() {
    var panel = document.getElementById("cart-panel");
    var overlay = document.getElementById("cart-overlay");
    if (panel) panel.classList.add("open");
    if (overlay) overlay.classList.add("open");
}

function closeCart() {
    var panel = document.getElementById("cart-panel");
    var overlay = document.getElementById("cart-overlay");
    if (panel) panel.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
}

function toggleHamburger() {
    var nav = document.getElementById("nav-links");
    if (nav) nav.classList.toggle("open");
}

// Init on page load
document.addEventListener("DOMContentLoaded", function() {
    renderCart();
});

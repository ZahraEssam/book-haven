let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItems.innerHTML = "";
  let total = 0;
  storedCart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    total += item.price;
  });

  totalPrice.innerText = "Total: $" + total;
}

// لو أنا في صفحة الكارت
if (window.location.pathname.includes("cart.html")) {
  displayCart();
}
// Search functionality
document.getElementById("searchInput").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let title = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    if (title.includes(filter)) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
});

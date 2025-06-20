let cartQuantity = 0;

function viewQuantity() {
  console.log("Cart: $" + cartQuantity);
}

function addToCart(amount) {
  cartQuantity += amount;
  console.log("Cart: $" + cartQuantity);
}

function resetCart() {
  cartQuantity = 0;
  console.log("Cart reset");
  displayQuantity();
}

function updateQuantity() {
  let value = document.getElementById("updateInput").value;
  let quantity = Number(value);

  if (quantity >= 0) {
    cartQuantity = quantity;
    console.log("Cart updated: $" + cartQuantity);
    displayQuantity();
  } else {
    alert("Enter a valid number");
  }
}

function displayQuantity() {
  document.getElementById("quantityDisplay").innerText = "Cart: $" + cartQuantity;
}

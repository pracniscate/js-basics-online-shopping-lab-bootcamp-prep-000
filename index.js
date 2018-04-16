var cart = [];

var Item = function(itemName, itemPrice) {
  this.itemName = itemName;
  this.itemPrice = itemPrice;
};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({"itemName": item, "itemPrice": Math.floor(Math.random() * 100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var sentence = "In your cart, you have ";
  var x = 1;
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return sentence + `${cart[x-1].itemName} at $${cart[x-1].itemPrice}.`;
  }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

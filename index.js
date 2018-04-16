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
  return `${item} has been added to your cart`;
}

function viewCart() {
  //prints 'Your shopping cart is empty.' if the cart is empty
  if(!cart.length) {
    console.log('Your shopping cart is empty.');
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

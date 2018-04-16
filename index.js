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

function addToCart(itemName) {
  cart.push({"itemName": item, "itemPrice": Math.floor(Math.random() * 100)});
  console.log(`${itemName} has been added to your cart`);
  return cart;
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

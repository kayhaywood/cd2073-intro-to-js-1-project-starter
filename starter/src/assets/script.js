const products = [];

const product1 = {
  name: "Cherry",
  price: 5.00,
  quantity: 0, // Quantity starts at 0
  productId: 1,
  image: "./images/cherry.jpg" 
};

const product2 = {
  name: "Orange",
  price: 2.00,
  quantity: 0, // Quantity starts at 0
  productId: 2,
  image: "./images/orange.jpg" 
};

const product3 = {
  name: "Strawberry",
  price: 3.50,
  quantity: 0, // Quantity starts at 0
  productId: 3,
  image: "./images/strawberry.jpg"
};

//add products to array
products.push(product1, product2, product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

// Initialize an empty cart array.
const cart = [];
// Helper function to find a product by productId in a given list.
function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}
//Adds a product to the cart and increments its quantity
function addProductToCart(productId) {
  let product = getProductByIdFromList(productId, products);
  if (product !== undefined) {
    //Check if product is already in cart
    let inCart = getProductByIdFromList(productId, cart);
    //If the product is not already in cart, then add it
    if (inCart === undefined) {
      product.quantity += 1;
      cart.push(product);
    }
    //If product is already in cart, then increase quantity
    else {
      product.quantity += 1;
    }
  }
}

function increaseQuantity(productId) {
  products.forEach((product) => {
    if (product.productId === productId) {
      product.quantity += 1;
    }
  });
}

function decreaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      if (products[i].quantity <= 1) {
        removeProductFromCart(productId);
      } else {
        products[i].quantity -= 1;
      }
      break; // Exit loop once the product is found and updated
    }
  }
}
//Removes a product from the cart and resets its quantity
function removeProductFromCart(productId) {
  let productIndex = cart.findIndex((item) => item.productId === productId);
  if (productIndex !== -1) {
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1);
  }
}

function cartTotal() {
  let totalCost = 0;
  for (const item of cart) {
    totalCost += item.price * item.quantity;
  }
  return totalCost;
}
//empties the products from the cart
function emptyCart() {
  cart.length = 0;
}

let totalPaid = 0;
//Processes payment and calculates remaining balance or change.
function pay(amount) {
  totalPaid += amount;
  const balance = totalPaid - cartTotal();
  if (balance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
  return balance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
/* 
    Building a simple Console E-commerce Website 

    1. Function to display already created items
    2. Function to addtoCart
    3. Function to removeFromCart
    4. Function to displayCart
    5. Function to checkout
    6. Function to pay
*/

const items = [
    {id: 1, name: "Bike", price: 100},
    {id: 2, name: "TV", price: 200},
    {id: 3, name: "Album", price: 10},
    {id: 4, name: "Book", price: 5},
    {id: 5, name: "Phone", price: 500},
    {id: 6, name: "Computer", price: 1000},
    {id: 7, name: "Keyboard", price: 25},
    {id: 8, name: "Mouse", price: 35},
    {id: 9, name: "Monitor", price: 150},
    {id: 10, name: "Printer", price: 75},

];


// array to hold the items in the cart
const cart = [];

// function to display available Item

function displayItems() {
    // items.forEach(item => {
    //     console.log(item.id + " " + item.name + " " + item.price);
    // });
    console.log("These are the Available Items we have in stock: ");
    for(item of items) {
        console.log(item.id + "\tname:\t" + item.name + "\tprice: " + item.price);
    }
}

// function add to cart

function addToCart(itemID, quantity){
    const selectedProduct = items.find((item) => item.id === itemID);

    if(selectedProduct && quantity > 0) {
        cart.push({product:selectedProduct, quantity:quantity});
        console.log(selectedProduct.name + "Item added to cart");
        console.log(cart);
    }else{
        console.log("Invalid item or quantity");
    }
}

// function to display items added to cart
function displayCartItems(){

    console.log("These are the items in the cart: ");
    for(item of cart) {
        console.log(item.product.name + " " + item.quantity);
    }

    const total = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    console.log('$ ',total)

}

// displayItems();
addToCart(1, 2);
displayCartItems()
const prompt = require('prompt-sync')({ sigint: true }); // to get user input


const items = [
    {
        id: 1, 
        name: "Bike", 
        price: 100, 
        stock: 30
    },
    {
        id: 2, 
        name: "TV", 
        price: 200,
        stock: 12
    },
    {
        id: 3, 
        name: "Album", 
        price: 10,
        stock: 10
    },
    {
        id: 4, 
        name: "Book", 
        price: 5,
        stock: 9
    },
    {
        id: 5, 
        name: "Phone", 
        price: 500,
        stock: 5
    },
    {
        id: 6, 
        name: "Computer", 
        price: 1000,
        stock: 10
    },
    {
        id: 7, 
        name: "Keyboard", 
        price: 25,
        stock: 6
    },
    {
        id: 8, 
        name: "Mouse", 
        price: 35,
        stock: 8
    },
    {
        id: 9, 
        name: "Monitor", 
        price: 150,
        stock: 7
    },

    {
        id: 10, 
        name: "Printer", 
        price: 75,
        stock: 2
    },

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
        console.log(item.id + " " + item.name + " " + item.price);
    }
}

// function add to cart

function addToCart(itemID, quantity){
    const selectedProduct = items.find((item) => item.id === itemID);

    if(selectedProduct && (selectedProduct.stock >= quantity)) {
        cart.push({product:selectedProduct, quantity:quantity});
        console.log(selectedProduct.name + "Item added to cart");
        // console.log(cart);
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

    // calling the reduce function to get the total price of the items in the cart
    const total = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    console.log('The Total amount of your Item is: $',total)

}

/* 
    creating a startShopping function to start the shopping process
    1. display available items
    2. add items to cart
    3. display items in cart
    4. exit
    5. display total price of items in cart
    6. display thank you message
    7. display error message if the quantity is not valid

*/



// function to startShopping 

function startShopping() {
    console.log("Welcome to the Simple Console E-commerce Website built By Gracious");
    console.log("These are the Available Items we have in stock: ");
    displayItems();

    while(true) {

        const config = {
            promptMessage: "Enter your preference: "
          };

        const choice = prompt(config.promptMessage);
        config.name = choice

        if(choice.toLowerCase() === "checkout") {
            displayCartItems();
            break;
        }

       const productID = parseInt(choice);

       if(!items.find((item) => item.id === productID)) {
           console.log("Invalid Item");
           continue;
       }
       const quantity = parseInt(prompt("Enter the quantity: "));

        addToCart(productID, quantity);


    }
}

startShopping()
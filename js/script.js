let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart!");
}

function loadCart(){
let cartItems = document.getElementById("cart-items");
let total = 0;

cartItems.innerHTML = "";

cart.forEach(item=>{
let div = document.createElement("div");
div.innerHTML = item.name + " - $" + item.price;
cartItems.appendChild(div);
total += item.price;
});

document.getElementById("total").innerText = "Total: $" + total;
}

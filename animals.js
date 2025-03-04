const petTypesUlRef = document.getElementById("pets");
const cartListUlRef = document.getElementById("car");
const noPetsUlRef = document.getElementById("bo-pets");
const removeBtnRef = document.getElementById("remove-pet"); 

const petTypes = [
    "Dog",
    "Cat",
    "Rabbit",
    "Fox"
];

const cartList = [];

for (let i = 0; i < petTypes.length; i++) {const newLi = document.createElement("li");
    newLi.innerText = petTypes[i];

    const newBtn = document.createElement("button");
newBtn.innerText = "+";
newBtn.dataset.name = petTypes[i];
newLi.appendChild(newBtn);
newBtn.onclick = addPetsToCart;

petTypesUlRef.appendChild(newLi);
}
    function showCart() {cartListUlRef.innerHTML="";
        for (let i = 0; i < cartList.length; i++) {cartListUlRef.innerHTML += "<li>" + cartList[i] + "</li>"};
    }

function addPetsToCart(e) {
    cart.push(e.target.dataset.name);
    showCart();
}

function removeitemFromCart() {
    cart.pop();
    showCart();
}
removeBtnRef.onclick = removeitemFromCart;

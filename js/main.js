// ***navbar JS***
const navbar = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper")
window.addEventListener("scroll", () => {
if (window.scrollY >= window.innerHeight / 4) {
    navbar.classList.add("navbar-white");
    navWrapper.classList.add("top");
} else {
    navbar.classList.remove("navbar-white");
    navWrapper.classList.remove("top");
}
});


// ***Email JS***

const emailInput = document.querySelector(".input-element");
const acc = document.getElementById("account");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (emailInput.value == "") {
        alert("Your email cannot be blank!")
    }
    else {
        acc.innerText = emailInput.value;
    }
    form.reset();
})


// *** Dropdown menus ***

const drop = document.querySelector(".dropdown")
const dropImg = document.querySelector(".dropdown-images")
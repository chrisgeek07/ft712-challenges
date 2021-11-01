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
    acc.innerText = emailInput.value;
})
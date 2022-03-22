// Target hamburger menu
// Add event listener
// Toggle on click

const hamburger = document.querySelector(".hamburger");
const menuHidden = document.querySelector(".menu-hide");
const menuItems = document.querySelectorAll(".menu-item");

hamburger.addEventListener("click", hamMenu);

menuItems.forEach((item) => {
    item.addEventListener("click", hamMenu);
})

function hamMenu() {
    hamburger.classList.toggle("active");
    menuHidden.classList.toggle("active");
}
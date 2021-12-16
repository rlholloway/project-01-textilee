// Target hamburger menu
// addEventListener on hamburger
// Display nav items when clicked
// Hide nav items when not clicked

const hamburger = document.querySelector(".fa-bars");
console.log(hamburger);
const listItems = document.querySelector(".burger-nav");
console.log(listItems);

hamburger.addEventListener("click", function(){
    console.log("You clicked it!");
        listItems.classList.toggle("burger-toggle");
    }
);




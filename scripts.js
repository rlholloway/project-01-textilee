// Create second nav menu and HIDE it
// Target hamburger menu icon
// Target second nav
// addEventListener on hamburger
// Display nav items when clicked
// Hide nav items when not clicked

const hamburger = document.querySelector(".fa-bars");

const listItems = document.querySelector(".burger-nav");

// Make event listener here
hamburger.addEventListener("click", function(){
        listItems.classList.toggle("burger-toggle");
    }
);
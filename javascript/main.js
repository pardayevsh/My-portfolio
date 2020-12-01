// -----------------------------------------------------------
//      # Navbar scrollbar background
// -----------------------------------------------------------
window.addEventListener("scroll", function () {
    let navScroll = document.getElementById("nav");
    navScroll.classList.toggle("fixed", window.scrollY > 50);
});

// -----------------------------------------------------------
//      # Back to-top button
// -----------------------------------------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

// -----------------------------------------------------------
//      # Counter up animation scroll 
// -----------------------------------------------------------
$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});

// -----------------------------------------------------------
//      # Navbar background 
// -----------------------------------------------------------
function navBack() {
    var nav = document.getElementById('nav').classList.toggle('change');
}
// accordion buttons for #service .client on smartphone
const toggle_title = document.querySelectorAll(".toggle_title");

toggle_title.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        this.parentElement.classList.toggle("open");
    });
});

// hamburger menu on smartphone

function toggleNav() {
    var hamburger = document.getElementById("hamburger");
    var header = document.getElementsByTagName("header");
    
    hamburger.addEventListener('click', function () {
        header[0].classList.toggle("nav_open");
    });
};
toggleNav();
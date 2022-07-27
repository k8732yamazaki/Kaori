// accordion buttons for #service .client on smartphone
const toggle_title = document.querySelectorAll(".toggle_title");

toggle_title.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        this.parentElement.classList.toggle("open");
    })
});

// hamburger menu on smartphone

function toggleNav() {
    const header = document.getElementsByTagName("header");
    const hamburger = document.getElementById("hamburger");
    const nav = header[0].querySelectorAll("nav");
    
    hamburger.addEventListener('click', function () {
        header[0].classList.toggle("nav_open");
        nav.forEach(function (hamburgerMenu) {
            hamburgerMenu.addEventListener('click', function () {
                header[0].classList.remove("nav_open");
            })
        })
    })
};
toggleNav();
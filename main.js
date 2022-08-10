// accordion buttons for #service .client on smartphone
const toggle_title = document.querySelectorAll(".toggle_title");

toggle_title.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        this.parentElement.classList.toggle("open");
    })
});

// hamburger menu on smartphone
const header = document.getElementsByTagName("header");

function toggleNav() {
    const nav = header[0].querySelectorAll("nav");
    const hamburger = document.getElementById("hamburger");
    
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

// anchor links smooth scroll
const anchorLinks = document.getElementById("index").querySelectorAll('a[href*="#"]');

anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        const headerHeight = header[0].offsetHeight;
        const totalScrollAmount = targetOffsetTop - headerHeight;
        
        window.scrollTo({
            top: totalScrollAmount,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    if (location.hash) {
      const headerHeight = header[0].clientHeight;
      setTimeout(() => {
        window.scrollBy(0, - headerHeight);
      },100)
    }
})
const toggle_title = document.querySelectorAll(".toggle_title");

toggle_title.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        const dd = this.nextElementSibling;
        dd.classList.toggle("open");
        const height = dd.querySelector("ul").clientHeight;
        console.log(height);
        this.nextElementSibling.style.paddingBottom = height + "px";
    })
})
const toggle_title = document.querySelectorAll(".toggle_title");

toggle_title.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle("open");
        // const height = this.nextElementSibling.clientHeight;
        // this.nextElementSibling.style.height = height + "px";
        // console.log(height);
    })
})
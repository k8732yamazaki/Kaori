const toggle_title = document.querySelectorAll(".toggle_title");

toggle_title.forEach(function (toggle_title) {    
    toggle_title.addEventListener('click', function () {
        this.parentElement.classList.toggle("open");
    })
})
const nav = document.querySelector("nav");
const button = document.querySelector("header button");

button.addEventListener("click", () => {
    nav.classList.toggle("open");
    checkHamburgerOpen();
});

function checkHamburgerOpen() {
    if (nav.classList.contains("open")) {
        button.innerHTML = "&#215;";
        button.style.width = "46px !important";
    } else {
        button.innerHTML = "&#9776;";
    }
}
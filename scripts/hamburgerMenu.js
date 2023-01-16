const nav = document.querySelector("nav");
const button = document.querySelector("header button");

button.addEventListener("click", () => {
    nav.classList.toggle("open");
});
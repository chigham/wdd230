const header = document.querySelector("header");
const headerTitle = document.querySelector("header h1");
const headerNavList = document.querySelectorAll("header nav ul li a");

const main = document.querySelector("main");
const mainTitle = document.querySelector("main h2");
const mainSectionHeadings = document.querySelectorAll("main section h3");
const mainSectionLinks = document.querySelectorAll("main section a, main section div");

const footer = document.querySelector("footer");
const footerText = document.querySelectorAll("footer p, footer span");

const darkModeToggler = document.querySelector(".dark-mode-toggler");

function darkModeToggleText() {
    if (darkModeToggler.innerHTML == "Dark Mode") {
        darkModeToggler.innerHTML = "Light Mode";
    } else if (darkModeToggler.innerHTML == "Light Mode") {
        darkModeToggler.innerHTML = "Dark Mode";
    }
};


// Massive toggle event handler
darkModeToggler.addEventListener("click", () => {
    header.classList.toggle("header-dark-mode")
    headerTitle.classList.toggle("header-title-dark-mode");
    headerNavList.forEach(anchor => anchor.classList.toggle("header-nav-list-dark-mode"));
    main.classList.toggle("main-dark-mode");
    mainTitle.classList.toggle("main-title-dark-mode");
    mainSectionHeadings.forEach(heading => heading.classList.toggle("main-section-headings-dark-mode"));
    mainSectionLinks.forEach(anchor => anchor.classList.toggle("main-section-links-dark-mode"));
    footer.classList.toggle("footer-dark-mode");
    footerText.forEach(text => text.classList.toggle("footer-text-dark-mode"));
    darkModeToggler.classList.toggle("dark-mode-toggler-dark-mode");
    darkModeToggleText();
});
// ==========================
// Smooth Scroll
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// Active Navbar Links
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href")
            ===
            "#" + current

        ) {

            link.classList.add("active");

        }

    });

});
        // 1. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'dark';

    if (currentTheme !== 'light') {
        targetTheme = 'light';
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
});
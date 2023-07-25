// function toggleMenu() {
//     const mobileMenu = document.getElementById("mobile-menu");
//     const isOpen = mobileMenu.classList.toggle("menu-open");
    
//     mobileMenu.style.top = isOpen ? "0em" : "-100vh";
// }

function toggleMenu() {
    const borderMenu = document.getElementById("menu-cta");
    const mobileMenu = document.getElementById("mobile-menu");
    const isOpen = mobileMenu.classList.contains("-top-full");

    if (isOpen) {
        borderMenu.classList.remove("border-b-2");
        mobileMenu.classList.remove("-top-full");
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("top-0");
        mobileMenu.classList.add("block");
    } else {
        mobileMenu.classList.remove("top-0");
        mobileMenu.classList.remove("block");
        borderMenu.classList.add("border-b-2");
        mobileMenu.classList.add("-top-full");
        mobileMenu.classList.add("hidden");
    }
}
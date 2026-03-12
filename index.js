const dropdowns = document.querySelectorAll('.header-dropdown-begin');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
        dropdown.textContent = dropdown.textContent.replace('∨', '∧');
    });
    dropdown.addEventListener("mouseleave", () => {
        dropdown.textContent = dropdown.textContent.replace('∧', '∨');
    });
});

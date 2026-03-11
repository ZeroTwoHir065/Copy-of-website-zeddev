const dropdowns = document.querySelectorAll('.header-dropdown-begin');

dropdowns.forEach((dropdown) => {
    const text = dropdown.textContent.replace('∨', '').replace('∧', '').trim();

    dropdown.addEventListener("mouseenter", () => {
        dropdown.innerHTML = text + " &#8743;";
    });
    dropdown.addEventListener("mouseleave", () => {
        dropdown.innerHTML = text + " &#8744;";
    });
});
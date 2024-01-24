const checkbox = document.getElementById("checkbox_toggle");
const menuItems = document.querySelectorAll(".float a");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        checkbox.checked = false; // Close the menu when a link is clicked
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
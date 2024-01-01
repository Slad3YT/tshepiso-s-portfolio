const checkbox = document.getElementById("checkbox_toggle");
const menuItems = document.querySelectorAll(".float a");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        checkbox.checked = false; // Close the menu when a link is clicked
    });
});

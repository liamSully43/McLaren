// === Toggle Burger Menu ===
const burger_menu_button = document.querySelector("#burger-menu");
const burder_menu_container = document.querySelector("#burger-menu-container");
burger_menu_button.onclick = function() {
    if(burder_menu_container.classList.contains("active")) {
        burder_menu_container.classList.remove("active");
    }
    else {
        burder_menu_container.classList.add("active");
    }
}
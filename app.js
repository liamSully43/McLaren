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

// === Track Scoll Position ===
const logo = document.querySelector("#logo");

const body = document.querySelector("body");
body.addEventListener("scroll", function(event) {
    const scroll = event.target.scrollTop;
    logo_position(scroll);
});

// === Adjust Logo Position ===
function logo_position(scroll) {
    const scroll_pos = scroll + 40 - 305; // scroll + margin-left - nav width 
    logo.style.setProperty("--scroll", `${scroll_pos}px`);
}
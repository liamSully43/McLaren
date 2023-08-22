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
const body = document.querySelector("body");
body.addEventListener("scroll", function(event) {
    const scroll = event.target.scrollTop;
    logo_position(scroll);
    image_positioning(scroll, 2100, 0); // how it started
    image_positioning(scroll, 4200, 1); // the first win
    image_positioning(scroll, 12000, 2); // current drivers
});

// === Adjust Logo Position ===
const logo = document.querySelector("#logo");
function logo_position(scroll) {
    const scroll_pos = scroll + 40 - 305; // scroll + margin-left - nav width 
    logo.style.setProperty("--scroll", `${scroll_pos}px`);
}

// === Adjust Image Positions ===
const sections = document.querySelectorAll(".parallax-images");
function image_positioning(scroll, start_point, section_index) {
    // calculate how much the images should parallax scroll
    const diff = scroll - start_point;
    const pos1 = diff * 0.2;
    const pos2 = diff * 0.01;

    // apply the parallax scroll to the images
    const imgs = sections[section_index].querySelectorAll("img");
    // translateX(0px)
    imgs[0].style.transform = `translateX(${0 - pos1}px)`;
    imgs[1].style.transform = `translateX(${0 - pos2}px)`;

    // only applies to 'current drivers' section
    if(imgs[2]) {
        imgs[2].style.transform = `translateX(${0 - pos1}px)`;
    }
}

// === Add Fade Animations ===
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // If the championship is visible
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
}, { rootMargin: "-15%" });

const elements = document.querySelectorAll(".fade-in");
elements.forEach(element => observer.observe(element));
//for(let element of elements) {
//    observer.observe(element);
//}
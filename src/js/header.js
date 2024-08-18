const MENU_BUTTON = document.querySelector(".HeaderMenuButton");
const MENU_LIST = document.querySelector(".HeaderMenuList");

let menuCount = 1;

MENU_BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    menuCount += 1;
    if (menuCount % 2 === 0) {
        MENU_LIST.classList.add("MenuIsVisible");
    } else {
        MENU_LIST.classList.remove("MenuIsVisible");
    }
});

MENU_LIST.addEventListener("click", (event) => {
    menuCount += 1;
    MENU_LIST.classList.remove("MenuIsVisible");
});
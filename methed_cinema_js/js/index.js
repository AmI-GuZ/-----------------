import slideMenu from "./menu.js";

slideMenu({
    openBtn: '.header__burger-btn',  /*ключ: 'значение' */
    menu: '.navigation',
    classActiveMenu: 'navigation_active',
    closeTrigger: '.navigation__link, .navigation__close'
});


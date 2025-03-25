const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".nav-logo use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightMenuOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo";
};
const lightMenuOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo-light";
};

const openMenu = (event) => {
  // функция открывания меню
  menu.classList.add("is-open"); // вешает класс is-open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; // запрещаем прокрутку сайта под меню
  lightMenuOn();
};
const closeMenu = (event) => {
  // функция закрывания меню
  menu.classList.remove("is-open"); // уберает класс is-open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; // возвращает прокрутку сайта под меню
  lightMenuOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightMenuOn() : lightMenuOff(); // ? - заменяет if (если) : - заменяет else (иначе)
});

mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

/*
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  if (menu.classList.contains("is-open")) {
    // Если меню открыто...
    closeMenu(); // закрыть меню
  } else {
    // иначе...
    openMenu(); // открыть меню
  }
});
*/

// Чтобы посмотреть функцию, нужно навести мышь на функцию и зажать ctrl. Чтобы перейти к функции нужно кликнуть по функции с зажатым ctrl

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

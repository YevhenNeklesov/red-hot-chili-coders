import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper.project-swiper', {
  // Основні параметри
  cssMode: false,
  spaceBetween: 30,
  slidesPerView: 'auto',
  freeMode: true,
  effect: 'cube',

  cubeEffect: {
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    slideShadows: true,
  },


  // Навігаційні кнопки
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  mousewheel: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    tabKeys: true,
    pageUpDown: true,
  },
  touch: {
    enabled: true,
  },
});
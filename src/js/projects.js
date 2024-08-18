
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
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
  },
  touch: {
    enabled: true,
  },
});

swiper.on('slideChange', () => {
  if (swiper.isBeginning) {
    document.querySelector('.swiper-prev').classList.add('swiper-button-disabled');
  } else {
    document.querySelector('.swiper-prev').classList.remove('swiper-button-disabled');
  }

  if (swiper.isEnd) {
    document.querySelector('.swiper-next').classList.add('swiper-button-disabled');
  } else {
    document.querySelector('.swiper-next').classList.remove('swiper-button-disabled');
  }
});
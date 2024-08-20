import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const prevButtonEl = document.querySelector('.projects-button-prev-js');
const nextButtonEl = document.querySelector('.projects-button-next-js');
Swiper.use([Navigation, Keyboard]);
new Swiper('.projects-swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 280,
  navigation: {
    nextEl: nextButtonEl,
    prevEl: prevButtonEl,
  },
});
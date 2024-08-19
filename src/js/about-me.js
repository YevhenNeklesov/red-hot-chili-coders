import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


const options = {
    openOnInit: [0],
};
new Accordion('.list-about-me', options);


let parameters = {
    modules: [Navigation],
    slidesPerView: 1,
    lazy: true,
    loop: true,
    centeredSlides: false,
    direction: 'horizontal',
    spaceBetween: 0,
    initialSlide: 1,
    navigation: {
        nextEl: '.about-me-swiper-btn-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        },
        1310: {
            slidesPerView: 'auto',
        },
    },
};

new Swiper('div.swiper.about-me-swiper-container', parameters);

new Accordion('.accordion-container', {
    duration: 600,
    showMultiple: false,
    openOnInit: [0],
});


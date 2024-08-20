import axios from 'axios';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

async function getReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
const swiperButtonPrev = document.querySelector('.swiper-button-prev');
const swiperButtonNext = document.querySelector('.swiper-button-next');
const swiperWrapper = document.querySelector('.reviews-list');
const stub = document.querySelector('.stub')

function createReviews(cardReviews) {
  return cardReviews
    .map(
      ({ _id, author, avatar_url, review }) => `
      <li class="reviews-item swiper-slide">
        <img class="reviews-img" src="${avatar_url}" alt="foto" />
        <h3 class="reviews-subtitle">${author}</h3>
        <p class="reviews-text">${review}</p>
      </li>`
    )
    .join('');
}


async function initReviews() {
  try {
    const data = await getReviews();
      console.log(data);
    swiperWrapper.insertAdjacentHTML('beforeend', createReviews(data));
  } catch (err) {

    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there was an error fetching the reviews. Please try again',
    });
    stub.classList.remove('visually-hidden')
  }
}




  new Swiper('.reviews-swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: '.reviews-btn-next',
      prevEl: '.reviews-btn-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        // spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        // spaceBetween: 16,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // mousewheel: true,
    mousewheel: {
      enabled: true,
      invert: true,
    },
  });

initReviews();

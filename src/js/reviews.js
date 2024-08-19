import axios from 'axios';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperWrapper = document.querySelector('.swiper-wrapper');

async function getReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении отзывов:', error);
    return [];
  }
}
async function initReviews() {
  const data = await getReviews();
  if (data.length === 0) {
    swiperWrapper.innerHTML = '<p>Not found</p>';
  } else {
    createReviews(data);
    initializeSwiper();
  }
}
function createReviews(cardReviews) {
  //   const swiperWrapper = document.querySelector('.swiper-wrapper');
  const markup = cardReviews
    .map(
      ({ _id, author, avatar_url, review }) => `
      <div class="reviews-item swiper-slide" id="${_id}">
        <img class="reviews-img" src="${avatar_url}" alt="foto" />
        <h3 class="reviews-subtitle">${author}</h3>
        <p class="reviews-text">${review}</p>
      </div>`
    )
    .join('');
  swiperWrapper.insertAdjacentHTML('beforeend', markup);
}

function initializeSwiper() {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
  });
}

initReviews();

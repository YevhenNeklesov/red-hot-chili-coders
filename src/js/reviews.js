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
    console.error('Error:', error);
    return;
  }
}
const swiper = document.querySelector('.swiper');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const noData = document.querySelector('.no-data');
const swiperButtonPrev = document.querySelector('.swiper-button-prev');
const swiperButtonNext = document.querySelector('.swiper-button-next');

async function initReviews() {
  try {
    const data = await getReviews();
    console.log(data);

    if (data.length === 0) {
      noData.style.display = 'block';
      //   swiperWrapper.style.display = 'none';
      swiperButtonPrev.style.display = 'none';
      swiperButtonNext.style.display = 'none';
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no reviews matching your search query. Please try again',
      });
    } else {
      noData.style.display = 'none';
      createReviews(data);
      initializeSwiper();
    }
  } catch (err) {
    noData.style.display = 'block';

    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there was an error fetching the reviews. Please try again',
    });
  }
}

function createReviews(cardReviews) {
  //   const swiperWrapper = document.querySelector('.swiper-wrapper');
  const markup = cardReviews
    .map(
      ({ _id, author, avatar_url, review }) => `
      <li class="reviews-item swiper-slide" id="${_id}">
        <img class="reviews-img" src="${avatar_url}" alt="foto" />
        <h3 class="reviews-subtitle">${author}</h3>
        <p class="reviews-text">${review}</p>
      </li>`
    )
    .join('');
  swiperWrapper.insertAdjacentHTML('beforeend', markup);
}

function initializeSwiper() {
  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3,
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

// function getReviews() {
//   return axios
//     .get('https://portfolio-js.b.goit.study/api/reviews')
//     .then(({ data }) => data);
// }

// // const wrapperList = document.querySelector('.swiper-wrapper');
// const swiperWrapper = document.querySelector('.swiper-wrapper');
// // const spanList = document.querySelector('.swiper-container');
// const noData = document.querySelector('.no-data');
// const button = document.querySelector('.swiper-btn');

// async function initReviews() {
//   try {
//     const data = await getReviews();

//     if (data.length === 0) {
//       //   noData.style.display = 'block';
//       //   button.style.display = 'none';
//       iziToast.error({
//         position: 'topRight',
//         message:
//           'Sorry, there are no reviews matching your search query. Please try again',
//       });
//     } else {
//       noData.style.display = 'none';

//       createReviews(data);

//       initializeSwiper();
//     }
//   } catch (err) {
//     noData.style.display = 'block';
//     iziToast.error({
//       position: 'topRight',
//       message:
//         'Sorry, there are no reviews matching your search query. Please try again',
//     });
//   }
// }
// function createReviews(cardReviews) {
//   const swiperWrapper = document.querySelector('.swiper-wrapper');
//   const markup = cardReviews
//     .map(
//       ({ _id, author, avatar_url, review }) => `
//       <div class="reviews-item swiper-slide" id="${_id}">
//         <img class="reviews-img" src="${avatar_url}" alt="foto" />
//         <h3 class="reviews-subtitle">${author}</h3>
//         <p class="reviews-text">${review}</p>
//       </div>`
//     )
//     .join('');
//   swiperWrapper.insertAdjacentHTML('beforeend', markup);
// }
// // console.log(createReviews(cardReviews));
// function initializeSwiper() {
//   new Swiper('.swiper', {
//     slidesPerView: 1,
//     spaceBetween: 16,
//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//       },
//       1440: {
//         slidesPerView: 5,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     mousewheel: true,
//   });
// }

// initReviews();

// --------------------------
// function getReviews() {
//   return axios
//     .get('https://portfolio-js.b.goit.study/api/reviews')
//     .then(({ data }) => data);
// }

// getReviews().then(data => createReviews(data));

// const swiperWrapper = document.querySelector('.swiper-wrapper');
// function createReviews(cardReviews) {
//   const swiperWrapper = document.querySelector('.swiper-wrapper');
//   const markup = cardReviews
//     .map(
//       ({
//         _id,
//         author,
//         avatar_url,
//         review,
//       }) => `<li class="reviews-item swiper-slide" id=${_id}>
//             <img class="reviews-img" src="${avatar_url}" alt="foto" />
//             <h3 class="reviews-subtitle">${author}</h3>
//          <p class="reviews-text">${review}</p>
//           </li>`
//     )
//     .join('');
//   swiperWrapper.insertAdjacentHTML('beforeend', markup);
// }

// getReviews().then(data => {
//   if (data.length === 0) {
//     swiperWrapper.innerHTML = '<span>Not found</span>';
//     iziToast.error({
//       position: 'topRight',
//       message:
//         'Sorry, there are no reviews matching your search query. Please try again',
//     });
//   } else {
//     createReviews(data);
//     const swiper = new Swiper('.swiper', {
//       slidesPerView: 1,
//       spaceBetween: 16,
//       breakpoints: {
//         768: {
//           slidesPerView: 3,
//         },
//         1440: {
//           slidesPerView: 5,
//         },
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//       },
//       mousewheel: true,
//     });
//   }
// });

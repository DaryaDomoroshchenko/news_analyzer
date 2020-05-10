import './about.css';
import Swiper from '../../../node_modules/swiper/js/swiper';

var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  freeMode: true,
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 1440px
    1440: {
      spaceBetween: 16,
      slidesPerGroup: 2
    },
    // when window width is >= 768px
    768: {
      spaceBetween: 8,
      slidesPerGroup: 1
    },
    // when window width is >= 320px
    320: {
      spaceBetween: 8,
      slidesPerGroup: 1
    }
  }
});

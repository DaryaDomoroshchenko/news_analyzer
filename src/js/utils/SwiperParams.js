export default class SwiperParams {

  static getSwiperContainer() {
    return '.swiper-container';
  }

  static getSwiperParams() {
    return {
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
        1440: {
          spaceBetween: 16,
          slidesPerGroup: 2
        },
        768: {
          spaceBetween: 8,
          slidesPerGroup: 1
        },
        320: {
          spaceBetween: 8,
          slidesPerGroup: 1
        }
      }
    }
  }
}

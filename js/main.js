var hotelSwiper = new Swiper('.hotel-slider', {
  loop: true,
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
});
var reviewSwiper = new Swiper('.reviews-slider', {
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
})
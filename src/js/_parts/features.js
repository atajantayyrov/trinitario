const rsFeaturesSwiper = new Swiper('#rsFeatures', {
    slidesPerView: 1,
    spaceBetween: 15,
    mousewheel: {
        forceToAxis: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 3
        }
    }
})

const fpCatalogSwiper = new Swiper('#fpCatalog', {
    slidesPerView: 'auto',
    init: false,
    freeMode: true,
    // spaceBetween: 10,
    mousewheel: {
        forceToAxis: true,
    },
    breakpoints: {
        991: {
            // init: false
            // spaceBetween: 40
        }
    }
})
function swiperMode() {
    if(window.screen.width < 992) {
        fpCatalogSwiper.init();
    }
}
window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
    if(window.screen.width > 991) {
        fpCatalogSwiper.destroy();
    }
});

const rsGallerySwiper = new Swiper('#rsGallery', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    centeredSlides: 'true',
    autoplay: {
        delay: 1,
        disableOnInteraction: true
    },
    speed: 8000,
    mousewheel: {
        forceToAxis: true,
    },
    breakpoints: {
        1199: {
            spaceBetween: 88
        },
        767: {
            spaceBetween: 40
        }
    }
})
let rsGallery = document.getElementById('rsGallery');
if (rsGallery) {
    rsGallery.addEventListener('mouseenter', function () {
        rsGallerySwiper.autoplay.stop();
    });
    rsGallery.addEventListener('mouseleave', function () {
        rsGallerySwiper.autoplay.start();
    });
}

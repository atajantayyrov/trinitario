const rsGallery = new Swiper('#rsGallery', {
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
document.getElementById('rsGallery').addEventListener('mouseenter',function (){
    rsGallery.autoplay.stop();
});
document.getElementById('rsGallery').addEventListener('mouseleave',function (){
    rsGallery.autoplay.start();
});

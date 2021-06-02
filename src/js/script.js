@@include('_parts/header.js');
@@include('_parts/slider.js');
@@include('_parts/news.js');

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

let rsMenuBars = document.getElementById('rsMenuBars');
let rsMenu = document.getElementById('rsMenu');
let rsMenuSearch = document.getElementById('rsMenuSearch');
let rsMenuSearchToggler = document.getElementById('rsMenuSearchToggler');
rsMenuBars.addEventListener('click', function () {
    rsMenu.classList.add('active');
});
rsMenuClose.addEventListener('click', function () {
    rsMenu.classList.remove('active');
});
rsMenuSearchToggler.addEventListener('click', function () {
    rsMenuSearch.classList.toggle('active');
});
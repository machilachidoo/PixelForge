function acceptCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';

        localStorage.setItem('cookiesAccepted', 'true');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }
});

function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem('pixelForgeCart')) || [];
    cart.push({ name, price, img });
    localStorage.setItem('pixelForgeCart', JSON.stringify(cart));
}

function playVideo(card) {
    const video = card.querySelector('.preview-video');
    if (video) {
        video.play();
    }
}

function pauseVideo(card) {
    const video = card.querySelector('.preview-video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}


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
document.getElementById('mock-form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('mock-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';

    setTimeout(function() {
        document.getElementById('mock-form').reset();
        document.getElementById('mock-form').style.display = 'flex';
        document.getElementById('success-message').style.display = 'none';
    }, 4000);
});

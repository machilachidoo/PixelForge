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

function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('pixelForgeCart')) || [];

    const product = {
        name: name,
        price: price,
        img: image
    };

    cart.push(product);

    localStorage.setItem('pixelForgeCart', JSON.stringify(cart));

    alert(name + " wurde hinzugefügt!");
}


let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} đã được thêm vào giỏ hàng!`);
    updateCartIcon();
}
function showDetails(productName, productPrice) {
    alert(`Sản phẩm: ${productName}\nGiá: ${productPrice}`);
}

function updateCartIcon() {
    const cartIcon = document.getElementById('cart-count');
    cartIcon.textContent = cart.length;
}


document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    const detailButtons = document.querySelectorAll('.details-button');

    buyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product');
            const productName = productCard.querySelector('.product-name').textContent.trim();
            const productPrice = productCard.querySelector('.product-price').textContent.trim();
            addToCart(productName, productPrice);
        });
    });

    detailButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product');
            const productName = productCard.querySelector('.product-name').textContent.trim();
            const productPrice = productCard.querySelector('.product-price').textContent.trim();
            showDetails(productName, productPrice);
        });
    });
});

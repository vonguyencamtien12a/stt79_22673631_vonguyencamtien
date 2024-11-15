
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function () {
        const productElement = this.closest('.product');
        const productName = productElement.querySelector('.product-name').innerText;
        const productPrice = productElement.querySelector('.product-price').innerText;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];


        cart.push({ name: productName, price: productPrice });

     
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`Đã thêm ${productName} vào giỏ hàng!`);
    });
});

const cartCount = document.getElementById('cart-count');
if (cartCount) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
}
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalAmount = 0;


cart.forEach(item => {
    const price = parseInt(item.price.replace(/[.,₫]/g, ''), 10);
    totalAmount += price;
});
document.getElementById('cart-count').textContent = cart.length;
document.getElementById('cart-total').textContent = totalAmount.toLocaleString() + ' đ';
document.getElementById('cart-total-final').textContent = totalAmount.toLocaleString() + ' đ';

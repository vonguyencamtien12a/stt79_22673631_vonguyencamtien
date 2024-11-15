document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        const name = document.querySelector('input[placeholder="Họ và tên"]').value.trim();
        const phone = document.querySelector('input[placeholder="Số điện thoại"]').value.trim();
        const carModel = document.querySelector('select').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        if (!name || !phone || carModel === "- Chọn dòng xe -") {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(phone)) {
            alert('Vui lòng nhập số điện thoại hợp lệ (10-11 chữ số)!');
            return;
        }
        alert(`Yêu cầu của bạn đã được gửi!\nHọ tên: ${name}\nSố điện thoại: ${phone}\nDòng xe: ${carModel}\nHình thức thanh toán: ${paymentMethod === 'tragop' ? 'Trả góp' : 'Trả thẳng'}`);

        window.location.href = 'confirmation.html';
    });
});

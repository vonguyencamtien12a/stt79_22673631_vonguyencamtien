document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const phone = document.getElementById('phone').value.trim();
    const terms = document.getElementById('terms').checked;

    let errors = [];


    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.push('Email không hợp lệ.');
    }

    
    if (!password || password.length < 6) {
        errors.push('Mật khẩu phải ít nhất 6 ký tự.');
    }
    if (password !== confirmPassword) {
        errors.push('Mật khẩu và nhập lại mật khẩu không khớp.');
    }

    if (city === 'Vui lòng chọn thành phố của bạn') {
        errors.push('Vui lòng chọn tỉnh/thành phố.');
    }
    if (district === 'Vui lòng quận/huyện của bạn') {
        errors.push('Vui lòng chọn quận/huyện.');
    }

    if (!phone || !/^\d{9,11}$/.test(phone)) {
        errors.push('Số điện thoại phải từ 9-11 số.');
    }
    if (!terms) {
        errors.push('Bạn phải đồng ý với Điều kiện - Điều khoản.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Đăng ký thành công!');
        
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    const moveSlide = (direction) => {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    };


    setInterval(() => moveSlide(1), 5000);


    const skipButton = document.querySelector('.skip-btn');
    skipButton.addEventListener('click', () => moveSlide(1));
});
document.querySelector('.search input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const keyword = event.target.value.trim();
        if (keyword) {
            window.location.href = `search.html?query=${encodeURIComponent(keyword)}`;
        } else {
            alert('Vui lòng nhập từ khóa để tìm kiếm!');
        }
    }
});
document.querySelectorAll('.search a').forEach((link) => {
    link.addEventListener('click', (event) => {
        const action = link.textContent.trim().toLowerCase();
        if (action === 'đăng nhập') {
            window.location.href = 'login.html';
        } else if (action === 'đăng ký') {
            window.location.href = 'signup.html';
        }
    });
});



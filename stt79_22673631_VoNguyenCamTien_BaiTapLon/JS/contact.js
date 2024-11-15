const scrollUpButton = document.querySelector('.scroll-up');
scrollUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(event.target.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Dark/Light Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    .dark-mode a {
        color: #ff5722;
    }
`;
document.head.appendChild(style);

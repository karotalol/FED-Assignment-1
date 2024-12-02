document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Start your fitness journey today!');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        if (!href.startsWith('http')) {
            window.location.href = href;
        }
    });
});


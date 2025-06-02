document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('.ham-menu');
    const hamMenu = document.querySelector('.hamburger-menu');

    hamButton.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        console.log(hamMenu.classList.contains('active'))
    });
});
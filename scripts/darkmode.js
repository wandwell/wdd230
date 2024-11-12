const darkButton = document.querySelector('#dark');
const body = document.querySelector('body');
const main = document.querySelector('main');

darkButton.addEventListener('click', () => {
    main.classList.toggle('dark');
    body.classList.toggle('dark');
});
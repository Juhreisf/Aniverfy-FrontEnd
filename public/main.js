import login from './Templates/login.js';
import register from './Templates/register.js';

const main = document.querySelector('#root');

const init = () => {
    main.innerHTML = '';
    switch (window.location.hash) {
        case '#/register':
            main.appendChild(register());
            break;
        case '#/login':
        case '#/':
        default:
            main.appendChild(login());
    }
};

window.addEventListener('load', () => {
    window.addEventListener('hashchange', init);
    init();
});
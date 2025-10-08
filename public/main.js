import loginPage from './Templates/login.js';
import registerPage from './Templates/register.js';
import dashboardPage from './Templates/dashboard.js';

const main = document.querySelector('#root');

const init = () => {
    main.innerHTML = '';
    switch (window.location.hash) {
        case '#/register':
            main.appendChild(registerPage());
            break;
        case '#/login':
            main.appendChild(loginPage());
            break;
        case '#/dashboard':
            main.appendChild(dashboardPage());
            break;
        default:
            window.location.hash = '#/login'; // ou '#/login', se quiser
    }
};

window.addEventListener('load', () => {
    window.addEventListener('hashchange', init);
    init();
});
import 'regenerator-runtime'; /* for async await transpile */

// import CSS
import '../styles/main.css';
import '../styles/responsive.css';

// import JS
import App from './views/app';

// import components
import './components/navbar';
import './components/jumbotron';
import './components/footer';

const app = new App({
    button: document.querySelector('#icon-mobile'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#main-content'),
});

// hash change
window.addEventListener('hashchange', () => {
    app.renderPage();
});

// load
window.addEventListener('load', () => {
    app.renderPage();
});

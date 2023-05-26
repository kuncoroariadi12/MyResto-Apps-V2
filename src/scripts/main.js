import data from '../DATA.json';

const main = () => {
    const hamburger = document.querySelector('#icon-mobile');
    const drawer = document.querySelector('#drawer');
    const jumbotron = document.querySelector('.jumbotron-container');
    const main = document.querySelector('main');

    // open hamburger mobile navbar
    hamburger.addEventListener('click', function (event) {
        drawer.classList.toggle('open');
        event.stopPropagation();
    });

    // close navbar mobile
    jumbotron.addEventListener('click', function (event) {
        drawer.classList.remove('open');
        event.stopPropagation();
    });

    main.addEventListener('click', function (event) {
        drawer.classList.remove('open');
        event.stopPropagation();
    });

    // add DATAJson to Card
    const viewAllResto = (viewResto) => {
        return `
        <div class="card">
            <img class="card-img" src="${viewResto.pictureId}" alt="${viewResto.name}" />
            <div class="card-city">${viewResto.city}</div>
            <div class="card-content">
                <h3 class="card-title"><a href="#">${viewResto.name}</a></h3>
                <p class="card-rating">
                    Rating :
                    <span class="rating-value" aria-label="rating ${viewResto.rating}">${viewResto.rating} ⭐</span>
                </p>
                <div class="card-desc">${viewResto.description}</div>
            </div>
        </div>
        `;
    };

    const restaurant = data['restaurants'];
    let cardList = '';

    restaurant.forEach(viewResto => {
        cardList += viewAllResto(viewResto);
    });

    const cardData = document.querySelector('#card-data');
    cardData.innerHTML = cardList;
};

export default main;
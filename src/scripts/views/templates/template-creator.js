import CONFIG from '../../globals/config';

const createTemplateResto = (create) => `
    <div class="card">
        <img class="lazyload card-img" src="./placeholder.svg" height="200px" width="100%" data-src="${CONFIG.BASE_IMAGE_URL}small/${create.pictureId}" alt="${create.name}" title="${create.name}">
        <div class="card-city">${create.city}</div>
        <div class="card-content">
            <h3 class="card-title"><a tabindex="0" href="${`/#/detail/${create.id}`}">${create.name}</a></h3>
            <p class="card-rating">
                Rating : <span class="fa fa-star"> </span>
                <span class="rating-value" aria-label="rating ${create.rating}">${create.rating}</span>
            </p>
            <div class="card-desc">${create.description}</div>
        </div>
    </div>
`;

const loader = () => `
    <div class="loader"></div>
`;

const createSkeletonTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <div class="card">
            <img class="card-img" src="./placeholder.svg" height="200px" width="100%" alt="skeleton">
            <div class="card-content">
                <h2 class="skeleton">Lorem ipsum dolor sit.</h2>
                <p class="skeleton"></p>
                <div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</div>
            </div>
        </div>
        `;
    }
    return template;
};

export {
    createTemplateResto,
    loader,
    createSkeletonTemplate,
};

import CONFIG from '../../globals/config';

const createRestaurantDetail = (detail) => `
  <h2 class="detail__title">${detail.name}</h2>
  <img class="detail__poster" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId
}" alt="${detail.name}" />
  <div class="detail__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${detail.address}, ${detail.city}}</p>
    <h4>Release Date</h4>
    <p>${detail.release_date}</p>
    <h4>Duration</h4>
    <p>${detail.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${detail.rating}</p>
  </div>
  <div class="detail__desc">
    <h3>Description</h3>
    <p>${detail.description}</p>
  </div>
  <div class="detail__desc">
    <li>${detail.categories.map((category) => `
      <span class="category">${category.name}</span>
      `).join('')}
    </li>
  </div>
  <div class="like" id="likeButtonContainer"></div>
`;

const createRestaurantCard = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${resto.name}" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="#/resto/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true">💗</i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true">💓</i>
  </button>
`;

export {
  createRestaurantCard, createRestaurantDetail, createLikeButtonTemplate, createLikedButtonTemplate,
};

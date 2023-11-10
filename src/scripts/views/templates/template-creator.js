import CONFIG from '../../globals/config';

const createRestaurantDetail = (detail) => `
  <h2 class="detail__title">${detail.name}</h2>
    <img class="detail__poster" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" crossorigin="anonymous" alt="${detail.name}" />
    <div class="detail__info">
      <h3>Information</h3>
      <h4>Address</h4>
      <p>${detail.address}, ${detail.city}}</p>
      <h4>Release Date</h4>
      <p>${detail.release_date}</p>
      <h4>Rating</h4>
      <p>${detail.rating}</p>
    </div>
    <div class="detail__desc">
      <h3>Description</h3>
      <p>${detail.description}</p>
    </div>
    <div class="detail__desc">
      <h3>Category</h3>
      <li>${detail.categories.map((category) => `
        <span class="category">${category.name}</span>
      `).join('')}
      </li>
      </div>
      <div class="detail__desc">
        <h3>Detail Menu</h3>
        <li>${detail.menus.foods.map((food) => `
          <span class="menu">${food.name}</span>
        `).join('')}
        </li>
        <li>${detail.menus.drinks.map((drink) => `
          <span class="menu">${drink.name}</span>
        `).join('')}
        </li>
      </div>
      <div class="detail__desc">
        <h3>Customer Review</h3>
        ${detail.customerReviews.map((customer) => `
          <div class="detail__review">
            <div class="review__header">
              <p class="review__name">${customer.name}</p>
              <p class="review__date">${customer.date}</p>
            </div>
            <div class="review__body">
              ${customer.review}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
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
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantCard, createRestaurantDetail, createLikeButtonTemplate, createLikedButtonTemplate,
};

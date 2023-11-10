import FavRestoIdb from '../data/favrestaurant-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      const restaurant = await FavRestoIdb.getResto(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);

      throw new Error(err);
    }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick fav the selected resto
      await FavRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick unfav the selected resto
      await FavRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

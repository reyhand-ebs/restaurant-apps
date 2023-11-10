import FavResto from '../../data/favrestaurant-idb';
import { createRestaurantCard } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="title-container">Favorited Resto</h2>
        <section id="fav-resto"></section>
      </div>
    `;
  },

  async afterRender() {
    // get fav resto
    const data = await FavResto.getAllResto();
    const favRestoContainer = document.querySelector('#fav-resto');

    // if data empty
    if (data.length === 0) {
      favRestoContainer.innerHTML = `
        Empty favorite Resto. Put one, by clicking heart button in the detail page.
      `;
    }

    // display all fav resto
    data.forEach((favresto) => {
      favRestoContainer.innerHTML += createRestaurantCard(favresto);
    });
  },
};

export default Favorite;

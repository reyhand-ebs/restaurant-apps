import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantCard } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="title-container">Explore Restaurant</h2>
        <div id="resto" class="resto">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const data = await RestaurantSource.getRestaurantList();
    const dataContainer = document.querySelector('#resto');
    data.restaurants.forEach((resto) => {
      dataContainer.innerHTML += createRestaurantCard(resto);
    });
  },
};

export default Home;

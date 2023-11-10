import API_ENDPOINT from '../globals/api-endpoint';

// Create a function to retrieve restaurant data from the API
async function fetchRestaurantData(url) {
  // Perform a fetch request to the given URL
  const response = await fetch(url);
  // Convert the response to a JSON object
  return response.json();
}

// Create an object with statistical methods to operate on the data source
const RestaurantSource = {
  // Get a list of restaurants
  async getRestaurantList() {
    return fetchRestaurantData(API_ENDPOINT.LIST);
  },

  // Get restaurant details by id
  async getRestaurantDetail(id) {
    return fetchRestaurantData(API_ENDPOINT.DETAIL(id));
  },
};

// Export object
export default RestaurantSource;

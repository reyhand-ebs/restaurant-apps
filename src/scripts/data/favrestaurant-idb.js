// Import the idb library
import { openDB } from 'idb';
// Import the config object
import CONFIG from '../globals/config';

// Destructure the config properties
const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

// Open the database and create the object store if needed
const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

// Define an object with async methods for database operations
const FavRestoIdb = {
  // Get a single restaurant by id
  async getResto(id) {
    if(!id) {
      return;
    }
    // Wait for the database to open
    const db = await dbPromise;
    // Return the restaurant from the object store
    return db.get(OBJECT_STORE_NAME, id);
  },

  // Get all restaurants
  async getAllResto() {
    // Wait for the database to open
    const db = await dbPromise;
    // Return all restaurants from the object store
    return db.getAll(OBJECT_STORE_NAME);
  },

  // Add or update a restaurant
  async putResto(resto) {
    if(!resto.hasOwnProperty('id')) {
      return;
    }
    // Wait for the database to open
    const db = await dbPromise;
    // Add or update the restaurant in the object store
    return db.put(OBJECT_STORE_NAME, resto);
  },

  // Delete a restaurant by id
  async deleteResto(id) {
    // Wait for the database to open
    const db = await dbPromise;
    // Delete the restaurant from the object store
    return db.delete(OBJECT_STORE_NAME, id);
  },
};

// Export the object
export default FavRestoIdb;

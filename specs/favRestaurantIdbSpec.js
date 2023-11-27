import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';
import FavRestoIdb from '../src/scripts/data/favrestaurant-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavRestoIdb);
});

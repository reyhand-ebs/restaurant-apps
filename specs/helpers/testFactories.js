import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavRestoIdb from '../../src/scripts/data/resto-idb';

const createLikeButtonInitiatorWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButton'),
    favRestoIdb: FavRestoIdb,
    data: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatorWithResto };

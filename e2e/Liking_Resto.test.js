const assert = require('assert');

Feature('Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'Empty favorite Resto. Put one, by clicking heart button in the detail page.';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#resto');
  I.see(emptyFavoriteRestoText, '#resto');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#resto');

  // URL: /
  I.amOnPage('/');
  I.seeElement('.resto-item__content h3 a');
  const firstRestoCard = locate('.resto-item__content h3 a').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedCardTitle = await I.grabTextFrom('.resto-item__content h3 a');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.resto-item');
  const likedCardTitle = await I.grabTextFrom('.resto-item__header');
  I.click(likedCardTitle);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-resto');
  I.dontSeeElement('.resto-item');
  I.dontSeeElement('.resto-item__header');
});

/* eslint-disable no-undef */
Feature('Testing Like Feature');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking and Unliking', async ({ I }) => {
  // dihalaman Home menemukan item dan menkliknya
  I.seeElement('#content');
  I.seeElement('.cards_item');
  I.seeElement('.card');
  I.seeElement('.card_title');
  I.seeElement('.card_title a');

  const firstCard = locate('.card_title a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  console.log('Detail Restaurant Page', firstCardTitle);

  I.click('.card_title a');

  // masuk ke halaman Detail restoran dan melihat tombol like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // beralih ke halaman Favorit dan melihat restoran yang disukai
  I.amOnPage('/#/like');
  I.seeElement('.card');
  I.seeElement('.card_title a');

  // klik lagi untuk batal menyukai
  I.click('.card_title a');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // beralih lagi ke halaman Favorit dan tidak melihat restoran yang disukai
  I.amOnPage('/#/like');
  I.dontSee('.card');

  console.log('Liking and Unliking Test Succes');
});

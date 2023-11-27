const assert = require("assert");

Feature("Favorite Resto");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

const emptyFavoriteRestoText =
  "Empty favorite Resto. Put one, by clicking heart button in the detail page.";

Scenario("showing empty favorite restaurant", ({ I }) => {
  I.seeElement("#resto");
  I.see(emptyFavoriteRestoText, "#resto");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see(emptyFavoriteRestoText, "#resto");

  // URL: /
  I.amOnPage("/");
  I.seeElement(".resto-item");
  const firstRestoCard = locate(".resto-item__content h3 a").first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.seeElement("#likeButton");
  I.click("#likeButton");

  // URL: /#/favorite
  I.amOnPage("/#/favorite");
  I.seeElement(".resto-item__content");
  const likedCardTitle = await I.grabTextFrom(".resto-item__content h3 a");
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});

Scenario("unliking one restaurant", async ({ I }) => {
    I.see(emptyFavoriteRestoText, "#resto");

  // URL: /
  I.amOnPage("/");
  I.seeElement(".resto-item");
  const firstRestoCard = locate(".resto-item__content h3 a").first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.seeElement("#likeButton");
  I.click("#likeButton");

  // URL: /#/favorite
  I.amOnPage("/#/favorite");
  I.seeElement(".resto-item__content");

  I.seeElement(".resto-item");
  const likedCardTitle = await I.grabTextFrom(".resto-item__content h3");
  I.click(likedCardTitle);

  // URL: /resto/:id
  I.seeElement("#likeButton");
  I.click("#likeButton");

  // URL: /#/favorite
  I.amOnPage("/#/favorite");
  I.seeElement("#resto");
  I.dontSeeElement(".resto-item__content");
  I.dontSeeElement(".resto-item__content h3 a");
});

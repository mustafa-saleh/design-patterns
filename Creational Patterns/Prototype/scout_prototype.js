const Shopper = require("./shopper");

const scout = new Shopper();

scout.addItemToList("backbag");
scout.addItemToList("Utils");
scout.addItemToList("Map");
scout.addItemToList("Knife");

module.exports = scout;

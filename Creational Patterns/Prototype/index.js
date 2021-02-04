const { prototype } = require("../Singleton/store");
const scout_prototype = require("./scout_prototype");

console.log("Starting Prototype ...");

const alex = scout_prototype.clone();
alex._name = "Alex";
alex.addItemToList("Compass");

const noona = scout_prototype.clone();
noona._name = "Noona";
noona.addItemToList("Tent");

console.log(`${alex._name}: ${alex.shoppingList}`);
console.log(`${noona._name}: ${noona.shoppingList}`);

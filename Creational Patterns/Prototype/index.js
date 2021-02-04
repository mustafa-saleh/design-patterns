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

// Notes
// Prototype is used when multiple instances are expected to share same values, instead of repeating code over and over again, create one instance that acts as a prototype and hold common values, the object should have clone method that initialize newly created instances with prototype methods and values.

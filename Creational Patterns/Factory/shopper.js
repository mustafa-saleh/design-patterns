const Person = require("./person");

class Shopper extends Person {
  constructor(name, money) {
    super(name, money, "shopper");
  }
}
module.exports = Shopper;

const logger = require("./logger");

// const logger = new Logger().getInstance();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New Store, ${name} has ${inventory.length} items in Stock`);
  }
}

module.exports = Store;

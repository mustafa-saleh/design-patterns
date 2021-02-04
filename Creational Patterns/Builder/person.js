class Person {
  constructor(builder) {
    this.name = builder.name;
    this.isManager = builder.isManager;
    this.isEmplyee = builder.isEmplyee;
    this.money = builder.money || 0;
    this.hours = builder.hours || 0;
    this.shoppingList = builder.shoppingList || [];
  }
  toString() {
    return JSON.stringify(this);
  }
}
module.exports = Person;

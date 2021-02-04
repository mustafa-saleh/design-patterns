class Person {
  constructor(name, money, type) {
    this.name = name;
    this.money = money;
    this.type = type;
  }
  toString() {
    return JSON.stringify(this);
  }
}
module.exports = Person;

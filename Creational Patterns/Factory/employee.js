const Person = require("./person");

class Employee extends Person {
  constructor(name, money, employer) {
    super(name, money, "Employee");
    this.employer = employer;
    this.employed = employer ? true : false;
  }
  payDay(value) {
    this.money += value;
  }
}
module.exports = Employee;

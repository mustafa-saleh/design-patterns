const Person = require("./person");
const PersonBuilder = require("./personBuilder");

console.log("Starting Builder ...");

// Builder vs direct instanciation, builder is more readable
const alex = new PersonBuilder("Alex").makeEmployee().makeManager(60).build();
// const alex = new Person("alex", false, true, true, 60);

const noona = new PersonBuilder("Noona")
  .makeEmployee()
  .makePartTime()
  .withMoney(500)
  .withList(["a", "b"])
  .build();

console.log(alex.toString());
console.log(noona.toString());

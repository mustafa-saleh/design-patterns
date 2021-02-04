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

// Notes
// Builder Pattern seperates the construction of complex objects from its representation so that the same construction process could be used to create multiple representations.
// Builder is used for customizing instances. Its used to solve specific issue called the telescopic constructor (constructor that has so many args so that its difficult to tell what each args represent when creating an instance)

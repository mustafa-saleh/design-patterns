const useFactory = require("./useFactory");

console.log("Starting Factory ...");

const alex = useFactory("Alex", 400, "Employee", "Jack");
const noona = useFactory("Noona", 200);

alex.payDay(300);
console.log(alex.toString());
console.log(noona.toString());

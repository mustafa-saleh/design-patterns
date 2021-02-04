const Employee = require("./employee");
const Shopper = require("./shopper");

function useFactory(name, money = 0, type = "", employer = "") {
  if (type == "Employee") {
    return new Employee(name, money, employer);
  } else {
    return new Shopper(name, money);
  }
}
module.exports = useFactory;

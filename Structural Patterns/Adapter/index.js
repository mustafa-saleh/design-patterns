const localStorage = require("./localStorage");

console.log("Starting Adapter ...");
console.log("storage length is ", localStorage.length);

const id = localStorage.getItem("u_id");

if (id) {
  console.log(`User id Exists, value is ${id}`);
  console.log("Clearing localStorage");
  localStorage.clear();
} else {
  console.log(`USer id not found`);
  localStorage.setItem("u_id", "1");
  localStorage.setItem("token", "uiceb3289rjvnjrbeuvbuier90384j");
}

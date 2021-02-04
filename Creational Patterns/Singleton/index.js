const logger = require("./logger");
const Shopper = require("./shopper");
const Store = require("./store");

// const logger = new Logger().getInstance();

logger.log("Starting ...");

const shopper = new Shopper("Anas", 500);
const store = new Store("Vegs", [
  { type: "onion", count: 50 },
  { type: "lemon", count: 60 },
]);

console.log(`${logger.count} total logs`);
logger.logs.map((log) => console.log(`    ${log.msg} => ${log.timestamp}`));

// Notes
// Singleton is used when you only require one instance oF an objecct for example a logger class that needs to save all logs to certain storage 
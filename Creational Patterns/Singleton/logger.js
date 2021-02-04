class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(msg) {
    const timestamp = new Date().toISOString();
    this.logs.push({ msg, timestamp });
    console.log(msg);
  }
}
// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Logger();
//     }
//   }
//   getInstance() {
//     return Singleton.instance;
//   }
// }
// module.exports = Singleton;
module.exports = new Logger();

// Notes:
// Implementing Singleton with Singleton Class is more readable and self explanatory,
// you can alos implement it by returning an instance from module
// Node automatically caches logger instance and return it whenever logger is called

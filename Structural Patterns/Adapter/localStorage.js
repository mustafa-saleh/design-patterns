const {
  writeFile,
  existsSync,
  unlink,
  readFileSync,
  writeFileSync,
} = require("fs");

class LocalStorage {
  constructor() {
    if (existsSync("localStorage.json")) {
      console.log("Loading data from localStorage...");
      const file = readFileSync("localStorage.json");
      this.items = JSON.parse(file);
    } else this.items = {};
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFileSync("localStorage.json", JSON.stringify(this.items), (error) => {
      if (error) console.error(error);
    });
  }

  clear() {
    this.items = {};
    unlink("localStorage.json", () => console.log("localStorage file Removed"));
  }
}

module.exports = new LocalStorage();

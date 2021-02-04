const FS_Proxy = require("./FS_Proxy");
const path = require("path");

const fs = new FS_Proxy(require("fs"));

console.log("Starting Proxy ...");

const txtFile = path.join(__dirname, "readme.txt");
const mdFile = path.join(__dirname, "README.md");

const result = (error, data) => {
  if (error) {
    console.log("\x07");
    console.error(error);
    process.exit(0);
  }

  console.log("Reading file ...");
  console.log(data);
};

fs.readFile(txtFile, "UTF-8", result);
fs.readFile(mdFile, "UTF-8", result);

// const ls = require("./ls.js");

process.stdout.write("prompt >");

module.exports = function () {
  process.stdin.on("data", (data) => {
    if (data.toString().trim() === "pwd") {
      process.stdout.write(process.cwd());
    } else if (data.toString().trim() === "ls") {
      const ls = require("./ls.js");
    }
    process.stdout.write("\nprompt > ");
  });
};

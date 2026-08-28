var async = require("async");

function shortTimeFunction(callback) {
  setTimeout(function () {
    console.log("funcao short terminou");
    callback(null, 3);
  }, 2000);
}

function mediumTimeFunction(callback) {
  setTimeout(function () {
    console.log("funcao medium terminou");
    callback(null, 20);
  }, 5000);
}

function longTimeFunction(callback) {
  setTimeout(function () {
    console.log("funcao long terminou");
    callback(null, 300);
  }, 10000);
}

async.parallel(
  [mediumTimeFunction, longTimeFunction, shortTimeFunction],
  function (err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
  },
);

console.log("aqui...");

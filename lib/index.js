'use strict';

var checkers = require('auto-load')(__dirname + "/checkers");

var checkFunctions = [];

for(var checker in checkers) {
  checkFunctions.push(checkers[checker]);
}

var isNotGarbage = function(word) {
  return checkFunctions.every(function(func) {
    return func(word);
  });
};

module.exports = function(input) {
  input = input.split(" ");

  return input.filter(isNotGarbage).join(" ");
};
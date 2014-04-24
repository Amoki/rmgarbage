'use strict';

/**
 * Remove the garbage of a text
 *
 * @param {string} text to clean
 * @return {string} cleaned text
**/

var checkers = require('auto-load')(__dirname + "/checkers");

var checkFunctions = [];

for(var checker in checkers) {
  checkFunctions.push(checkers[checker]);
}

var isNotGarbage = function isNotGarbage(word) {
  return checkFunctions.every(function(func) {
    return func(word);
  });
};

module.exports = function rmgarbage(input) {
  var lines = input.split('\n');
  lines = lines.map(function(line) {
    return line.split(" ").filter(isNotGarbage).join(" ");
  });

  return lines.join('\n');
};


/**
 * Remove the garbage of a text
 * Log checkers
 * @param {string} text to clean
 * @return {string} cleaned text
**/

module.exports.debug = function rmgarbage(input) {
  var isNotGarbage = function isNotGarbage(word) {

    return Object.keys(checkers).every(function(key) {
      console.log(key, word, checkers[key](word));
      return checkers[key](word);
    });
  };

  var lines = input.split('\n');
  lines = lines.map(function(line) {
    return line.split(" ").filter(isNotGarbage).join(" ");
  });

  return lines.join('\n');
};
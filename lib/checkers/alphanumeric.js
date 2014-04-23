'use strict';

 /*
 * If a string’s ratio of alphanumeric characters to total characters is less than 50%, the string is garbage
 */
module.exports = function(word) {
  var totalLength = word.length;

  var alphanumericLength = word.replace(/[^0-9A-Z]/gi, "").length;

  if(alphanumericLength / totalLength < 0.5) {
    return false;
  }
  return true;
};
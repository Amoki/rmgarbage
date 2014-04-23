'use strict';

/*
 * The word is a garbage if the number of one is less than 10% of the number of the other
 */
module.exports = function(word) {
  if(word.match(/^\w+$/)) {
    var vowelsLength = word.replace(/[aeiou]/gi, "").length;

    var consonantsLength = word.replace(/[^aeiou]/gi, "").length;

    if(vowelsLength / consonantsLength < 0.1 || consonantsLength / vowelsLength < 0.1) {
      return false;
    }
    return true;
  }
  return true;
};

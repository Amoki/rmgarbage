'use strict';

/*
 * The word is a garbage if the number of vowels/consonants is less than 10% of the number of the other
 */
module.exports = function vowelsConsonants(word) {
  if(word.match(/^\w+$/)) {
    var vowelsLength = word.replace(/[aeiou]/gi, "").length;

    var consonantsLength = word.replace(/[zrtypqsdfghjklmwxcvbn]/gi, "").length;

    if((vowelsLength !== 0 && consonantsLength !== 0) && (vowelsLength / consonantsLength < 0.1 || consonantsLength / vowelsLength < 0.1)) {
      return false;
    }
    return true;
  }
  return true;
};

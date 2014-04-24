'use strict';

/*
 * The word is a garbage if its lenth is more than 40 words
 */
module.exports = function multiplePunctuation(word) {

  var punctuationLength = word.replace(/[^?;.,:\-!_]/gi, "").length;

  if(punctuationLength > 2) {
    return false;
  }
  return true;
};

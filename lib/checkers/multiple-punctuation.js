'use strict';

/*
 * The word is a garbage if its lenth is more than 40 words
 */
module.exports = function(word) {

  var punctuationLength = word.replace(/[^<>?;.:!§*¨`'"&']/gi, "").length;

  if(punctuationLength > 2) {
    return false;
  }
  return true;
};

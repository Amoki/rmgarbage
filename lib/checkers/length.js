'use strict';

/*
 * The word is a garbage if its lenth is more than 40 words
 */
module.exports = function(word) {
  if(word.length > 40) {
    return false;
  }
  return true;
};

'use strict';

/*
 * The word is a garbage if its length is more than 40 words
 */
module.exports = function length(word) {
  if(word.length > 40) {
    return false;
  }
  return true;
};

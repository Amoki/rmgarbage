'use strict';

/*
 * The word is a garbage if their is 4 identical characters in a row
 * TOFIX: the number 0.00005 is a garbage
 */
module.exports = function(word) {
  if(word.match(/(.)\1\1\1/)) {
    return false;
  }
  return true;
};

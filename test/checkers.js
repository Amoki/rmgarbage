'use strict';

require('should');

var checkers = require('auto-load')(__dirname + "/../lib/checkers");

var rmgarbage = require('../lib/');

var smallString = "azerty";
var longString = "azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn";

var balancedAlphaNumeric = "azer&é(-èaz1545";
var unbalancedAlphaNumeric = "azer&é(-èàç_ç_è-é|@]~{^[|~@]|^]@~|^~)";

var repeatChar = "aaaaazzzezrertrg";
var unrepeatChar = "azertyuiopqsdfghj";

var balancedVowelsConsonants = "azerytugino";
var unbalancedVowelsConsonants = "aaaaaaaaaaaaaaaaaax";

var textToUngarbage = 'azerty azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn azer&é(-èaz1545 azer&é(-èàç_ç_è-é|@]~{^[|~@]|^]@~|^~) aaaaazzzezrertrg azerytugino aaaaaaaaaaaaaaaaaax';

describe("checkers", function() {

  it("Length", function(done) {
    checkers.length(smallString).should.be.true;
    checkers.length(longString).should.be.false;
    done();
  });

  it("Alphanumeric", function(done) {
    checkers.alphanumeric(balancedAlphaNumeric).should.be.true;
    checkers.alphanumeric(unbalancedAlphaNumeric).should.be.false;
    done();
  });

  it("Repeat", function(done) {
    checkers.repeat(unrepeatChar).should.be.true;
    checkers.repeat(repeatChar).should.be.false;
    done();
  });

  it("Vowels Consonants Ratio", function(done) {
    checkers.vowelsConsonantsRatio(balancedVowelsConsonants).should.be.true;
    checkers.vowelsConsonantsRatio(unbalancedVowelsConsonants).should.be.false;
    done();
  });

});

describe("rmgarbage", function() {
  it ("should return ungarbaged string", function(done) {
    rmgarbage(textToUngarbage).should.be.eql("azerty azer&é(-èaz1545 azerytugino");
    done();
  });
});

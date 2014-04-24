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

var multiplePunctuated = 'hi!cou?cou,';
var simplePunctuated = 'jean-marc,';

describe("Checkers", function() {

  describe("Length", function() {
    it("should remove long words", function(done) {
      checkers.length(longString).should.be.false;
      done();
    });

    it("should keep short words", function(done) {
      checkers.length(smallString).should.be.true;
      done();
    });
  });

  describe("Alphanumeric", function() {
    it("should remove unbalanced strings", function(done) {
      checkers.alphanumeric(unbalancedAlphaNumeric).should.be.false;
      done();
    });

    it("should remove balanced strings", function(done) {
      checkers.alphanumeric(balancedAlphaNumeric).should.be.true;
      done();
    });

    it("should keep alone symbol", function(done) {
      checkers.alphanumeric("+").should.be.true;
      done();
    });

  });

  describe("Repeat", function() {
    it("should remove repetitive char", function(done) {
      checkers.repeat(repeatChar).should.be.false;
      done();
    });

    it("should keep unrepetitive char", function(done) {
      checkers.repeat(unrepeatChar).should.be.true;
      done();
    });
  });

  describe("Vowels Consonants Ratio", function() {
    it("should remove unbalaned ratio", function(done) {
      checkers.vowelsConsonantsRatio(unbalancedVowelsConsonants).should.be.false;
      done();
    });

    it("should keep balaned ratio", function(done) {
      checkers.vowelsConsonantsRatio(balancedVowelsConsonants).should.be.true;
      done();
    });

    it("should keep punctuation", function(done) {
      checkers.vowelsConsonantsRatio(",;')=ab").should.be.true;
      done();
    });
  });

  describe("Multiple punctuation", function() {
    it("should remove Multiple punctuation", function(done) {
      checkers.multiplePunctuation(multiplePunctuated).should.be.false;
      done();
    });

    it("should keep simple punctuation", function(done) {
      checkers.multiplePunctuation(simplePunctuated).should.be.true;
      done();
    });
  });
});

describe("rmgarbage", function() {
  it ("should return ungarbaged string", function(done) {
    rmgarbage(textToUngarbage).should.be.eql("azerty azer&é(-èaz1545 azerytugino");
    done();
  });
});

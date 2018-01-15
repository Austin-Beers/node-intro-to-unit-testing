// import chai, declare expect variable
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should test divisibility of 15', function() {
        [15, 225, 3375].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
      });
    
      it('should test divisibility of 3', function() {
        [3, 9, 81].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal('fizz');
        });
      });
    
      it('should test divisibility of 5', function() {
        [5, 25, 125].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal('buzz');
        });
      });
    
      it('should return number if not mult of 3 or 5', function() {
        [1, 4, 11, 16].forEach(function(input) {
          expect(fizzBuzzer(input)).to.equal(input);
        });
      });
    
      it('should produce error if input is not number', function() {
        const badInputs = [true, false, 'bean', function() {}, [1, 2, 3]];
        badInputs.forEach(function(input) {
          expect(function() {
              fizzBuzzer(input);
          }).to.throw(Error);
        });
      });
    });
'use strict';

const should = require('chai').should();

const fber = require('../fizzBuzzer');
// const fber = function (num) {...}

describe('fizzBuzzer', () => {
  it('when modulus 5 is equal to 0', () => {
    fber(5).should.equal('buzz');
  });
  it('when modulus 15 is equal to 0', () => {
    fber(15).should.equal('fizz-buzz');
  });
  it('when modulus 3 is equal to 0', () => {
    fber(3).should.equal('fizz');
  });

  // should(fber(15)).to.equal('fizz-buzz');
  // should(fber(3)).to.equal('fizz');
});
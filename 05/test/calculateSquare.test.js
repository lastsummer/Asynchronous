const calculateSquare = require('../src/calculateSquare.js')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const expect = chai.expect

describe('calculateSquare', function(){
  this.timeout(4000)
  it('should return 4 if passed 2', function(){
    return expect(calculateSquare(2)).to.eventually.be.equal(4)
  })

  it('should become fulfilled when passed 2', function(){
    return expect(calculateSquare(2)).to.be.fulfilled
  })

  it('should become rejected if passed a string instead of a number', function(){
    return expect(calculateSquare('string')).to.be.rejected
  })
})
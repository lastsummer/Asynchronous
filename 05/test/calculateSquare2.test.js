const calculateSquare = require('../src/calculateSquare.js')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const expect = chai.expect

describe('calculateSquare2', function(){
  this.timeout(4000)
  it('should return 4 if passed 2', function(done){
    expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done)
  })

  it('should become fulfilled when passed 2', function(done){
    expect(calculateSquare(2)).to.be.fulfilled.notify(done)
  })

  it('should become rejected if passed a string instead of a number', function(done){
    expect(calculateSquare('string')).to.be.rejected.notify(done)
  })

  it('should return 4 if passed 2', function(){
    return calculateSquare(2).then(result=>{
      expect(result).to.be.above(3)
      expect(result).to.be.equal(4)
    })
  })
})
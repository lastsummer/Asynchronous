const calculateSquare = require('../calculate-square')
const expect = require('chai').expect

describe('calculateSquare', function(){
  it('should return 4 if passed 4', function(done){
    calculateSquare(2, function(error, result){
      expect(result).to.equal(4)
      done()
    })
  })
  it('should return an error if passed a string', function(done){
    calculateSquare('string', function(error, result){
      expect(error).to.not.equal(null)
      done()
    })
  })
})
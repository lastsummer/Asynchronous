const myPromise = new Promise(function(resolve, reject){
  resolve('hello world')

})
myPromise.then(function(value){
  console.log('This is inside the onFulfilled function')
})
console.log('This is written after myPromise.then')
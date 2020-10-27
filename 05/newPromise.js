const myPromise = new Promise(function(resolve, reject){
  resolve('hello world')

})
myPromise.then(function(value){
  console.log(value)
})
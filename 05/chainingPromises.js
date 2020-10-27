function calculateSquare(number){
  const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
      if(typeof number !== 'number'){
        return reject(new Error('Argument of type number is expected'))
      }
      const result = number*number
      resolve(result)
    },1000)
  })
  return promise
}

calculateSquare(2).then(value=>{
  console.log(`Success: ${value}`)
  return calculateSquare(value)
}).then(value2=>{
  console.log(`Success: ${value2}`)
},reason=>{
  console.log(`error happened: ${reason}`)
})
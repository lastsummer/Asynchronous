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



/*
calculateSquare(2).then(value=>{
  console.log(`Success: ${value}`)
},reason=>{
  console.log(`Error: ${reason}`)
})

calculateSquare('2').then(value=>{
  console.log(`Success: ${value}`)
},reason=>{
  console.log(`Error: ${reason}`)
})
*/

calculateSquare(2).then(value=>{
  console.log(`Success: ${value}`)
  throw new Error('Something went wrong')
  return calculateSquare(3)
}).then(value=>{
  console.log(`Success: ${value}`)
}).then(undefined,reason=>{
  console.log(`Error: ${reason}`)
})
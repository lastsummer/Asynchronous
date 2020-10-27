function getSquare(callback, number){
  setTimeout(function(){
    if(typeof number !== 'number'){
      callback(new Error('Argument of type number is expected'))
      return
    }
    callback(null, number*number)
  },1000)
}


getSquare(function(error,value){
  if(error){
    console.log(`error: ${error}`)
  }
  console.log(`value: ${value}`)
}, '4')




function getSquare2(number){
  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      if(typeof number !== 'number'){
        reject(new Error('Argument of type number is expected'))
      }
      resolve(number*number)
    },1000)
  })
  
}

getSquare2('2').then(value=>{
  console.log(`value: ${value}`)
}).catch(error=>{
  console.log(`error: ${error}`)
})


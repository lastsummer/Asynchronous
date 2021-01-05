async function f(){
  return new Promise((resolve, reject) => { 
     setTimeout(()=> resolve(true), 10000)
  })
 }
function askFirstDealer(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(8000), 3000)
  })
}

function askSecondDealer(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(12000), 5000)
  })
}

function askThirdDealer(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(10000), 8000)
  })
}

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
  prices => {
    console.log(prices)
  }
)

Promise.all([1,2,3]).then(
  prices => {
    console.log(prices)
  }
)



function askSecondDealer2(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => reject("Not suitable car"), 5000)
  })
}

Promise.all([askFirstDealer(), askSecondDealer2(), askThirdDealer()]).then(
  prices => {
    console.log(prices)
  }
).catch(error => {
  console.log(error)
})

Promise.all([
  askFirstDealer().catch(error => { return error}), 
  askSecondDealer2().catch(error => { return error}), 
  askThirdDealer().catch(error => { return error})]).then(
  prices => {
    console.log(prices)
  }
).catch(error => {
  console.log(error)
})
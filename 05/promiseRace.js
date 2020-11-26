let askJohn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve('Yep, I got one extra pen.'), 3000)
  })
}
let askEugene = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> reject('Sorry man, got only one.'), 1000)
  })
}
let askSusy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve('Sure, I have a pen for you.'), 2000)
  })
}

Promise.race([askJohn(), askEugene(), askSusy()])
 .then(value => {
   console.log(value)
 }).catch( reason =>{
   console.log('Reject: ' + reason)
 })
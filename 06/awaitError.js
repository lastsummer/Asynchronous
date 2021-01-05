function getSpecificNumer(){
  return new Promise((resolve, reject)=> {
      setTimeout(()=>resolve(42), 2000)
  })
}
const number = await getSpecificNumer()
console.log(number)
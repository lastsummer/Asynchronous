const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const Done = require("xmlhttprequest").Done

function getGog(url){
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = function() {
      if(xhr.readyState === xhr.DONE){
        resolve(xhr.responseText)
      }
    }
    xhr.send(null)
  })
}

let breeds
getGog('https://dog.ceo/api/breeds/list/all').then(value=>{
  const response = JSON.parse(value)
  breeds = Object.keys(response.message)
  return getGog(`https://dog.ceo/api/breed/${breeds[0]}/images/random`)
}).then(value=>{
  console.log(value)
  return getGog(`https://dog.ceo/api/breed/${breeds[1]}/images/random`)
}).then(value=>{
  console.log(value)
  
})

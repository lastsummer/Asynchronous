const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const Done = require("xmlhttprequest").Done
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
xhr.onreadystatechange = function() {
  if(xhr.readyState === xhr.DONE){
    const response = JSON.parse(xhr.responseText)
    const breeds = Object.keys(response.message)
    const firstBreedInTheList = breeds[0]
    const secondBreedInTheList = breeds[1]
    const xhr2 = new XMLHttpRequest()
    xhr2.open('GET', `https://dog.ceo/api/breed/${firstBreedInTheList}/images/random`)
    xhr2.onreadystatechange = function() {
      if(xhr2.readyState === xhr.DONE){
        console.log(xhr2.responseText)
        const xhr3 = new XMLHttpRequest()
        xhr3.open('GET', `https://dog.ceo/api/breed/${secondBreedInTheList}/images/random`)
        xhr3.onreadystatechange = function() {
          if(xhr3.readyState === xhr.DONE){
            console.log(xhr3.responseText)
          }
        }
        xhr3.send(null)
      }
    }
    xhr2.send(null)
  }
}
xhr.send(null)
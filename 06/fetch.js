function getRandomDogImage(){
  fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(value => console.log(value.message))
     .catch(error=> console.log(error))
}
getRandomDogImage()
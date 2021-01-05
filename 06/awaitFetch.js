async function getRandomDogImage(){
  let response = await fetch('https://dog.ceo/api/breeds/image/random')
  let value = await response.json()
  console.log(value.message)
}
getRandomDogImage()
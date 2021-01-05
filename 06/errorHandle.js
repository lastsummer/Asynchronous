async function f(){
  try{
    const response = await fetch('https://some-host.com/wrong-url')
  }catch(e){
    console.log('Some error: ' + e)
  }
}
f()
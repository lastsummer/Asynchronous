async function f(){
  const response = await fetch('https://some-host.com/wrong-url')
}
f().catch(e=> console.log('Some error: ' + e))
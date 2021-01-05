function getSpecificNumer(){
  return new Promise((resolve, reject)=> {
      setTimeout(()=>resolve(42), 2000);
  });
}
async function f(){
  const specificNumber = await getSpecificNumer();
  console.log(specificNumber);
}
f()
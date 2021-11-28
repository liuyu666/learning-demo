let fn = ()=> {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      reject(111)
    }, 1000);
  })
  
}

(async()=> {
  try {
    console.log(await fn()); 
  } catch (error) {
    console.log(error);
  }
})()

try {
  new Promise((resolve, reject)=> {
    setTimeout(() => {
      reject(33)
    }, 1000);
  }).catch(err=>{
    console.log(err);
  })
} catch (error) {
  console.log(error, 9998);
}
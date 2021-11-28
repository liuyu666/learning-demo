function promiseGenerator(ms, success=true){
  return (args)=> {
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(success) resolve(args)
        else reject(args)
      }, ms)
    })
  }
  
}


let p1 = promiseGenerator(3000)(11)
let p2 = promiseGenerator(2000, false)(232)
let p3 = promiseGenerator(1000)(33)
console.log(p1);

let fn = async()=>{
  try {
    let pArr1 = await Promise.race([promiseGenerator(1000)(11), promiseGenerator(2000, false)(232)]).catch(err=>{
      console.log(err, 998);
    })
    console.log(pArr1, "pArr1");
  } catch (error) {
    console.log(error);
  }
}

fn()

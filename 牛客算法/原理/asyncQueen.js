class Queue {
  promise = Promise.resolve();
  excute(promise) {
    this.promise = this.promise.then(() => promise);
    return this.promise;
  }
}

const queue = new Queue();

const delay = (params) => {
  const time = Math.floor(Math.random() * 5);
  console.log(time, 'start');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, time * 500);
  });
};

// const handleClick = async (name) => {
//   const res = await queue.excute(delay(name));
//   console.log(res);
// };
function fn1(){
  let p = Promise.resolve()
  return function execut(promise) {
    p = p.then(()=> promise)
    return p
  }
}
let fn = fn1()
async function handleClick(name){
  const res = await fn(delay(name));
  console.log(res);
}
// function fn() {
//   let p = Promise
// }


// function handleClick(name) {
//   let res = await fn()( delay(name));
//   console.log(res);
// }

handleClick('A');
handleClick('B');
handleClick('C');
handleClick('A');
handleClick('C');
handleClick('B');
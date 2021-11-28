// 节流 在指定时间间隔内触发多次事件，只会执行一次
function throttle(fn, ms) {
  let flag = false
  return function(...args) {
    if(!flag){
      flag = true
      setTimeout(() => {
        fn.apply(this, args)
        flag = false
      }, ms);
    }
  }
}

function fn(params) {
  console.log('hello', params);
}
let debfn = throttle(fn, 1000)


let num = 0
let t = setInterval(() => {
  num++;
  if(num>10) clearInterval(t)
  debfn('Tom')
}, 500);
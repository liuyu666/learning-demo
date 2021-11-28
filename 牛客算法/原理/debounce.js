// 防抖 ： 高频触发事件时候，事件不执行，直到触发间隔到一定秒数再执行

function debounce(fn, ms) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=> {
      fn.apply(this, args)
    }, ms)
  }
}

function fn(params) {
  console.log('hello', params);
}
let debfn = debounce(fn, 1000)


let num = 0
let t = setInterval(() => {
  num++;
  if(num>10) clearInterval(t)
  debfn('Tom')
}, 100);
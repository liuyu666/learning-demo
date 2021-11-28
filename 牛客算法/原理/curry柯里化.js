function add(a, b) {
  return a+b
}

function curry(fn, args) {
  return ()=> {
    console.log(fn, fn.length, 'fn, fn.length');
    console.log([].slice.call(arguments), 'arguments')
    if(fn.length) {
      return arguments.callee(fn, 11,99)
    }
  }
}

let curryAdd = curry(add)

curryAdd(1,2)
curryAdd(1)(2)(3)
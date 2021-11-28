Function.prototype.myCall = function(context, ...args) {
  context.fn = this;
  const result = context.fn(...args)
  delete context.fn
  return result
}
Function.prototype.myBind = function(context) {
  let that = this
  return function(){
    return that.apply(context, arguments)
  }
}

function fn1(c, d) {
  // console.log(this.a + this.b + c + d);
  return this.a + this.b + c + d
}

let obj = {
  a: 2,
  b: 7
}

// fn1.myCall(obj, 1, 2)
let fn2 = fn1.myBind(obj)
console.log(fn2(3,2));

function bindThis (f, oTarget) {
  // return (...args) => {
  //   return f.apply(oTarget, args)
  // }
  return f.bind(oTarget)
  // oTarget.fn = this;
  // oTarget.fn()
}
 
  var r = bindThis(
    function (a, b) { return this.test + a + b }, 
      { test: 2 }
    )(2, 3); 

    // console.log(r);
//  r===7

//  封装函数 f，使 f 的 this 指向指定的对象

function myCall(fn, context, ...args) {
  // fn()
  // console.log(this, 999);
  context.fn = fn
  context.fn(args)
  delete context.fn
}

let context = {
  text: 22
}
function fn(args) {
  console.log(this.text, args);
}
let args = [3,4,5]
myCall(fn, context, ...args)
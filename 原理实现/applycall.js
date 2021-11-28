var data = 2
var obj = {
  data:'hhh',
  getData(e) {
    console.log(e, 87);
    console.log(this, 'this');
    return this.data
  }
}

// obj.getData()


// Function.prototype.myCall = function(context, ...arg){
//   context.fn = this
//   let res = context.fn(...arg)
//   delete context.fn
//   return res
// }
// Function.prototype.myApply = function(context, arg){
//   context.fn = this
//   let res = context.fn(...arg)
//   delete context.fn
//   return res
// }


var fn = obj.getData
// console.log(fn());
// console.log(obj.getData());
// console.log(fn.myCall(obj, 3,2,3));
// console.log(fn.myApply(obj, [3,2,3]));


Function.prototype.mCall = function() {
  const context = [].shift.call(arguments)
  context.fn = this;
  console.log(context, 99)
  return context.fn(...arguments)
}


console.log(fn.mCall(obj, 3,2,3));
// console.log(fn.mApply(obj, [3,2,3]));
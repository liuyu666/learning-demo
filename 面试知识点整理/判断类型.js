option// 要检测的对象.
constructor// 某个构造函数

instanceof: option  instanceof  constructor
// 结果为true或者false

通常来讲，使用 instanceof 就是判断一个实例是否属于某种类型
// 判断 foo 是否是 Foo 类的实例
function Foo(){} 
var foo = new Foo(); 
console.log(foo instanceof Foo)//true

typeof: typeof option
// 很多结果都是object
function Animal(name, step) {
  this.name = name || 'Animal';
  this.step = step || [];
}
Animal.prototype.eat = function() {
  console.log(this.name + "is eating")
}


// 构造函数继承
// function Cat(name, step) {
//   Animal.call(this, name, step)
// }
// 只有父级构造函数里边的属性



// 原型链继承
// function Cat(name, step) {
// }
// Cat.prototype = new Animal()
// 原型上的方法属性被实例化
// 父级上的属性是引用影响实例
// 无法向父级传参

// 原型继承
// function Cat(name, step, color) {
//   var instance = new Animal(name, step)
//   instance.color = color
//   return instance
// }
// 返回的是父级的实例


// 组合继承
// function Cat(name, step) {
//   Animal.call(this, name, step)
// }

// Cat.prototype = new Animal()
// Cat.prototype.constructor = Cat

//调用了两次父级的构造函数，父类实例属性方法有两份（子类实例上的将原型上的父级的实例属性屏蔽了）


// 寄生组合继承
function Cat(name, step) {
  Animal.call(this, name, step)
}
var superClass = function(){}
superClass.prototype = Animal.prototype
Cat.prototype = new superClass()
Cat.prototype.constructor = Cat


var cat1 = new Cat('maomi', [1,2,34,3])
var cat2 = new Cat('maomi', [1,4,34,3])

// cat2.step.pop()
console.log(cat1.step.push(99));
console.log(cat2);

// 原型上只放方法，因为继承实例化的时候，原型上的方法是共用的
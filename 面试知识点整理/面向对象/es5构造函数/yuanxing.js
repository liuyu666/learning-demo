function Ninja() {
  this.swung = true
}

Object.defineProperty(Ninja.prototype, 'constructor', {
  enumerable: false,
  value: Ninja,
  writable: true
})
let ninja1 = new Ninja()

Ninja.prototype.getSwung = function() {
  return this.swung
}
console.log(ninja1, 'ninja1');
console.log(ninja1.__proto__.constructor);
// console.log(Ninja);

Ninja.prototype = {
  getPe: function() {
    return true
  }
}

var ninja2 = new Ninja()

console.log(ninja2, 'ninja2');

var ninja31 = new ninja1.constructor()

console.log(ninja31, 'ninja31');

// Ninja.prototype.getSwung 与 Ninja.prototype = {getSwung} ,new之后的原型是不一样的，第二种直接覆盖原型，导致constructor丢失


// function Person() {}
// Person.prototype.name = 'tom'

// function NN() {

// }
// NN.prototype = new Person()
// Object.defineProperty(NN.prototype, 'constructor', {
//   enumerable: false,
//   value: NN,
//   writable: true
// })

// var nn = new NN()
// console.log(nn);
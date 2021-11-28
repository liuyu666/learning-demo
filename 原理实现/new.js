function myNew() {
  const obj = new Object()
  const Constructor = [].shift.call(arguments)
  obj.__proto__ = this.prototype
  const ret = Constructor.apply(obj, arguments)
  if(Object.prototype.toString.call(ret) === '[object Object]') {
    return ret
  } else {
    return obj
  }
}

function Oku(name, age) {
  this.name = name;
  this.age = age;
}

console.log(myNew(Oku, 'Tom', 17))

console.log(new Oku('Tom', 17))
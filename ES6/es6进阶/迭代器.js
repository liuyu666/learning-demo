function makeIterator(data) {
    let index = 0, length = data.length;
    return {
        next: function() {
            let res = length > index? {value: data[index], done: false}: { value: undefined, done: true }
            index++;
            return res;
        }
    }
}

var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// it.next() // { value: "a", done: false }
// it.next() // { value: "b", done: false }
// it.next() // { value: undefined, done: true }

Object.prototype[Symbol.iterator] = function() {
    let len = Object.keys(this).length
    let keys = Object.keys(this)
    let index = 0
    return {
        next: function() {
            return len > index? {value: keys[index++], done: false}: {value: undefined, done: true}
        }
    }
}

let obj = {
    a: 'de',
    cew: 'dewce3'
}
console.log(obj, 'obj');
for (const iterator of obj) {
    console.log(iterator, 999);
}

let arr = [2,3,4,5,45]

let iterator = arr[Symbol.iterator]()

console.info(arr[Symbol.iterator]);
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



console.log('============================补充==========================');
// for of遍历类实例输出 传入两个数字之间的值
class RangeIterator{
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.name = 'Range'
  
    this.handleEvent = this.handleEvent.bind(this) // handleEvent被赋值给一个变量的时候，this指向会丢失，这里强绑定一下不会出现错误
  }
  handleEvent() {
    console.log(this.name);
  }
  [Symbol.iterator]() {
    return this
  }
  next() {
    if(this.start < this.end) {
      return {value: this.start++, done: false}
    } else {
      return {value: undefined, done: true}
    }
    
  }
}

let rangeIterator =  new RangeIterator(0, 3)

console.log(rangeIterator);
for (const iterator of rangeIterator) {
  console.log(iterator);
}

let handleFn = rangeIterator.handleEvent;
handleFn()

// 遍历器实现指针

function Obj(data) {
  this.data = data;
  this.next = null
}

Obj.prototype[Symbol.iterator] = function() {
  let current = this;
  console.log(current, 'current');
  return {
    next: function() {
      if(current) {
        data = current.data
        console.log(current);
        current = current.next
        return {value: data, done: false}
      } else {
        return {value: undefined, done: true}
      }
    }
  }
}
var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one){
  console.log(i); // 1, 2, 3
}

// !最最关键的理解：如何实现迭代？for of是调用了数据结构的[Symbol.iterator](),返回了一个iter对象{next: ()=> { value, done}}, 连续调用iter对象，取其中的value，[Symbol.iterator]只执行一遍

let obj2 = {
  de: "ded",
  cdsw: "ccd",
  cds: "s"
}
console.log(obj2, 'obj2');
Object.prototype.aa = 999
console.log('aa' in obj2, 'aa?');

for (const key in obj2) {
  if (Object.hasOwnProperty.call(obj2, key)) { //
    const element = obj2[key];
    console.log(element, key);
  }
}
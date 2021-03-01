function hello(obj) {
  obj.name = 'lucy';
  obj = new Object(); // 新赋值了一个地址
  obj.name = 'lili';
  return obj;
}

var person = new Object();
person.name = 'jon';
var newPerson = hello(person);
console.log(person.name); // lucy 
console.log(newPerson.name); // lili

// 这里hello函数传进去的person是一个指针地址，当改变person属性值的时候，会到该内存地址改变堆中的值，导致在外边定义的person对象也改变，而直接将传入的person赋值为一个新的值或者新的对象，相当于把这个person重新指向了一个新的内存地址，不会改变外边定义的person对象，两者已经脱离了联系
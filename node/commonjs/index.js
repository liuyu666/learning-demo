// index.js
let p = require('./test.js');
console.log(p.name); // lee
console.log(p.age); // 29
p.name = 'lee++'
console.log(p.name); // lee++
let age = 99
p.setAge(); // 内部age++不影响导出的值
console.log(p.age, "??"); // 29
console.log(age, 100); // 29
p.age++; // 导出的age++会自增

let b = require('./test.js');
console.log(b.name); // lee++
console.log(b.age); // 30


/**
 * commonjs 浅复制
 */
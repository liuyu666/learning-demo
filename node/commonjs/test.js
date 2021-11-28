// test.js
const name = 'lee';
// let age = {age: 89};
let age = 29;
exports.name = name;
exports.age = age;
exports.setAge = function () {
    age++;
    age.age++;
}

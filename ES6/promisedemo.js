
// function a(){
//     var m;
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hello")
//         },2000)
//     })
// }
// async function b(){
//     const x = await a()
//     console.log(x,888)
// }

// b()
// function mm(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hello")
//         },2000)
//     })
    
// }
// var xx = function* (){
//     var x = yield mm();
//     console.log(x,88)
// }

var fs = require('fs');

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('./text.txt');
  var f2 = yield readFile('./name.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};
gen().next()

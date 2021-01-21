// 简要说明 创建一个js文件 与这个文件同级的 name.txt, text.txt 
// 其中name.txt内容是text.txt， 而text.txt的内容是 文本1
// node 运行这个js文件

// let fs = require('fs')

// fs.readFile('./text.txt', 'utf8', function (err, data) {
//   console.log(data)
//   fs.readFile(data, 'utf8', function (err, data) {
//     console.log(data)
//   })
// })



var fs = require('fs');
function readFile(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,"utf8",function(err,data){
            if(err){
                console.log(err)
            }else{
                resolve(data)
            }
        })
    })
}


var rf = readFile("./text.txt");
rf.then(val=>{
    console.log(val)
    // return readFile(val)//返回promise
    // return {a:10}//返回引用类型
    // return 12 //返回值
    return //直接return
})
.then(data=>{
    console.log("data:"+data)
})

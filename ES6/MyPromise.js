function MyPromise(excutor){
    let that = this;
    that.value = undefined;
    that.reason = undefined;
    that.status = "pending";
    //存下.then成功失败的函数，用数组的原因是：可以有多个then（非链式）
    that.onResolvedCallbacks = [];
    that.onRejectedCallbacks = [];

    function resolve(value){
        if(that.status=="pending"){
            //可以在.then里边访问到
            that.value = value;
            that.status = "resolved";
            // 执行.then的内容
            that.onResolvedCallbacks.forEach(fn=>{
                fn()
            })
        }
    }
    function reject(reason){
        if(that.status=="pending"){
            that.reason = reason;
            that.status = "rejected"
            that.onRejectedCallbacks.forEach(fn=>{
                fn()
            })
        }
        
    }
    //1.立即执行函数
    excutor(resolve,reject)
}
  
MyPromise.prototype.then = function(onfulfilled,onrejected){
    let that = this;
    let promise2 = new MyPromise(function(resolve,reject){
        //异步情况，先把成功失败的函数存下来不执行
        if(that.status === "pending"){
            that.onResolvedCallbacks.push(function(){
                // onfulfilled(that.value);
                try{
                    let x = onfulfilled(that.value)
                    // resolve(x)
                    resolvePromise(x,resolve,reject)

                }catch(e){
                    reject(e)
                }
            })
            that.onRejectedCallbacks.push(function(){
                // onrejected(that.reason);
                try{
                    let x = onrejected(that.reason)
                    resolve(x)
                }catch(e){
                    reject(e)
                }
            })
        }
        if(that.status==="resolved"){
            try{
                let x = onfulfilled(that.value)
                resolve(x)
            }catch(e){
                reject(e)
            }
        }
        if(that.status==="rejected"){
            try{
                let x = onrejected(that.reason)
                resolve(x)
            }catch(e){
                reject(e)
            }
        }
    })
    //链式调用就得重新返回promise
    return promise2
}

// console.log("start")
// let p = new MyPromise(function(resolve,reject){
//     console.log("data1")
//     setTimeout(function(){
//         resolve("data2")
//     },1000)
//     reject("data3")
// })
// p.then((val)=>{
//     console.log("success"+val)
// },(err)=>{
//     console.log("reason"+err)
// })

// p.then((val)=>{
//     console.log("成功："+val)
// },(err)=>{
//     console.log("失败："+err)
// })
// console.log("end")

// var fs = require('fs');
// function readFile(url){
//     return new MyPromise((resolve,reject)=>{
//         fs.readFile(url,"utf8",function(err,data){
//             if(err){
//                 console.log(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }
// var rf = readFile("./text.txt");
// rf.then(val=>{
//     readFile(val).then((data)=>{
//         console.log(data,999)
//     })
// })


// var rf = readFile("./text.txt");
// var rfp = rf.then(val=>{
//     console.log(val)
//     return readFile(val)
// })
// .then(data=>{
//     console.log(data)
// })

let p = new MyPromise(function (resolve, reject) {
    console.log('start')
    setTimeout(function(){
      resolve('data1')
    },500)
  })
  p.then(
    (v) => {
    console.log('success：' + v)
    // return v // 1 返回 v    
    // return 100 // 2 返回常量
    // return {a : 100} // 3 返回对象
    // return undefined // 4 返回 undefined
    // 5 不写return
    // return new MyPromise(function(resolve,reject){
    //     resolve("11")
    // })
    },
    (v) => {
    console.log('error： ' + v)
    }
  )
  .then(
    (v) => {
      console.log('success： ' + v)
    },
    (v) => {
     console.log('error： ' + v)
    }
  )
  .then(
    (v) => {
        console.log('success： ' + v)
    },
    (v) => {
        console.log('error： ' + v)
    }
  )
  console.log('end')
  
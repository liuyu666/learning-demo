console.log("start")
let p = new Promise(function(resolve,reject){
    console.log("data1")
    setTimeout(function(){
        resolve("data2")
    },1000)
    // reject("data3")
})
p.then((val)=>{
    console.log("success"+val)
},(err)=>{
    console.log("reason"+err)
})

p.then((val)=>{
    console.log("成功："+val)
},(err)=>{
    console.log("失败："+err)
})
console.log("end")
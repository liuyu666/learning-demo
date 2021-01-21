class MyPromise{
    constructor(executor){
        let resolve = ()=>{}
        let reject = ()=>{}
        executor(resolve,reject)
    }
}
new Promise(function(resolve,reject){
    resolve(1)
}).then(val=>{console.log(val)},err=>{console.log(err)})
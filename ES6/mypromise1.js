class MyPromise{
    constructor(executor){
        this.status = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onrejectedCallbacks = [];
        let resolve=(value)=>{
            //执行then的第一个传入函数
            if(this.status=="pending"){
                this.status = "fulfilled";
                this.value = value;
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }
        let reject=(reason)=>{
            if(this.status=="pending"){
                this.status = "rejected"
                this.reason = reason
                this.onrejectedCallbacks.forEach(fn=>fn())
            }
        }
        executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        let promise2 = new MyPromise((resolve,reject)=>{
        // let promise2 = new MyPromise(function(resolve,reject){}
            //this此时指向它此处所在的“全局”promise
            if(this.status == "fulfilled"){
                //返回的是一个值
                /*
                想一想场景：new Promise中reject/throw error，.then就会执行第二个onRejected函数，无返回为undefined，.then就会执行onFulfilled()
                这样resolve => throw error ->reject执行=>pending.then() 执行
                */
                try{
                    let x = onFulfilled(this.value);
                    // resolve(x)
                    onResolvePromise(x,resolve,reject)
                }
                catch(e){
                    reject(e)
                }
            }
            if(this.status == "rejected"){
                
                try{
                    let x = onRejected(this.reason);
                    onResolvePromise(x,resolve,reject)
                }
                catch(e){
                    reject(e)
                }
            }
            if(this.status == "pending"){
                this.onResolvedCallbacks.push(()=>{
                    try{
                        let x = onFulfilled(this.value);
                        onResolvePromise(x,resolve,reject)
                    }
                    catch(e){
                        reject(e)
                    }
                })
                this.onrejectedCallbacks.push(()=>{
                    
                    try{
                        let x = onRejected(this.reason);
                        onResolvePromise(x,resolve,reject)
                    }
                    catch(e){
                        reject(e)
                    }
                })
            }
        })
        return promise2
    }
}
function onResolvePromise(x,resolve,reject){
    //两种情况，如果是对象并且有then方法，默认为Promise，假如是一个值直接resolve
    let called = false;
    if(typeof x === "object"){
        if(typeof x.then === "function"){
            let then = x.then;
            //丢失了原有this
            try{
                // x中this指向then方法,x是新的promise
                // Cannot read property 'status' of undefined
                then.call(x,y=>{
                    if(called)return;
                    called = true
                    onResolvePromise(y,resolve,reject)
                },e=>{
                    if(called)return;
                    called = true;
                    reject(e)
                })
            }catch(e){
                if(called)return;
                called = true;
                reject(e)
            }
        }else{
            resolve(x)
        }
        
    }else{
        resolve(x)
    }

}





var p = new MyPromise((resolve,reject)=>{
    //指向Window
    resolve(11)
})
.then(
    (v)=>{
        console.log("success"+v)
        return new MyPromise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("succ")
            },2000)
        })
    },
    (e)=>{console.log("defeat"+e)}
    
)
.then(
    (v)=>{console.log("success1"+v)},
    (e)=>{console.log("defeat1"+e)}
    
)
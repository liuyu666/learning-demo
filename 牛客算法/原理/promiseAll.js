// 异步请求通过 Promise.all 处理，怎么让其中失败的所有请求重试。

// Promise.all([A, B, C, D])
// 4 个请求完成后发现 AD 请求失败了，如果让 AD 请求重试
// 这个题目其实很简单，因为 Promise.all 中一个 promise 挂了就挂了，所以我们直接在接口上处理 catch 就行了。

// 看了些答案，结果是对的，但是处理方式是错误的。比如说在 resolve 中去判断是否要重试。一般我们业务中请求都是封装过的函数，出现错误肯定直接 reject 了，不可能 resolve 出来。
let index = 0
function generatorP(name){
  return new Promise((resolve, reject)=> {
    let random = Math.random();
    console.log(random, index++);
    random > 0.5? resolve(name ): reject(name )
  }).catch(err=> {
    console.log(err);
    return generatorP(name)
  })
}
let p1 = generatorP("AAA")
let p2 = generatorP("BBB")
let p3 = generatorP("CCC")
Promise.all([p1, p2, p3]).then(res=> {
  console.log(res, 'ttt');
}).catch(err=> {
  console.log(err, "error");
})
class MyPromise {
  constructor(executer) {
    this.resolve = () => {
      this.status = 'fullfilled'
    }
    this.reject = () => {
      this.status = 'rejected'
    }
    this.onResolveFn = []
    this.onRejectFn = []
    executer();
    console.log(executer, 999)
    this.status = 'pending'
  }
  then (onResolve, onReject) {
    this.onResolve = onResolve
    this.onReject = onReject
  }
}

// let p = new Promise((resolve, reject) => {
//   //做一些异步操作
//   console.log('立即执行')
//   setTimeout(() => {
//     console.log('执行完成');
//     resolve('我是成功！！');
//   }, 2000);
// }).then(data => {
//   console.log(data);
// }, err => {
//   console.log(err);
// })


let p = new MyPromise((resolve, reject) => {
  //做一些异步操作
  console.log('立即执行')
  setTimeout(() => {
    console.log('执行完成');
    resolve('我是成功！！');
  }, 2000);
}).then(data => {
  console.log(data);
}, err => {
  console.log(err);
})

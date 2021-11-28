// let fn = () => {
//   return new Promise((resolve, reject) => {
//     let resNum = Math.random() * 10;
//     if (resNum > 8) resolve(resNum)
//     else reject(resNum)
//   })
// }

async function retry (fn, times) {
  let num = 0
  return new Promise((resolve, reject) => {
    async function resum () {
      try {
        let res = await fn()
        console.log(res, '成功');
        resolve(res)
      } catch (error) {
        console.log(error, '失败');
        num++
        if (times > num) resum()
        else reject('重试失败')
      }

      // fn().then(res=> {
      //   console.log(res, '成功');
      //   resolve(res)
      // }).catch(err=>{
      //   console.log(err, '失败');
      //   num++
      //   if(num < times) resum()
      //   else reject("重试失败")
      // })

    }
    resum()
  })
}

// retry(fn, 3).then(res => {
//   console.log(res, 99);
// },rej => {
//   console.log(rej, 993);
// })


const fn = (type, msg) => {
  return new Promise((resolve, reject) => {
      if (type) {
          resolve(`success:${msg}`)
      } else {
          reject(`fail:${msg}`)
      }
  })
  // .then(res=>{
  //   console.log(res, 999);
  // }, err=> {
  //   console.log('errorX', err);
  // })
  .catch(err=>{
    console.log('errorX', err);
  })
}
// 捕获异步中的错误1
// const asyncFn = async () => {
//   try {
//       let result1 = await fn(false, 'hello')
//       console.log('中间内容输出')
//       let result2 = await fn(false, 'world')
//       console.log('result1' + result1)
//       console.log('result2' + result2)
//   } catch (error) {
//       console.log('catch:' + error)
//   }
// }
// 捕获异步中的错误2
const asyncFn = async () => {
  try {
      let res = await fn(true, 'hello')
      console.log('中间内容输出', res)
      await fn(false, 'world')
  } catch (error) {
      console.log('catch:' + error)
  }
}
asyncFn();




function recall (fn, num, ...arg) {
  function recallFn (...arg) {
    return new Promise((resolve, reject) => {
      fn(arg, (err, data) => {
        console.log(err, data, "kk");
        if (!err) resolve(data)
        else reject("shibai")
      })
    })
  }
  recallFn(...arg)
    .then(
      value => {
        console.log('success', value);
      }
    ).catch(
      err => {
        if(0 == num) {
          reject(err)
        }else {
          num--
          recallFn(...arg) 
        }
      })
}

// function testFn(arg, fn) {
//   fn(1, "result")
// }

// recall(testFn, 10, 8838)

function getData () {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
      console.log('随机数生成的值：', num)
      if (num <= 10) {
        console.log('符合条件，值为' + num)
        resolve(num);
      }
      else {
        reject('数字大于10了执行失败');
      }
    }, 500);
  })
  return p
}


// function myGetData (getData, times, delay) {
//  new Promise(function (resolve, reject) {
//     function attempt () {
//       getData().then(resolve).catch(function (erro) {
//         console.log(`还有 ${times-1} 次尝试`)
//         if (1 == times) {
//           reject(erro)
//         } else {
//           times--
//           attempt()
//         }
//       })
//     }
//     attempt()
//   }).catch((err)=>{
//     console.error(err)
//   })
// }


myGetData(getData, 2)

function myGetData(fn, times) {
  new Promise((resolve, reject)=> {
    function attempt(){
      fn().then(resolve).catch(err=> {
        if(0 == times-2){
          reject(err)
        }else{
          times--
          attempt()
        }
      })
    }
    attempt()
  }).catch(error=>{
    console.error(error);
  })
}

// promise中捕获错误，可以在then第二个参数中，也可以在catch中，如果这里边还出错，就会最终抛到进程中，做法是在进程中监听时间禁止掉，或者是在上层promise中.catch(()=> {})
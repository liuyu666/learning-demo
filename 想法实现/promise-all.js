function MyPromiseAll (iterators = []) {
  return Promise((resolve, reject) => {
    if (iterators.length === 0) resolve([])
    const result = []
    for (let index = 0; index < iterators.length; index++) {
      const element = iterators[index];
      result[index] = Promise.resolve(element).then(data => { //不一定是promise
        if (index === iterators.length) resolve(result)
      }, err => {
        reject(err)
      })
    }
  })
}

const ppp = function (res, time, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) reject(res)
      resolve(res)
    }, time)
  })
}


// const inputs = [ppp(23, 1000), ppp(23, 2000), ppp(23, 4000)];
// async function main () {
//   const result = await pReduce(inputs, async (a, b) => a + b, 1);
//   console.dir(result); // 输出结果：15
// }


async function main () {
  // const result = await Promise.all([ppp(63, 3000), ppp(62, 7000), ppp(66, 600)])
  // console.log(result); // 输出结果：15
  const res = await Promise.resolve(ppp(63, 1000)).then(data => {

    console.log(data)
    return data
  }, err => {

    console.log(err)
  })
  console.log(res)
}

main()


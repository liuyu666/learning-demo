function asyncToGenerator (generatorFunc) {
  return function () {
    const gen = generatorFunc.apply(this, arguments)
    return new Promise((resolve, reject) => {
      function step (key, arg) {
        let generatorResult
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }
        const { value, done } = generatorResult
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step("next")
    })
  }
}

function p (res, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve('success') : reject('fail')
    }, time);

  })
}
function* gene () {
  const data1 = yield p(true, 100)
  console.log(data1, 'data1')

  const data2 = yield p(true, 100)
  console.log(data2, 'data2')
}

const ge = gene()

const aa = ge.next()
const bb = ge.next(aa)
const cc = ge.next(bb)
const dd = ge.next(cc)
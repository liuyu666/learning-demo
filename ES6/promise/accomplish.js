const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {

  status = PENDING
  fullfilledStack = []
  rejectedStack = []

  constructor(actuator) {
    const resolve = (value) => {
      console.log(this)
      for (const cb of this.fullfilledStack) {
        cb(value)
      }
    }
    const reject = (value) => {
      for (const cb of this.rejectedStack) {
        cb(value)
      }
    }
    actuator(resolve, reject)
  }

  then (res, rej) {
    return new MyPromise((resolve, reject) => {
      const resCb = (v) => {
        const result = res(v)
        try {
          if (result instanceof MyPromise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      this.fullfilledStack.push(resCb)
      const rejCb = (v) => {
        const result = rej(v)
        try {
          if (result instanceof MyPromise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      this.rejectedStack.push(rejCb)
    })

  }

}


new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(666)
  }, 1000);
}).then((data) => {
  console.log(data)
  return 2
}, (err) => {
  console.log(err)
}).then((data) => {
  console.log(data)
  return new MyPromise(resolve => {
    setTimeout(() => {
      resolve(55)
    }, 1000);
  })
}, (err) => {
  console.log(err)
}).then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
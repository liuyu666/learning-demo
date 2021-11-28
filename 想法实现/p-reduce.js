async function pReduce (iterable, reducer, initialValue) {
  return new Promise((resolve, reject) => {
    const iterator = iterable[Symbol.iterator]()
    let index = 0
    const next = async (total) => {
      const { value, done } = iterator.next();

      if (done) {
        resolve(total)
        return
      }
      const [pre, cur] = await Promise.all([total, value])
      next(reducer(pre, cur, index++))
    }
    next(initialValue)
  })
}


const ppp = function (res, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(res);
    }, time);
  });
};
const inputs = [ppp(33, 3000), ppp(33, 3000), ppp(33, 1000), ppp(33, 4000), ppp(33, 4000)]
console.log(inputs, 9999998)
async function main () {

  console.time()
  const result = await pReduce(inputs, (a, b) => a + b, 0);
  console.dir(result); // 输出结果：15
  console.timeEnd()
};

main();
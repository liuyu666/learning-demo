// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key

// [1, 2, 3]

let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key'
function getUrlDetail(url, key) {
  let str = url.split('?')[1];
  let params = new URLSearchParams('?'+ str)
  // function getValueByKey(key) {
  //   const res = []
  //   for (const iterator of params.entries()) {
  //     iterator[0] == key?res.push(iterator[1]): ''
  //   }
  //   return res
  // }
  if(key)return params.getAll(key)
  else {
    const result = {}
    for (const iterator of new Set(params.keys())) {
      console.log(iterator, 9987);
      result[iterator] = params.getAll(iterator)
    }
    return result
  }
}

let params1 = getUrlDetail(url)
console.log(params1);
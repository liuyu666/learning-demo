// 根据包名，在指定空间中创建对象
// 输入描述:
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述:
// {a: {test: 1, b: {c: {d: {}}}}}

function namespace(obj, path) {
  let res = obj, tmp = obj;
  path.split('.').forEach((item)=> {
    if(typeof tmp == "object") {
      tmp.hasOwnProperty(item)? '': tmp[item] = {}
    }
    if(typeof tmp[item] !== "object") {
      tmp[item] = {}
    }
    tmp = tmp[item]
  })
  return res
}


let obj1 = namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
console.log(JSON.stringify(obj1));
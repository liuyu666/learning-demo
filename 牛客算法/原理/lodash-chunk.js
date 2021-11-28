let _ = {
  chunk(arr, num) {
    if(num == 0) console.log([]); 
    let resArr = []
    for (let index = 0; index < arr.length; index = index+num) {
      resArr.push(arr.slice(index, index+num))
    }
    console.log(resArr); 
  }
}

// _.chunk(['a', 'b', 'c', 'd', 'e'], 2)
// // => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3)
// // => [['a', 'b', 'c'], ['d']]

// _.chunk(['a', 'b', 'c', 'd'], 5)
// // => [['a', 'b', 'c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 0)
// // => []




try {
  (async function() { a().b().c() })()
} catch (e) {
  console.log(`执行出错：${e.message}`)
}
function makeIterator(data) {
    let index = 0, length = data.length;
    return {
        next: function() {
            let res = length > index? {value: data[index], done: false}: { value: undefined, done: true }
            index++;
            return res;
        }
    }
}

var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// it.next() // { value: "a", done: false }
// it.next() // { value: "b", done: false }
// it.next() // { value: undefined, done: true }

Object.prototype[Symbol.iterator] = function() {
    let len = Object.keys(this).length
    let keys = Object.keys(this)
    let index = 0
    return {
        next: function() {
            return len > index? {value: keys[index++], done: false}: {value: undefined, done: true}
        }
    }
}

let obj = {
    a: 'de',
    cew: 'dewce3'
}
console.log(obj, 'obj');
for (const iterator of obj) {
    console.log(iterator, 999);
}

let arr = [2,3,4,5,45]

let iterator = arr[Symbol.iterator]()

console.info(arr[Symbol.iterator]);
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
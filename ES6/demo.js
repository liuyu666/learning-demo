let p = new Promise(function(resolve,reject){

})

p.then(val=>{},err=>{})

let then = x.then;
//===================================
var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"Bill",
    lastName: "Gates"
}
person.fullName.call(person1, "Seattle", "USA");

//=====================================

then.call(x, y => {
    // 成功和失败只能调用一个
    if (called) return;
    called = true;
    // resolve的结果依旧是promise 那就继续解析
    resolvePromise(promise2, y, resolve, reject);
}, err => {
    // 成功和失败只能调用一个
    if (called) return;
    called = true;
    reject(err);// 失败了就失败了
})


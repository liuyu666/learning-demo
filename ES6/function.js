function Fn(name){
    this.name = name
}
Fn.prototype.then =function(){

}
var p = new Fn("fire")
console.log(typeof p)
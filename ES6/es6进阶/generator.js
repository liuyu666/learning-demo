class Foo {
  constructor() {
    this.values = [2,4,5,6]
  }
  // * [Symbol.iterator]() {
  //   yield* this.values
  // }
  [Symbol.iterator]() {
    let values = this.values
  //   let i = 0
  //   return {
  //     next: ()=>{
  //       if(i<values.length) return {value: values[i++], done: false}
  //       else return {done: true}
  //     }
  //   }
    return (function* (){
      for (let index = 0; index < values.length; index++) {
        yield values[index];
      }
    })()
  }

}

const f = new Foo()
for (const xx of f) {
  console.log(xx);
}
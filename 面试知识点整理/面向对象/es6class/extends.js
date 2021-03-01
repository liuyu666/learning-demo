class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Student extends Person {
  constructor(name) {
    super(name)
    this.name = "uu"
  }
  getName() {
    console.log(super.getName(), 99); 
    return this.name + '!'
  }
}

let xiaoming = new Student('xiaoming')

console.log(xiaoming.getName());


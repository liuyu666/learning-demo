const isObject = (data)=> Object.prototype.toString.call(data) === '[object Object]';
class Observer{
  constructor(targetObject) {
    def(targetObject, '__ob__', this);
    this.walk(targetObject)
    this.dep = new Dep()
  }
  walk(data) {
    if(isObject(data)){
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          defineReactive(data, key, element)
        }
      }
    }
  }
}

function def(object, key, value, enumerable) {
  Object.defineProperty(object, key, {
    writable: true,
    enumerable: !!enumerable,
    configurable: true,
    value
  })
}

function defineReactive(object, key, value) {
  observer(value)

  Object.defineProperty(object, key, {
    configurable: true,
    enumerable: true,
    get() {
      const ob = this.__ob__
      ob.dep.depend()
      return value
    },
    set(newValue) {
      if(newValue === value) return
      value = newValue
      const ob = this.__ob__
      ob.dep.notify()
    }
  })
}

function observer(data) {
  if(isObject(data)) new Observer(data)
}

class Watcher{
  constructor(vm, key, fn) {
    this.vm = vm
    this.key = key
    this.fn = fn
    Dep.target = this
    this.vm[key] //get收集依赖
  }
}
class Dep{
  constructor() {
    this.subs = []
  }
  addSubs(watcher) {
    this.subs.push(watcher)
  }
  depend() {
    !this.subs.includes(Dep.target)? this.subs.push(Dep.target) : ''
    console.log(this.subs, 999);
  }
  notify() {
    for (const watcher of this.subs) {
      watcher.fn()
    }
  }
}

const obj = {
  a:2,
  b:{
    c:3
  },
  d: 9
}
new Observer(obj)
new Watcher(obj, 'a', ()=> {
  console.log('a is changed')
})
new Watcher(obj, 'd', ()=> {
  console.log('d is changed')
})

const b = obj.b
new Watcher(b, 'c', ()=> {
  console.log('c is changed')
})


obj.a = 66
obj.b.c = 77

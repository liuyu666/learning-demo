
/**
  let events = {
    sleep:{
      fn1: (args)=>{fn1(args)},
      fn2: (args)=>{fn2(args)},
      fnZ: (args)=>{fnZ(args), off()},
    }
  }
 */

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('my_event', (n) => {
  console.log('data received successfully.', n);
});

eventEmitter.emit('my_event', 888);
// class EventEmitter{
//   constructor() {
//     this.events = new Map()
//   }
//   addEvent(name, fn, isOnce, args) {
//     this.events.has(name)? this.events.get(name).set(fn, (args1)=>{
//       fn(...args,...args1)
//       if(isOnce) this.off(name, fn)
//     }): this.events.set(name, new Map().set(fn, (args1)=>{
//       fn(...args,...args1)
//       if(isOnce) this.off(name, fn)
//     }))
//   }
//   on(name, fn, ...args) {
//     this.addEvent(name, fn, false, args)
//   }
//   fire(name, ...args) {
//     if(!this.events.has(name)){
//       throw Error("not have this event")
//     }else {
//       for (const [,cb] of this.events.get(name).entries()) {
//         cb(args)
//       } 
//     }
//   }
//   off(name, fn) {
//     console.log('hh', this.events.get(name).get(fn));
//     this.events.has(name)? this.events.get(name).delete(fn): ''
//   }
//   once(name, fn, ...args) {
//     this.addEvent(name, fn, true, args)
//   }
// }

// let event = new EventEmitter();
// // on fire off once

// let fn1 = (...args)=> {console.log(...args)}
// let fn2 = (...args)=> {console.log(...args)}
// event.on('sleep', fn1, 1, 2, 3)
// event.on('sleep', fn2, 3, 4, 5)
// event.fire('sleep', 8)
// //1, 2, 3, 8
// // 3, 4, 5, 8
// event.off('sleep', fn1)
// event.fire('sleep', 8)
// // 3, 4, 5, 8
// event.once('sleep', (...args)=>{console.log('once', ...args);}, 99)
// event.fire('sleep')
// // 3, 4, 5
// // 99
// event.fire('sleep')
// // 3, 4, 5
// let fm1 = ()=>{}
// console.log(fm1, 'fm1');

// function fm2() {}
// console.log(fm2, 'fm2');
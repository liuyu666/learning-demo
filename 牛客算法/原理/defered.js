function Deferred (){
  return {promise: Promise}
}
const func = ()=>{
  let deferred = new Deferred();

  setTimeout(()=>{
    deferred.resolve({id: 1});
  }, 1000);

  return deferred.promise;
}

func()
// .then((data)=>{
//   console.log(data);
// })
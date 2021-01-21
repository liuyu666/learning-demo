/* 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素
 B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。*/

 let arr = [1,2,3,4]

function multiply(array){
    var b = [];
    b[0] = 1;
    for(let i = 1;i<array.length;i++){
        b[i]=array[i-1]*b[i-1]
    }
    console.log(b)
    let temp = 1;
    for(let j = array.length-2;j>=0;j--){
        temp*= array[j+1]
        b[j] *= temp
    }
    console.log(b)
    return b
}
multiply(arr)
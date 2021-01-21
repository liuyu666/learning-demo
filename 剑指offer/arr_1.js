/*
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序
 * 排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。*/
var arr = [
    [1,2,3,4,5],
    [2,3,4,5,6],
    [3,4,5,6,7],
    [4,5,6,7,8]
]
function findArr(arr,num){
    var iLength = arr.length;
    var jLength = arr[0].length;
    for(var i = iLength-1,j=0;i>=0,j<jLength-1;){
        if(num > arr[i][j]){
            j++;
        }else if(num < arr[i][j]){
            i--;
        }else{
            console.log(true)
            return true
        }
    }
    
    console.log(false)
    return false
}

function find(arr,num){
    var iLength = arr.length;
    var jLength = arr[0].length;
    var i = iLength-1,j=0;
    while(i>=0&&j<=jLength-1){
        console.log(`a[${i}][${j}]`)
        if(num > arr[i][j]){
            j++;
        }else if(num < arr[i][j]){
            i--;
        }else{
            console.log(1)
            return true
        }
    }
    console.log(2)
    return false
}

// findArr(arr,10)
find(arr,1)
/*
在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个
数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度
为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
*/
function duplicate(numbers, duplication){
    let len = numbers.length
    var arr = []
    while(len--){
        var val = numbers[len];
        if(arr[val]!=undefined){
            duplication[0] = val
            console.log(duplication[0])
            return true
        }else{
            arr[val] = len
        }
    }
    return false
}

var arr = [3,4,5,23,8]
var duplication = []
duplicate(arr, duplication)
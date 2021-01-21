/**
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，
 * 第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
 */
function showFirst(str,num){
    let temp = [];
    for(let i = 0;i<num;i++){
        if(temp.find(str[i])){
            //如果已有值，从result中去除
            
        }else{
            //如果没有值加一下，并且分两种情况：
            temp.push(str[i]);
            // 1.是第一个
            result.str[i] = i
            // 2.不是第一个
        }
    }
}
var obj = {
    cishu:1,
    value:"g",
    firstIndex:1    
}
// google
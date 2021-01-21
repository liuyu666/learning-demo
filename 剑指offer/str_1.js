function reg(s,pattern){
    if(pattern.length==0&&s.length!=0){
        console.log(false)
        return false
    }
    if(pattern.length==0&&s.length==0){
        console.log(true)
        return true
    }
    if(pattern.length!=0&&s.length==0){
        let pLen = pattern.length
        while(pLen){
            // if()
        }
    }
}
var s = "ghl";
var pattern = ".hl"
console.log(s[0])
console.log(pattern.length)

s = ""
p = "a*a*"
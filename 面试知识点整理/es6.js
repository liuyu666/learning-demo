//1.新变量声明方式：let/const;

//2.箭头函数的使用
//无this
var fn = function(a, b) {
    return a + b;
}

// es6 箭头函数写法，当函数直接被return时，可以省略函数体的括号
const fn = (a, b) => a + b

//3.模板字符串
`${a}+${b}=${a+b}`

//4.解构
// es5
var loading = props.loading;
var clicked = props.clicked;

// es6
const { loading, clicked } = props;

// 给一个默认值，当props对象中找不到loading时，loading就等于该默认值
const { loading = false, clicked } = props;

// 5.函数默认参数
//防止传入未定义赋值的变量
function add(x = 20, y = 30) {
    return x + y;
}

console.log(add());

//6.展开运算符
//在ES6中用...来表示展开运算符
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 10, 20, 30];

//7.对象字面量 
// 属性与值相同，省略值
const name = 'Jane';
const age = 20

// es6
const person = {
  name,
  age,
  getName() { // 只要不使用箭头函数，this就还是我们熟悉的this
    return this.name
  }
}
const person = {
  [name]: true,
  [age]: true
}

// class
/*https://www.cnblogs.com/lianjq/p/6952019.html*/
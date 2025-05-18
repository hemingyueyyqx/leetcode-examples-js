// String.prototype.replaceAll
const str = "hello world"
console.log(str.replace('l', 'd')); 
console.log(str.replaceAll('l','d'));
console.log(str.repeat(3));
//  Promise.any 和 AggregateError
const promises = [
    Promise.reject(1),
    Promise.reject(2),
    Promise.reject(3)
]
Promise.any(promises).then(data => {
    console.log(data);
    
}).catch(error => {
    console.log(error);
    
})
// WeakRef
// 逻辑运算符和赋值表达式(&&=,||=,??=)
let x = 1;
let y = 2;
x ??= y;
console.log(x);
// 数字分隔符
const n = 1_000_000_000
console.log(n);


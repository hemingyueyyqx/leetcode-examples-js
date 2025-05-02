const arr = [1,2,3,4]
// 方法一
// console.log(Array.isArray(arr));
//方法二
// console.log(Object.prototype.toString.call(arr));
// console.log(Object.prototype.toString.call(arr) === '[object Array]');
// 方法三
// console.log(arr instanceof Array);
// 方法四 对象的 constructor 属性指向创建该对象的构造函数。可以通过检查 constructor 是否为 Array 来判断变量是否为数组。
console.log(arr.constructor === Array);


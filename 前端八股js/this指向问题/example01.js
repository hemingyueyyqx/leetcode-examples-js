// function myFun() {
//     console.log(this);
    
// }
// function myFun1() {
//     console.log(this);
//     myFun();
// }
// myFun1();
// //游览器环境下window，
//node环境下是
//`setTimeout`函数的回调函数中的 `this` 默认是指向一个空对象的，
//而不是指向全局对象`global`，
//这个空对象称为“定时器对象”（Timer object）。
// setTimeout(function () {
//     console.log(this);
    
// },0)
// let names = ['zhaimou', 'zhaione', 'zhaitwo']
// names.forEach(function (item) {
//     //回调函数后，不加参数，指向全局
//     //加参数指向参数
//   console.log(item, this)
// },'abc')
// names.map(function (item) {
//     //回调函数后，不加参数，指向全局
//     //加参数指向参数
//   console.log(item, this)
// })
// const obj1 = {
//   name: 'obj1',
//   foo: function () {
//     console.log(this)
//   }
// }
// let obj2 = {
//   name: 'obj2',
//   bar: obj1.foo
// }
// obj2.bar() //{ name: 'obj2', bar: [Function: foo]}
// function fn() {
//   console.log(this)
// }
// const obj = {
//   foo: fn
// }
// const cloneObj = {
//   foo1: obj
// }
// cloneObj.foo1.foo() // obj
// const obj = {
//   foo: function () {
//     (function () {
//       console.log(this)
//     })()
//   }
// }
// obj.foo()
const obj = {
  foo: function () {
    function fn() {
      console.log(this)
    }
    return fn()
  }
}
obj.foo()


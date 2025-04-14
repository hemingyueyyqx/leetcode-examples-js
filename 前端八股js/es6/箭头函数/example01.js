const obj = {
  name: 'Alice', // 定义一个对象属性 name，值为 'Alice'
  sayName: function() {
    console.log(this.name); // 输出当前对象的 name 属性值，即 'Alice'

    // 使用箭头函数作为 setTimeout 的回调函数
    setTimeout(() => {
      console.log(this.name); // 输出当前对象的 name 属性值，即 'Alice'
      // 箭头函数不会创建自己的 this 上下文，而是捕获外层函数的 this
      // 因此这里的 this 指向 obj 对象
    }, 100);
  },
    sayNameError: function () {
      console.log('111',this.name);
        // 使用普通函数作为 setTimeout 的回调函数
        //在 setTimeout 中运用普通函数作为回调时，这个回调函数会以普通函数的形式被调用。所以在非严格模式下，this 指向全局对象（浏览器环境下是 window）。
    setTimeout(function() {
      console.log(this.name); // 输出 undefined
      // 普通函数有自己的 this 上下文，默认指向全局对象（浏览器中是 window）
      // 因此这里的 this 不指向 obj 对象，而是 window 对象
      // 由于 window 对象中没有 name 属性，所以输出 undefined
    }, 100);
  }
};
// console.log(obj);
obj.sayName()
obj.sayNameError()
function outer(a, b) {
  const inner = () => {
    // arguments 是一个特殊的类数组对象，它包含了函数调用时传入的所有参数。
    console.log(arguments); // 访问outer的arguments
  };
  inner();
}
outer(1, 2); // [1, 2]
let obj1 = {};
console.log(obj1.__proto__); // 输出: [object Object], 即 obj 的原型是 Object.prototype
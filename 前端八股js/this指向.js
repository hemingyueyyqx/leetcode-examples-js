let obj = {
  name: 'why',
  foo: function () {
    console.log(this)
  }
}
obj.foo()
// 3.数组.forEach/map/filter/find
// forEach 方法：
// forEach 方法对数组的每个元素执行一次提供的回调函数。
// 回调函数接收三个参数：当前元素、当前元素的索引和数组本身。在这个例子中，只使用了第一个参数 item。
// 第二个参数 'abc' 是 thisArg，它会在回调函数中作为 this 的值。所以在 forEach 的回调函数里，this 指向 'abc'。
// map 方法：
// map 方法创建一个新数组，其结果是该数组中的每个元素都调用一次提供的回调函数后返回的结果。
// 同样，回调函数接收三个参数，这里只使用了第一个参数 item。
// 第二个参数 'cba' 是 thisArg，它会在回调函数中作为 this 的值。所以在 map 的回调函数里，this 指向 'cba'。
let names = ['zhaimou', 'zhaione', 'zhaitwo']
names.forEach(function (item) {
  console.log(item, this)
}, 'abc')
names.map(function (item) {
  console.log(item, this)
}, 'cba')


// 立即执行函数
const obj1 = {
  foo: function () {
    (function () {
      console.log("111",this)
    })()
  }
}
obj1.foo()
// 另一种情况
const obj2 = {
  foo: function () {
    function fn() {
      console.log("222",this)
    }
    return fn()
  }
}

obj2.foo()
// 当调用obj.foo()方法时，this指向obj对象。
// 但是当obj.foo()方法执行时,创建一个新函数执行，又用到fn()，所以最后又绑定到全局对象上

// fn.bind('123') 创建了一个新的函数 newFn，当调用 newFn() 时，this 会被绑定到 '123'。然后对 newFn 再次调用 bind('1234') 创建 anotherFn，但由于 bind 方法只能绑定一次 this，所以调用 anotherFn() 时，this 仍然指向 '123'。
function fn() {
    console.log(this);
}

// 创建一个新函数，将 this 绑定到 '123'
const newFn = fn.bind('123');
// 调用新函数
newFn();

// 尝试再次使用 bind 绑定 this 到 '1234'，但实际上不会生效
const anotherFn = newFn.bind('1234');
anotherFn();

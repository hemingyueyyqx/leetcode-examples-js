// 这段 JavaScript 代码定义了一个 extend 函数用于实现继承，通过设置原型链和代理机制，使 Boy 类继承自 Person 类，并在实例化 Boy 类的对象 Peter 时，能同时调用父类和子类的构造函数并访问到子类原型上定义的属性。

//这个函数用于实现继承关系，它接受两个参数 sup（父类）和 base（子类）。
function extend(sup, base) {
    //Object.getOwnPropertyDescriptor 方法用于获取对象自身属性的描述符。
    // 参数：
// obj：要获取属性描述符的对象。
// prop：要获取其描述符的属性名（字符串或 Symbol 类型）。
    // 返回值：返回一个对象，该对象包含指定属性的属性描述符。如果指定的属性不存在于对象中，则返回 undefined。
    // 属性描述符是一个对象，它包含了属性的一些元信息，例如属性的值（value）、是否可写（writable）、是否可枚举（enumerable）以及是否可配置（configurable）等。一个属性描述符可以是数据描述符（包含 value 和 writable），也可以是存取描述符（包含 get 和 set），但不能同时包含两者。
    //获取子类 base 的原型对象上的 constructor 属性描述符
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    "constructor",
    );
    //将子类 base 的原型对象设置为父类 sup 原型对象的一个实例。这样，子类就可以继承父类的属性和方法。
    base.prototype = Object.create(sup.prototype);
    var handler = {
      //construct：当使用 new 关键字调用代理对象（proxy）时，会触发这个方法。它创建一个新的对象 obj，并将其原型设置为 base.prototype，然后通过 this.apply 方法调用 target（即 base）的构造函数，并将新创建的对象 obj 作为 this 上下文传递进去。最后返回这个新创建的对象。
    construct: function (target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
      },
      //apply：当代理对象（proxy）被直接调用时，会触发这个方法。它首先调用父类 sup 的构造函数，然后调用子类 base 的构造函数，这样就实现了在实例化子类时，同时执行父类和子类的构造逻辑。
    apply: function (target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
    };
    // 创建了一个代理对象 proxy，它代理了子类 base，并使用 handler 对象来处理代理的行为。
    var proxy = new Proxy(base, handler);
    console.log("proxy000",proxy);
    
    //将 constructor 属性描述符的值设置为代理对象 proxy。
    descriptor.value = proxy;
    //将修改后的 constructor 属性描述符重新定义到子类 base 的原型对象上。
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function (name) {
  this.name = name;
};

var Boy = extend(Person, function (name, age) {
  this.age = age;
});
console.log("Boy",Boy);


Boy.prototype.height = "180"
Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log("Peter",Peter);

console.log(Peter.sex); // "M"
console.log(Peter.height);

console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13

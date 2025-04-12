let originalObj = {
  a: 1,
  b: { c: 2 }
};
 
// 使用 Object.create() 创建新对象
let newObj = Object.create(originalObj);
 
console.log(newObj.a);   // 1 (继承自 originalObj)
console.log(newObj.b.c); // 2 (继承自 originalObj)
 
// 修改 newObj 的 b 属性（引用类型），会影响 originalObj
newObj.b.c = 100;
 
console.log(newObj.b.c);       // 100 （修改了 newObj 也修改了 originalObj 中 b 的内容）
console.log(originalObj.b.c);  // 100 （原型对象也被影响）
 
// 添加新属性到 newObj
newObj.a = 500;
console.log(originalObj.a);    // 1 （原型对象中的原始类型属性不会被影响）
console.log(newObj.a);         // 500 （新属性直接添加到了 newObj 自身）
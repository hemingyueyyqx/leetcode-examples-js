function deepClone(obj, map = new WeakMap()) {
  // 处理原始值、null、函数、日期、正则等特殊对象
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // 处理日期对象
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // 处理正则表达式
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 处理循环引用
  if (map.has(obj)) {
    return map.get(obj);
  }

  // 创建新对象/数组
  const clone = Array.isArray(obj) ? [] : {};
  
  // 记录对象引用
  map.set(obj, clone);

  // 递归拷贝所有属性
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}

// 使用示例
const original = { name: "Alice" };
original.self = original; // 创建循环引用

const cloned = deepClone(original);
console.log(cloned); // 正常输出，没有无限循环
console.log(cloned.self === cloned); // true，保持引用关系
// const original1 = new Date('2023-01-01');
// const clone = { ...original1 }; // 正确复制时间值
// console.log(clone instanceof Date);
const arr = { name: "hmy", adress: [1, 2, 3] }
arr.c = arr;
console.log(arr);
console.log(deepClone(arr).c === arr);

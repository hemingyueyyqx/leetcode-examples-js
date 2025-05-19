// function deepClone(obj) {
//   if (typeof obj !== "object" || obj === null) return obj; // 处理原始类型或 null
//   let copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copy[key] = deepClone(obj[key]); // 递归拷贝每个属性
//     }
//   }
//   return copy;
// }
//  let obj = { a: 1, b: { c: 2 }, d: [3, 4], e: new Date() };


// let obj = { a: 1, b: { c: 2 }, d: [3, 4] };
// let deepCopy = deepClone(obj);
 
// deepCopy.b.c = 100;
// deepCopy.d[0] = 300;
// console.log(obj.b.c);       // 输出: 2
// console.log(obj.d[0]);      // 输出: 3
// console.log(deepCopy.b.c);  // 输出: 100
// console.log(deepCopy.d[0]); // 输出: 300
const obj = { name: "hmy" };
obj.self = obj;
let deepCopy = structuredClone(obj);
console.log(deepCopy);

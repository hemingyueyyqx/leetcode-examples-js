// Array.prototype.toSorted
const arr = [1, 8, 9, 3, 5];
// arr.sort((a, b) => a - b);
// arr.toSorted()
console.log(arr.toSorted((a, b) => b-a));
console.log(arr);
console.log(arr);
const objects = [
  { name: "Charlie",age:18 },
  { name: "Alice",age:17 },
  { name: "Bob" ,age:19}
];

const sortedObjects = objects.toSorted((a, b) => {
  return a.name.localeCompare(b.name);
});
const sortedObjects1 = objects.toSorted((a, b) => {
  return a.age-b.age;
});
console.log(sortedObjects);
console.log(sortedObjects1);

// 输出结果：
// [
//   { name: "Alice" },
//   { name: "Bob" },
//   { name: "Charlie" }
// ]
const arr1 = ["heelo", "apple", "lemon"]
console.log(arr1.toSorted((a, b) => a.localeCompare(b)))
// Array.prototype.toReversed
console.log(arr1.toReversed())
console.log(arr1);
// Array.prototype.with
console.log(arr.with(1, 4));
console.log(arr);
// Array.prototype.toSpliced
// console.log(arr1.splice(2, 1, "banana", "orange"))
console.log(arr1.toSpliced(2,1,"banana","orange"))
console.log(arr1);


//数组拍平
//数组合并
//数组去重
// 调用 arr.sort() 对 arr 数组进行排序。由于 sort() 是一个会改变原数组的方法，arr 数组内元素的顺序会直接被修改。同时，sort() 方法会返回排序后的原数组，所以 sort 变量实际上指向的就是排序后的 arr 数组。
const arr = ['b', 'a', 'c'];
// const sort = arr.sort();
// console.log(arr);
// console.log(sort);
// const arr1 = [3, 1, 2];
// const sort1 = arr1.sort((a,b)=>a-b);
// console.log(arr1);
// console.log(sort1);
// 如果你不希望原数组被改变，而是想要得到一个新的已排序数组，可以先复制原数组，再对复制后的数组进行排序
const sortArr = [...arr].sort();
// console.log(arr);
// console.log(sortArr);
// arr.reverse()会改变原数组
const reverseArr = arr.reverse();
console.log(arr);
console.log(reverseArr);







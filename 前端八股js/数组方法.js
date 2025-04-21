//数组拍平
//数组合并
//数组去重

// const { log } = require("node:console");

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
// const reverseArr = arr.reverse();
// console.log(arr);
// console.log(reverseArr);
const str = arr.join('/');
// console.log(str);
const array = [1,2,3,4,5,6]
// console.log(array.slice(-1));
// console.log(array.splice(2,2,8,9));
// console.log(array.toString());
// console.log(array.valueOf());
const date = new Date('2024-01-01');
const timestamp = date.valueOf();
// console.log(timestamp); // 输出对应时间戳?
const customObj = {
    value: 100,
    // valueOf: function() {
    //     return this.value;
    // }
};

// console.log(customObj.valueOf()); // 输出: 100

// console.log(array.lastIndexOf(4));
// console.log(array.fill(1));

// 示例 1：默认深度为 1
// const arr1 = [1, [2, [3, 4]]];
// const flattened1 = arr1.flat();
// console.log(flattened1);
// // 输出: [1, 2, [3, 4]]

// // 示例 2：指定深度为 2
// const flattened2 = arr1.flat(2);
// console.log(flattened2);
// // 输出: [1, 2, 3, 4]

// // 示例 3：使用 Infinity 完全扁平化
// const arr2 = [1, [2, [3, [4, [5]]]]];
// const flattened3 = arr2.flat(Infinity);
// console.log(flattened3);
// // 输出: [1, 2, 3, 4, 5]
// // console.log(arr1.flatMap(x => x.map(y => y * 2)));
// // 示例 2：处理嵌套数组并扁平化
// const arr4 = [[1], [2], [3]];
// const result2 = arr4.flatMap(x => x*2);
// console.log( "999",result2);
// 输出: [2, 4, 6]
const arr1 = [1, [2, [3, 4]]];

// 简单使用 flatMap，将元素包装成数组后扁平化一层
const result1 = arr1.flatMap(item => [item]);
// console.log("111",result1); 

// 自定义映射函数，尝试处理嵌套情况
const result2 = arr1.flatMap(item => {
    if (Array.isArray(item)) {
        return item;
    }
    return [item];
});
// console.log("222",result2);
   	var arr5 = [2, 3, 4, 5];
    var sum = arr5.reduce(function (prev, item, index, array) {
      console.log(prev, item, index, array);
      return prev + item;
    }, 0);
console.log(arr5, sum);
    var arr6 = [2, 3, 4, 5];
    var sum = arr6.reduceRight(function (prev, item, index, array) {
      console.log(prev, item, index, array);
      return prev + item;
    }, 0);
    console.log(arr6, sum);

    











const readline = require('readline');

// 创建 readline 接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        //补数
        let complement = target - nums[i];
        //如果map中有，直接返回
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        //将当前值和索引加入map
        map.set(nums[i], i);
    }
    return [];
}
// const nums = [2, 7, 9, 0, 8]
// console.log(twoSum(nums,9));
// 提示用户输入
rl.question('请输入类似 nums = [2,7,11,15], target = 9 的内容: ', (input) => {
    // 解析输入的数组部分
    const numsMatch = input.match(/nums = \[([\d,]+)\]/);
    console.log(numsMatch);
    // 解析输入的目标值部分
    const targetMatch = input.match(/target = (\d+)/);
    console.log(targetMatch);
    
    if (numsMatch && targetMatch) {
        // 将匹配到的数组字符串转换为数组
        //map 是 JavaScript 数组对象的一个方法，用于对数组中的每个元素执行一个指定的函数，并返回一个新数组，新数组中的元素是原数组元素经过函数处理后的结果。
// Number 是 JavaScript 的一个内置函数，用于将值转换为数字类型。在这里，map(Number) 表示对 split 方法返回的数组中的每个元素都调用 Number 函数进行转换。例如，对于数组 ['2', '7', '11', '15']，使用 map(Number) 后会得到一个新的数组 [2, 7, 11, 15]，数组中的元素已经变成了数字类型。
        const nums = numsMatch[1].split(',').map(Number);
        // 将匹配到的目标值字符串转换为整数
        const target = parseInt(targetMatch[1]);
        // 调用两数之和函数计算结果
        const result = twoSum(nums, target);
        console.log(result);
    } else {
        console.log('输入格式不正确，请按照 nums = [2,7,11,15], target = 9 的格式输入。');
    }
    // 关闭 readline 接口
    rl.close();
});
// console.log(num); // 输出: undefined
// var num = 10;
// console.log(num); // 输出: 10
// console.log(y); // 抛出 ReferenceError
// let y = 30;
// var a = 10;
// const b = () => {
//     var a = 20;
// }
// b();
// console.log(a);

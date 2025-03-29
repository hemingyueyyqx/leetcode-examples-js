/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums) {
        return 0;
    }
    const set = new Set(nums);
    let result = 1;
    for (let num of set) {
        //如果没有num-1，证明当前元素是起始元素
        if (!set.has(num - 1)) {
            let currentLength = 1;
            let currentNum = num;
            // 不断检查 num + 1 是否在集合中
            while (set.has(currentNum + 1)) {
            currentLength += 1;
            currentNum += 1;
            }
        // 更新最长连续序列的长度
        result = Math.max(result, currentLength);
        }
        
    }
    return result;

};
const rl = require('readline').createInterface({
    input: process.stdin,
    output : process.stdout
})
rl.question('请输入类似nums = [100,4,200,1,3,2]的内容：', input => {
    const match = input.match(/nums = \[(.*)\]/);
    if (match) {
        const arr = match[1].split(",").map(Number);
        console.log(longestConsecutive(arr));
        
    } else {
        console.log('输入格式不正确，请输入类似nums = [100,4,200,1,3,2]的内容。');
        
    }
    rl.close();
    
})
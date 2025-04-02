/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //定义结果数组
    const result = [];
    //记录当前子集
    const path = [];
    //定义递归回溯函数
    const backtrack = (startIndex) => {
        //将当前path加入结果
        result.push([...path]);
        //从startIndex开始遍历数组
        for (let i = startIndex; i < nums.length; i++) {
            //将当前元素加入path
            path.push(nums[i]);
            //回溯
            backtrack(i + 1);
            // 弹出path末尾元素
            path.pop();
            
        }
    }
    //初次调用backtrack;
    backtrack(0);
    return result;
};
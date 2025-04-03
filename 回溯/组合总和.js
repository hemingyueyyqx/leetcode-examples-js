/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //定义结果数组
    const result = [];
    //定义path存放当前数字组合
    const path = [];
    //定义递归回溯函数
    const backtrack = (startIndex, currentSum) => {
        //递归终止条件，当currentSum=target时，将当前组合加入result
        if (currentSum === target) {
            result.push([...path]);
        }
        //如果currentSum大于target,直接返回
        if (currentSum > target) {
            return;
        }
        //遍历数组
        for (let i = startIndex; i < candidates.length; i++) {
            // 将当前数字加入数组
            path.push(candidates[i]);
            //计算和
            // currentSum += candidates[i];
            //回溯
            backtrack(i, currentSum+candidates[i]);
            //弹出末尾元素
            path.pop();
            // currentSum -= candidates[i];
            
        }

    }
    //初始调用
    backtrack(0, 0);
    return result;
};
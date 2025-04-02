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
    }
};
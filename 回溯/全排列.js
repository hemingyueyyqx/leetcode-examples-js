// 回溯算法通过递归和回溯的方式，遍历所有可能的排列组合。在每一层递归中，会尝试选择一个未使用的元素加入当前排列，然后递归生成后续排列，当生成一个完整排列后，回溯到上一层，撤销当前选择，尝试其他选择，直到所有可能的排列都被生成。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //结果数组
    const result = [];
    //记录当前索引对应的值是否在当前排列中
    const used = new Array(nums.length).fill(false);
    //记录当前排列
    const path = [];
    //定义递归回溯函数
    const backtrack = () => {
        //递归终止条件
        if (path.length === nums.length) {
            //将当前排列加入结果数组
            result.push([...path]);
            return;
        }
        //遍历数组，循环递归回溯
        for (let i = 0; i < nums.length; i++) {
            //如果used[i]为true，跳过本次循环
            if (used[i]) {
                continue;
            }
            //将used数组中当前索引的值设置成true;
            used[i] = true;
            //将nums数组中当前值加入path
            path.push(nums[i]);
            //回溯
            backtrack();
            //移除path数组的最后一个元素
            path.pop();
            //将used数组中当前索引的值设置成false;
            used[i] = false;
            
        }
    }
    //首次调用
    backtrack();
    return result;

    
};
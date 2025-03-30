class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums) {
        return null;
    }
    //左闭右闭区间
    return traversal(nums,0,nums.length-1)
};
//二分递归
const traversal = (nums, left, right) => {
    //递归终止条件
    if (left > right) {
        return null;
    }
    //Math.floor() 函数会返回小于或等于一个给定数字的最大整数，也就是向下取整。
    // 若在代码中使用 Math.round，mid 会是区间 [left, right] 中间位置四舍五入后的元素索引。
    const mid = left +  Math.floor((right - left) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = traversal(nums, left, mid - 1);
    root.right = traversal(nums, mid + 1, right);
    return root;
}
const line = require('readline');
const rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('请输入类似nums = [1,2,4,5,6]的内容：', (input) => {
    const match = input.match(/nums = \[(.*)\]/);
    if (match) {
        const strs = match[1].split(",").map(item => {
            const trimmed = item.trim();
            if (trimmed === 'null') {
                return null;
            }
            return parseInt(trimmed, 10);
        })
        // const root = arrayToTree(strs);
        console.log(sortedArrayToBST(strs));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [4,2,7,1,3,6,9]的内容。');
        
    }
    rl.close();
})
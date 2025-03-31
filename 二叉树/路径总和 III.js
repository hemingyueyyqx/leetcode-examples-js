class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
//层次遍历转二叉树
function arrayToTree(arr) {
    const nodes = arr.map(item => {
        return item !== null ? new TreeNode(item) : null;
    })
    let parentIndex = 0;
    let childIndex = 1;
    while (childIndex < arr.length) {
        const parent = nodes[parentIndex];
        if (parent != null) {
            parent.left = nodes[childIndex];
            childIndex++;
            //如果不进行 childIndex < arr.length 的条件判断，当 childIndex 已经超出数组长度时，仍然尝试访问 nodes[childIndex] 来设置父节点的右子节点，就会导致访问越界，引发错误（比如 undefined 作为节点赋值给父节点的右子节点等问题）。
            if (childIndex < arr.length) {
                parent.right = nodes[childIndex];
                childIndex++;
            }
        }
        parentIndex++;

    }
    return nodes[0];
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    //递归终止条件
    if (!root) {
        return 0;
    }
    //深度优先递归遍历以当前节点为根节点的所有路径和
    const dfs = (node, currentSum) => {
        //返回的和为目标值的数量
        let count1 = 0
        //递归终止条件
        if (!node) {
            return 0;
        }
        currentSum += node.val;
        if (currentSum === targetSum) {
            count1++;
        }
        //递归调用深度优先搜索函数
        count1 += dfs(node.left, currentSum);
        count1 += dfs(node.right, currentSum);
        return count1;

    }
    //调用根节点的深度优先搜索
    let count = dfs(root, 0);
    //递归调用外层函数，继续深度优先搜索孩子节点
    count += pathSum(root.left, targetSum);
    count += pathSum(root.right, targetSum);
    return count;
};
const line = require('readline');
const rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('请输入类似root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8的内容：', (input) => {
    const match1 = input.match(/root = \[(.*)\]/);
    const match2 = input.match(/targetSum = (\d+)/);
    if (match1 && match2) {
        const arr = match1[1].split(",").map(item => {
            const trimmed = item.trim();
            if (trimmed === 'null') {
                return null;
            }
            return parseInt(trimmed, 10);
        });
        const targetSum = parseInt(match2[1],10);
        const root = arrayToTree(arr);
        console.log(pathSum(root,targetSum));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8的内容。');
        
    }
    rl.close();
})
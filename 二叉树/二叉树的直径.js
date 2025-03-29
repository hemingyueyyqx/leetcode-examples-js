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
var diameterOfBinaryTree = function (root) { 
    //全局变量，用于记录全局的最大直径。
    let maxD = 0;
    //递归计算每个节点的最大深度。
// 在计算过程中，更新 maxD 为当前节点的左子树深度加上右子树深度和 maxDiameter 中的较大值。
// 返回当前节点的最大深度。
    const maxDepth = (root) => {
        if (!root) {
            return 0;
        }
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        maxD = Math.max(maxD, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    maxDepth(root);
    return maxD;
}
const line = require('readline');
const rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('请输入类似root = [4,2,7,1,3,6,9]的内容：', (input) => {
    const match = input.match(/root = \[(.*)\]/);
    if (match) {
        const strs = match[1].split(",").map(item => {
            const trimmed = item.trim();
            if (trimmed === 'null') {
                return null;
            }
            return parseInt(trimmed, 10);
        })
        const root = arrayToTree(strs);
        console.log(diameterOfBinaryTree(root));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [4,2,7,1,3,6,9]的内容。');
        
    }
    rl.close();
})
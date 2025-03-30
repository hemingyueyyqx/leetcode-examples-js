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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//全局变量，记录当前节点的根节点，初始化为空
let current = null;
//先序遍历
var flatten = function (root) { 
    //递归终止条件
    if (!root) {
        return;
    }
    //记录当前节点的左右子树为了后续的递归调用
    let left = root.left;
    let right = root.right;
    //重新定义树
    //if (current)：检查 current 是否为真值。
    // if (current!== null)：检查 current 是否不等于 null。
    // if (!current)：检查 current 是否为假值。
    if (current) {
        current.left = null;
        //把当前节点接到根节点的右子树
        current.right = root;
    }
    //将当前节点赋值给current
    current = root;
    //递归调用
    flatten(left);
    flatten(right);
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
        flatten(root);
        console.log(root);
        
        
    } else {
        console.log('输入格式不正确！请输入类似root = [4,2,7,1,3,6,9]的内容。');
        
    }
    rl.close();
})
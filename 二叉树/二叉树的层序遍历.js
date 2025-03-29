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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const result = [];
    //初始化队列
    const queue = [root];
    while (queue.length > 0) {
        let levelSize = queue.length;
        const currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            
            //移除队首元素
            const node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
};
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
        console.log(levelOrder(root));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [4,2,7,1,3,6,9]的内容。');
        
    }
    rl.close();
})
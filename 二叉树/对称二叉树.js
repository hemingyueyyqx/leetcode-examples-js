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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root, root);

};
const isMirror = (t1, t2) => {
    //如果两个节点都为空，返回true
    if (!t1 && !t2) {
        return true;
    }
    //如果其中一个节点为空，另一个不为空则返回false
    if (!t1 || !t2) {
        return false;
    }
    //两个节点的值相等，同时第一个节点的左子树和第二个节点的右子树对称(递归调用isMirror)，一右和二左对称，返回true
    return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
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
        console.log(isSymmetric(root));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [4,2,7,1,3,6,9]的内容。');
        
    }
    rl.close();
})
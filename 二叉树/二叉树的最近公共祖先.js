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
// 在树中查找值为 target 的节点
const findNode = (root, target) => {
    //递归终止条件
    if (!root) {
        return null;
    }
    //如果值为target,直接返回
    if (root.val === target) {
        return root;
    }
    //递归遍历左子树
    let left = findNode(root.left, target);
    //如果左子树存在，直接返回
    if (left) {
        return left;
    }
    //递归遍历右子树
    return findNode(root.right, target);
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    //递归终止条件
    if (!root || root === p || root === q) {
        return root;
    }
    //递归遍历左右子树
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    //如果左右子树都存在，返回当前节点
    if (left && right) {
        return root;
    }
    //否则，哪个子树存在，就返回哪个；
    return left ? left : right;
};
const line = require('readline');
const rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('请输入类似root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1的内容：', (input) => {
    const match1 = input.match(/root = \[(.*)\]/);
    const match2 = input.match(/p = (\d+)/);
    const match3 = input.match(/q = (\d+)/);
    if (match1 && match2 && match3) {
        const arr = match1[1].split(",").map(item => {
            const trimmed = item.trim();
            if (trimmed === 'null') {
                return null;
            }
            return parseInt(trimmed, 10);
        });
        const root = arrayToTree(arr);
        const pVal = parseInt(match2[1], 10);
        const qVal = parseInt(match3[1], 10);
        const p = findNode(root, pVal);
        const q = findNode(root,qVal);
        console.log(lowestCommonAncestor(root,p,q));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1的内容。');
        
    }
    rl.close();
})
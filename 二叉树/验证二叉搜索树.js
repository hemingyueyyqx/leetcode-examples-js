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
var isValidBST = function(root) {
    //二叉搜索树的中序遍历结果是升序的，所以在递归遍历的过程中不断检查当前值是否大于前一个值
    //将前一个值初始化为空
    let prev = null;
    //递归中序遍历
    const inorder = (root) => {
        //空树也是二叉搜索树
        if (!root) {
            return true;
        }
        //如果左子树不是二叉搜索树，直接返回false
        if (!inorder(root.left)) {
            return false;
        }
        //如果前一个节点值不为空同时当前节点值小于等于前一个值，直接返回false
        if (prev !== null && root.val <= prev) {
            return false;
        }
        //将当前节点值赋值给prev
        prev = root.val;
        //递归遍历右子树
        return inorder(root.right);
    }
    return inorder(root);
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
        console.log(isValidBST(root));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [4,2,7,1,3,6,9]的内容。');
        
    }
    rl.close();
})
// 在 JavaScript 里，slice() 是数组对象的一个方法，它的作用是从已有的数组里截取一部分元素，然后返回一个新数组，而原数组不会被改变。下面为你详细介绍这个方法。
// 语法
// javascript
// arr.slice([begin[, end]])

// begin（可选）：指定截取的起始索引，索引从 0 开始。若省略此参数，slice() 会从数组的起始位置开始截取。若 begin 为负数，则从数组末尾开始计数，例如 -1 表示最后一个元素。
// end（可选）：指定截取的结束索引，该索引处的元素不会被包含在截取结果中。若省略此参数，slice() 会一直截取到数组末尾。若 end 为负数，同样从数组末尾开始计数。
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //递归终止条件
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    //前序遍历第一个节点即根节点
    rootVal = preorder[0];
    //建立根节点
    const root = new TreeNode(rootVal);
    //记录根节点在中序遍历数组中的索引
    const inorderIndex = inorder.indexOf(rootVal);
    //中序遍历左，中，右，先序遍历左，右，中
    //递归遍历左右子树
    root.left = buildTree(preorder.slice(1, inorderIndex + 1), inorder.slice(0, inorderIndex));
    root.right = buildTree(preorder.slice(inorderIndex + 1), inorder.slice(inorderIndex + 1));
    return root;
};
const line = require('readline');
const rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('请输入类似preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]的内容：', (input) => {
    const match1 = input.match(/preorder = \[([\d,]+)\]/);
    const match2 = input.match(/inorder = \[([\d,]+)\]/);
    if (match1 && match2) {
        const preorder = match1[1].split(",").map(item => {
            const trimmed1 = item.trim();
            // if (trimmed === 'null') {
            //     return null;
            // }
            return parseInt(trimmed1, 10);
        });
        const inorder = match2[1].split(",").map(item => {
            const trimmed2 = item.trim();
            // if (trimmed === 'null') {
            //     return null;
            // }
            return parseInt(trimmed2, 10);
        });
        // const root = arrayToTree(strs);
        console.log(buildTree(preorder,inorder));
        
    } else {
        console.log('输入格式不正确！请输入类似root = [4,2,7,1,3,6,9]的内容。');
        
    }
    rl.close();
})
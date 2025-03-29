const line = require("readline");
const rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = this.right === undefined ? null : right;
    
// }
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    inorder(root, result);
    return result;
};
function inorder(root,result) {
    if (root != null) {
        inorder(root.left, result);
        result.push(root.val);
        inorder(root.right, result);
    }

}
rl.question('请输入类似root = [1,null,2,3]的内容:', (input) => {
    const match = input.match(/root = \[(.*)\]/);
    if (match) {
      const str = match[1].split(",").map((item) => {
        const trimmed = item.trim();
        if (trimmed === 'null') {
            return null;
        }
        return parseInt(trimmed, 10);
    });
    const root = inorderTraversal(arrayToTree(str));
    console.log(root);  
    } else {
        console.log('输入格式不正确，请输入类似 root = [1, null, 2, 3] 的内容。');
    }
    rl.close();
    
    
})

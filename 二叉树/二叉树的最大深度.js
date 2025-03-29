class TreeNode{
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
        if (parent !== null) {
            parent.left = nodes[childIndex];
            childIndex++;
            if (childIndex < arr.length) {
                parent.right = nodes[childIndex];
                childIndex++
            }
        }
        parentIndex++;
    }
    return nodes[0];
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //递归终止条件
    if (!root) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    const max = Math.max(leftDepth, rightDepth) + 1;
    return max;
    
};
const line = require("readline");
const rl = line.createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.question('请输入类似root = [3,9,20,null,null,15,7]的内容：', (input) => {
    const match = input.match(/root = \[(.*)\]/);
    if (match) {
        const strs = match[1].split(",").map(item => {
            const trimmed = item.trim();
            if (trimmed === 'null') {
                return null;
            }
            return parseInt(trimmed, 10);
        })
        const root = arrayToTree(strs)
        console.log(maxDepth(root));
        
    } else {
        console.log('输入格式不正确，请输出类似root = [3,9,20,null,null,15,7]的内容。');
        
    }
    rl.close();
})

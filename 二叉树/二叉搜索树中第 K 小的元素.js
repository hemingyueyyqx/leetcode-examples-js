/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const inorderArr = [];
    inorder(root,inorderArr);
    return inorderArr[k-1];
};
const inorder = (root,arr) => {
    //递归终止条件
    if(!root) {
        return;
    }
    inorder(root.left,arr);
    arr.push(root.val);
    inorder(root.right,arr);
} 
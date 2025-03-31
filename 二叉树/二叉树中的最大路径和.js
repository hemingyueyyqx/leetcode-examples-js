/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    //定义一个全局变量记录最大路径和,-Infinity表示负无穷
    let maxSum = -Infinity;
    //深度优先遍历，不断更新最大路径和，每次调用都返回以当前节点为根节点的最大路径和
    const dfs = (node) => {
        //递归终止条件
        if (!node) {
            return 0;
        }
        //定义左子树最大路径和，与0作比较，取大的值
        const leftMax = Math.max(0, dfs(node.left));
        //定义右子树最大路径和，与0作比较，取大的值
        const rightMax = Math.max(0, dfs(node.right));
        //更新最大路径和为，当前maxSum和node.val+leftMax+rightMax的较大值
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);
        //返回以当前节点为根节点的最大路径和
        return node.val + Math.max(leftMax, rightMax);
    }
    //调用递归函数
    dfs(root);
    return maxSum;

};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) {
        return [];
    }
    //利用二叉树的层序遍历，将每一层的节点值存到数组中，在把数组最后一个元素放入结果数组
    const result = [];
    //定义一个队列存放当前层的节点
    const queue = [root];
    while(queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];
        for(let i=0;i<levelSize;i++) {
            //移除队首节点
            let node = queue.shift();
            currentLevel.push(node.val);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        result.push(currentLevel[levelSize-1]);
    }
    return result;
};
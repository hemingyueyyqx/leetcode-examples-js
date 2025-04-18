/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    //定义动态规划数组dp[i] 表示组成数字i的所需的完全平方数的最少数量
    const dp = new Array(n + 1).fill(Infinity);
    //组成0不需要任何的完全平方数
    dp[0] = 0;
    //<=n的最大平方数
    const maxSquare = Math.floor(Math.sqrt(n)) + 1; 
    //定义平方数组，存储<=n的平方数
    const squares = new Array(maxSquare);
    for (let i = 0; i < maxSquare; i++) {
        squares[i] = i * i;
        
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < maxSquare; j++) {
            //不符合dp[i]的定义
            // 如果当前平方数 squares[j] 已经大于目标数字i，那么更大的平方数肯定也大于i，可以提前终止内层循环
            if (squares[j] > i) {
                break;
            } 
            // 为什么是"+1"

// 这个"+1"代表：
// - 你**当前正在使用**的这个完全平方数 `squares[j]`
// - 它已经是一个完整的平方数，所以计为1个
// - 剩下的部分 `i - squares[j]` 需要另外计算
            dp[i] = Math.min(dp[i], dp[i - squares[j]] + 1);
        }
        
    }
    return dp[n];
};
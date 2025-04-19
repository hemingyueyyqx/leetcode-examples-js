/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (!coins || coins.length === 0) {
        return -1;
    }
    if (amount === 0) {
        return 0;
    }
    const n = coins.length;
    //对coins数组排序
    coins.sort((a, b) => a - b);
    //定义动态规划数组dp[i]表示组成i所需的硬币的最少数量，长度amount+1,都初始化成正无穷
    const dp = new Array(amount + 1).fill(Infinity);
    //组成0不需要任何的硬币
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < n; j++) {
            if (coins[j] > i) {
                break;
            }
            //存在一个j,coins[j]一个硬币数，只需要计算组成i - coins[j]所需的硬币的最少数量
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
        
    }
    //如果dp[amount]仍然是正无穷，表示无法凑出，返回-1
    return dp[amount] === Infinity?-1:dp[amount];


};
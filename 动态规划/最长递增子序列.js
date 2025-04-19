/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    //定义dp[i]数组表示以nums[i]为结尾的最长递增子序列的长度，初始化数组每个元素为1,nums[i]一定是子序列
    const dp = new Array(nums.length).fill(1);
    //定义最大长度，即返回值,初始值为1
    let maxLen = 1;
    //外层循环从1到length-1遍历nums，nums[i]作为比较值
    for (let i = 1; i < nums.length; i++) {
        //内层循环从0到i-1遍历nums,nums[j]与nums[i]进行比较，更新dp[i]
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            
        }
        //每次内层循环结束后，更新最大长度
        maxLen = Math.max(maxLen, dp[i]);
        
    }
    return maxLen;

};
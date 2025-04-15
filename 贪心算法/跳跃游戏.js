// 关键在于在遍历数组的过程中，动态更新所能到达的最远位置。如果最终这个最远位置能够覆盖到数组的最后一个下标，那就说明可以到达最后一个下标；反之则不能。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //初始化最远位置
    let maxPosition = 0;
    //遍历数组，不断更新最远位置
    for (let i = 0; i < nums.length; i++) {
         //如果当前下标大于能达到的最远位置，返回false,应该在循环开始时最先判断
        if (i > maxPosition) {
            return false;
        }
        maxPosition = Math.max(maxPosition, i + nums[i]);
       
        //如果最远位置大于等于数组中最后一个位置，说明能达到
        if (maxPosition >= nums.length - 1) {
            return true;
        }
        
    }
};
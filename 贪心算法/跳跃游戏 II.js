/**
 * @param {number[]} nums
 * @return {number}
 */
// 由于每次跳跃都选择了能跳到的最远位置，也就是在每一步都做出了最优的选择，所以整体上使用的跳跃次数就是最少的。通过不断地在当前跳跃范围内寻找下一步能到达的最远位置，避免了不必要的跳跃，从而保证了最终得到的 jumps 是到达数组末尾所需的最少跳跃次数。
var jump = function(nums) {
    //记录最小跳跃次数
    let minStep = 0;
    //能达到的最远位置
    let maxPosition = 0;
    //当前条约能够达到的最远位置
    let currentEnd = 0;
    //遍历数组
    // 在遍历数组时，当 i 等于 nums.length - 1 时，如果此时恰好满足 i === currentEnd，会多计算一次跳跃次数。因为当已经到达最后一个位置时，就不需要再进行额外的跳跃了。
    for (let i = 0; i < nums.length-1; i++) {
        // if (i > maxPosition) {
        //     return -1;
        // }
        maxPosition = Math.max(maxPosition, i + nums[i]);
        // if (maxPosition >= nums.length - 1) {
        //     minStep = Math.min(minStep, i + 1);
        // }
        if (i === currentEnd) {
            minStep++;
            currentEnd = maxPosition;
        }
    }
    return minStep;
};
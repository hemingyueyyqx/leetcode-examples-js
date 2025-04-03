/**
 * @param {number[]} nums
 * @return {number}
 */
/*1. 旋转数组的结构特性
旋转后的数组可以看作是两个有序子数组的组合。例如：

[4,5,6,7,0,1,2] 由 [4,5,6,7] 和 [0,1,2] 组成。

最小元素是第二个子数组的第一个元素（即 0）。

2. nums[mid] 和 nums[right] 的比较意义
如果 nums[mid] < nums[right]：

说明 mid 到 right 这一段是完全有序的（因为旋转点不在这部分）。

最小元素一定在 left 到 mid 之间（包括 mid），因为：

如果 mid 右侧有序，那么 nums[mid] 可能是最小值，或者更左侧有更小的值。

但 nums[right] 比 nums[mid] 大，所以最小值不可能在 mid 右侧。

因此调整 right = mid，继续在左半部分搜索。

如果 nums[mid] > nums[right]：

说明旋转点（最小值）在 mid 和 right 之间。

因为 nums[mid] 比 nums[right] 大，说明 mid 属于第一个有序子数组，而 right 属于第二个有序子数组。

最小值一定在 mid + 1 到 right 之间，因此调整 left = mid + 1。*/
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    //当left = right的时候，nums[left]就是最小元素
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < nums[right]) {
            // 最小元素在左半部分
            right = mid;
        } else {
            //最小元素在右半部分
            left = mid + 1;
        }
    }
    return nums[left];
};
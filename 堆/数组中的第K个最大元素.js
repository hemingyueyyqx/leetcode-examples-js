/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //Array.sort() 使用的是基于比较的排序算法（如快速排序、归并排序或 TimSort），它们的时间复杂度通常是 O(n log n)。
    nums.sort((a,b) => a-b);
    //k=1 length-1
    //k=2 length-2
    return nums[nums.length-k];
};
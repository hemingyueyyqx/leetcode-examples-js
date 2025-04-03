/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    //寻找左边界
    const findLeft = () => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    //寻找右边界
    const findRight = () => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } 
        return right;
    }
    const leftIndex = findLeft();
    const rightIndex = findRight();
    if(nums[leftIndex] === target && nums[rightIndex] === target && leftIndex <= rightIndex) {
        return [leftIndex, rightIndex];
    } else {
       return [-1, -1]; 
    }
    

};
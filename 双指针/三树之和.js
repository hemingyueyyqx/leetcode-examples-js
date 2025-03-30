// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //排序,sort() 是 JavaScript 数组自带的排序方法，它会默认把数组元素转换为字符串，然后按照 Unicode 码点排序。
    nums.sort((a,b) => a-b);
    //转成集合去重.使用 Set 去重会丢失一些可能组成三数之和为 0 的组合，因为有些重复元素可能在结果中是必要的，比如输入 [-1, -1, 2]，去重后就无法得到正确结果。
    // set = new Set(nums);
    // newNums = Array.from(set);
    // console.log(set);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        //如果nums[i]，就不可能有三数之和等于0，因为数组是升序的；
        if (nums[i] > 0) {
            break;
        }
        //去重；跳过重复元素
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; 
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum === 0) {
                result.push([nums[i], nums[left], nums[right]]); 
                //去重，跳过重复元素
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else {
                if (currentSum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
    
};

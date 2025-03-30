/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //定义左右指针
    let left = 0;
    let right = height.length - 1;
    //结果
    let result = 0;
    //当前最大面积
    let area = 0;
    //当左指针小于右指针时，循环
    while (left < right) {
        area = (right - left) * Math.min(height[left], height[right]);
        //更新result
        if (area > result) {
            result = area;
        } else {
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
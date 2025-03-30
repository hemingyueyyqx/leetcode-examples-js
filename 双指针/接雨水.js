// 当 height[left] < height[right] 时：
// 说明在当前 left 和 right 位置的比较下，left 位置的高度相对较低。对于 left 位置而言，它能接住的雨水量是由它左侧的最大高度（leftMax）和它自身高度（height[left]）决定的。因为 left 位置的高度小于 right 位置的高度，此时 left 位置能接到的雨水量不会受到右侧 right 位置及更右侧高度的影响（因为右侧更高），所以只需要考虑左侧的情况。
// 也就是说，left 位置上方能接住的雨水量就是 leftMax - height[left]（前提是 leftMax > height[left]，如果 leftMax <= height[left]，则接雨水量为 0）。因此，在这种情况下，我们可以放心地根据 leftMax 和 height[left] 的差值来计算 left 位置能接住的雨水量，并累加到总雨水量中。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const n = height.length;
    //定义左右指针
    let left = 0;
    let right = n - 1;
    //定义左右侧最大高度；
    let lMax = 0;
    let rMax = 0;
    //存水量
    let water = 0;
    //循环
    while (left < right) {
        //记录左侧存水量
        if (height[left] < height[[right]]) {
            if (height[left] > lMax) {
                lMax = height[left];
            } else {
                water += lMax - height[left];
            }
            //移动左指针
            left++;
        }
        //记录右侧存水量
        else {
            if (height[right] > rMax) {
                rMax = height[right];
            } else {
                water += rMax - height[right];
            }
            right--;
        }
    }
    return water;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    //定义一个map,存数组中的元素以及出现的次数
    const map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
        
        
    }
    for (let [key,value] of map) {
        if (value === 1) {
            return key;
        }
    }

};
const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log(result); 
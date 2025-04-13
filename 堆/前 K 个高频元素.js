/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //创建一个map,键是数组中的元素，值是该元素在数组中出现的次数
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    //按照每个元素的出现次数从大到小排序
    //entries() 是 Map 对象的一个方法，其作用是返回一个新的迭代器对象，此对象包含了 Map 中每个元素的 [key, value] 数组。
    const sortArry = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    return sortArry.slice(0, k).map(([num]) => num);
};
// 测试用例
const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
console.log(topKFrequent(nums1, k1)); 

const nums2 = [1];
const k2 = 1;
console.log(topKFrequent(nums2, k2)); 
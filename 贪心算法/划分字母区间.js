/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    //记录字符串长度
    const l = s.length;
    //定义数组记录字符串中每一个字符最后一次出现的位置,都初始化成0
    const last = new Array(26).fill(0);
    //遍历数组
    // charCodeAt() 是 JavaScript 字符串对象的一个方法，它返回指定索引位置字符的 Unicode 编码。在这行代码里，s.charCodeAt(i) 会返回字符串 s 中索引为 i 的字符的 Unicode 编码。
    for (let i = 0; i < l; i++) {
        last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
        
    }
    console.log(last);
    const result = [];
    //定义当前片段的起始位置和结束位置
    let start = 0, end = 0;
    //继续遍历数组，更新end为当前字符最后出现的位置和end的最大值
    for (let j = 0; j < l; j++) {
        end = Math.max(end,last[s.charCodeAt(j) - 'a'.charCodeAt(0)] )
        //如果当前j等于end,说明已经到达一个片段末尾，加入结果数组
        if (j === end) {
            result.push(end - start + 1);
            //更新start
            start = end + 1;
        }
    }
    console.log(result);
    
    return result;
    
};
partitionLabels("ababcbacadefegdehijhklij");
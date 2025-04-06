/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    //将结果数组answer都初始化成0，这样无需做后续没有更大温度的元素的处理  
    const answer = new Array(n).fill(0);
    //初始化栈存储当前元素的索引，方便做温度比较以及做步数减法
    const stack = [];
    //遍历数组
    for (let i = 0; i < n; i++) {
        //while循环不断处理比当前元素温度小的栈顶元素索引值对应的温度
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            //弹出栈顶元素
            const prevIndex = stack.pop();
            //计算插值存入结果数组
            answer[prevIndex] = i - prevIndex;
        }
        //将当前索引入栈
        stack.push(i);
        
    }
    return answer;
};
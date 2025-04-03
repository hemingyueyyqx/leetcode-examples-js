/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    //定义结果数组
    const result = [];
    //定义current记录当前的括号组合
    // const current = [];
    //定义回溯函数
    const backtrack = (current, left, right) => {
        //递归终止条件
        if (current.length === 2 * n) {
            result.push(current);
        }
        //左括号递归
        if (left < n) {
            backtrack(current + '(', left + 1, right); 
        }
        //右括号递归,确保任何时候闭括号数量不超过开括号数量
        if (right < left) {
            backtrack(current + ')', left, right + 1);
        }
    }
    //初始调用
    backtrack('', 0, 0);
    return result;
    
};
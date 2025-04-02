/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length === 0) {
        return [];
    }
    // 定义结果数组
    const result = [];
    // 定义path数组存放当前字符组合
    const path = [];
    //定义map存放2-9对应的字符
    const map = {
        '2':'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
        
    }
    //定义递归回溯函数
    const backtrack = (index) => {
        //如果index等于输入字符串的长得，说明当前path已经形成了一个字符组合，加入result,返回
        if (index === digits.length) {
            result.push(path.join(''));
            return;
        }
        //确定当前字符对应的字符串
        const letters = map[digits[index]];
        //遍历letters,递归回溯
        for (let i = 0; i < letters.length; i++) {
            // 将当前字符加入path;
            path.push(letters[i]);
            //回溯
            backtrack(index + 1);
            //弹出path末尾元素
            path.pop();
            
        }
    }
    // 初始调用
    backtrack(0);
    return result;
};
// const digits = "23";
// console.log(digits.length);

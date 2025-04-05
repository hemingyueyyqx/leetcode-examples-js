// currentStr.repeat(num) 是 JavaScript 字符串的一个方法，它的作用是将字符串重复指定的次数，然后返回新字符串
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    //初始化栈，用来存放当前字母和数字
    const stack = [];
    //记录当前正在解析的字符串
    let currentStr = '';
    //记录当前的数字
    let currentNum = 0;
    for (let char of s) {
        // /\d/.test(char) 检查变量 char 是否是一个数字字符
        if (/\d/.test(char)) {
            //如果是数字，就赋值给currentNum
            //可能会有连续多个数字
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char == '[') {
            //如果是'[',就把当前字符串和数字压栈
            stack.push(currentStr);
            stack.push(currentNum);
            //初始化当前字符串和数字
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            //如果是']'，就把栈顶的字符串和数字弹出，拼接形成新的字符串
            const num = stack.pop();
            const prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            //如果是字符们直接加currentStr
            currentStr += char;
        }

    }
    return currentStr;
};
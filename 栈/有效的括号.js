/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //空字符串通常被认为是有效的
    if (!s || s.length === 0) {
        return true;
    }
    const stack = [];
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.unshift(char);
        } else {
          const top = stack.shift();
        if ((char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{')) {
            return false;
        }   
        }
       
    }
    return stack.length === 0;
};
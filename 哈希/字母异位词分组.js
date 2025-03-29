/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let charArray = str.split('');
        charArray.sort();
        const sortArray = charArray.join('');
        if (map.has(sortArray)) {
            map.get(sortArray).push(str);
        } else {
           map.set(sortArray, [str]); 
        }
        
    }
    console.log(map);
    
    return Array.from(map.values());
};
const rl = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.question('请输入类似strs = ["eat", "tea", "tan", "ate", "nat", "bat"]的内容：', input => {
    const match = input.match(/strs = \[(.*)\]/);
    if (match) {
        const strs = match[1].split(",").map(s => { return s.trim().replace(/"/g, '') })
        console.log(strs);
        
      console.log(groupAnagrams(strs));
        
    } else {
        console.log('输入格式不正确，请输入类似strs = ["eat", "tea", "tan", "ate", "nat", "bat"]的内容。');
        
    }
    rl.close();
    

})
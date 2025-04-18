/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    // console.log(set);
    // console.log(set.has(s.substring(0,1)));
    const n = s.length;
    //初始化动态规划数组dp[i]表示前i个字符构成的字符串是否在集合中
    const dp = new Array(n + 1).fill(false);
    //空字符串可以被拼接
    dp[0] = true;
    //外层循环从1开始为了保证s.substring(0,1)不为空，符合定义
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            // 这里本应检查 dp[j] 而非 dp[i]，因为 dp[j] 代表的是前 j 个字符能否由字典里的单词拼接而成，只有当 dp[j] 为 true 且子字符串 s.substring(j, i) 在字典中时，才能确定前 i 个字符可以由字典中的单词拼接而成。
            if (dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true;
                //在这个动态规划的解法里，dp[i] 代表字符串 s 的前 i 个字符是否能够由字典 wordDict 中的单词拼接而成。内层循环的目的是检查是否存在一个位置 j（0 <= j < i），使得 s 的前 j 个字符可以由字典中的单词拼接（即 dp[j] 为 true），并且从第 j 个位置到第 i 个位置的子字符串 s.substring(j, i) 也在字典 wordDict 中。
                // 一旦找到了这样一个满足条件的 j，就意味着前 i 个字符可以由字典中的单词拼接而成，此时就可以把 dp[i] 设为 true。由于我们只需要判断能否拼接，并不需要找出所有可能的拼接方式，所以一旦找到一个可行的 j，就没有必要再继续遍历其他的 j 值了，因此可以使用 break 语句跳出内层循环。
                break;
            }
        }
        
    }
    return dp[n];
    
    
};
const s = "leetcode", wordDict = ["leet", "code"]
wordBreak(s, wordDict);
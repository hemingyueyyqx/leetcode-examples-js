// 为了保证买入时间早于卖出时间，我们可以采用一次遍历的方法。在遍历过程中，实时记录到当前位置为止所遇到的最低价格，因为这个最低价格有可能是最佳的买入价格。同时，对于每一个当前价格，我们计算它与最低价格的差值，这个差值就是以当前价格卖出时能获得的利润。通过不断更新最大利润，最终就能得到整个数组中能获得的最大利润。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let result = 0; 
   let min = Infinity;//正无穷
//    let max = -Infinity;//负无穷
    // let left = 0;
    // let right = prices.length - 1;
    // while (left <= right) {
    //     if (prices[left] <= prices[right]) {
    //         min = Math.min(prices[left],min);
    //         max = Math.max(prices[right],max);
    //         left++;
    //         right--;
    //     } else {
    //         left++;
    //     }
    // }
    for (let i = 0; i < prices.length; i++) {
        //设置当前最低价格
        min = Math.min(min, prices[i]);
        //更新最大利润
        result = Math.max(result, prices[i] - min);
        
    }
    // result = max - min;
    return result;
};
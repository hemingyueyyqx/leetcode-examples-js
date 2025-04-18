/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    //斐波那契数列超时
    // if(n==0) return 1;
    // if(n==1) return 1;
    // return climbStairs(n-1) + climbStairs(n-2);
    let p = 0, q = 0, r = 1;
    for (let i = 0; i < n; i++) {
        p = q;
        q = r;
        r = p + q;
        
    }
    return r;
};
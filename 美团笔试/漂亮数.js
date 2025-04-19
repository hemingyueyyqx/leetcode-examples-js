const beauNums = function (n) {
    //定义一个判断质数的函数
    const isPrime = (num) => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i * i <=num; i++) {
            if (num % i === 0) {
                return false;
            }
            
        }
        return true;
    }
    let count = 0;
    for (let i = 1; i <= n; i++) {
        for (let p = 2; p * p <= i; p++) {
            if (isPrime(p) && (i % p === 0)) {
                count++;
                break;
            }
        }
        
    }
    return count;
}
const rl = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.on('line', (line) => {
    const n = Number(line.trim());
    console.log(beauNums(n));
    rl.close();
    
})
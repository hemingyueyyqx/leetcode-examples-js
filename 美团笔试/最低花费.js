const minCost = function (n, m, w2, w3) {
    //定义队列存每一个n,和对应的花费
    const queue = [[n, 0]];
    //定义集合存计算过的n
    const set = new Set();
    while (queue.length > 0) {
        let [curN, cost] = queue.shift();
        if (curN >= m) {
            return cost;
        }
        if (!set.has(curN)) {
            set.add(curN);
            queue.push([curN * 2, cost + w2]);
            queue.push([curN * 3, cost + w3]);
        }
    }
    return -1
}
const rl = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.on('line', (line) => {
    input = line.split(' ').map(Number);
    if (!global.T) {
        global.T = input[0];
        global.caseIndex = 0;
        global.result = [];
    } else {
        let [n, m, w2, w3] = input;
        global.result[caseIndex] = minCost(n, m, w2, w3);
        global.caseIndex++;
        if (global.caseIndex === global.T) {
            global.result.forEach(element => {
                console.log(element);
                
            });
            rl.close();
        }
    }
})
// rl.close;
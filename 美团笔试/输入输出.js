const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split(' ').map(Number);
        if(!global.n) {
            global.n = tokens[0];
            global.caseIndex = 0;
            global.result = 0;
        }else {
            // const result = 0;
            for(let num of tokens) {
                result += num;
            }
            console.log(result);
            global.caseIndex++;
            if (global.caseIndex === global.n) {
                break;
            }
        }
    }
    rl.close();
}()

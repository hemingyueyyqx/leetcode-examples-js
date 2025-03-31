/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //如果数组不存在或者数组的长度是0，返回0
    if (!grid || grid.length === 0) {
        return 0;
    }
    //记录行列的长度
    const rows = grid.length;
    const conlumn = grid[0].length;
    //记录岛屿数量
    let count = 0;
     //深度优先遍历每一个陆地，并将他的值设为0，表示已经访问过
    const dfs = (r, c) => {
        //递归终止条件
        if (r < 0 || r >= rows || c < 0 || c >= conlumn || grid[r][c] === '0') {
            return;
        }
        //将值设置成0
        grid[r][c] = '0';
        //递归调用该陆地的上下左右
        dfs(r - 1, c);//上
        dfs(r + 1, c);//下
        dfs(r, c - 1);//左
        dfs(r, c + 1);//右
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < conlumn; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                count++;
            } 
        }
    }
   
    return count;
};
const grid = [];
let rows = 0;
let currentRow = 0;
const line = require('readline'); 
const rl = line.createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.question('请输入二维网格的行数：', (input) => {
    rows = parseInt(input, 10);
    const getNextRow = () => {
        rl.question(`请输入第${currentRow + 1}行数据，用逗号分隔，例如：1,0,1,1：`, (input) => {
            const row = input.split(",").map(item => item.trim());
            grid.push(row);
            currentRow++;
            if (currentRow < rows) {
                getNextRow();
            } else {
                console.log(numIslands(grid));
                rl.close()
            }
        })
    }
    getNextRow();
})
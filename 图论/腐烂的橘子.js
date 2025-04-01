/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    //记录行列数
    const rows = grid.length;
    const columns = grid[0].length;
    //经过的分钟数
    let minutes = 0;
    //定义一个队列，记录腐烂的橘子的横纵坐标
    const queue = [];
    //记录新鲜的橘子的个数
    let freshOrange = 0;
    //定义一个数组，记录四个人方向坐标的移动值，与原坐标相加
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    //遍历二维网格j
    for (let  i= 0;  i< rows; i++) {
        for (let j = 0; j < columns; j++) {
            //将腐烂的橘子加入队列，同时记录新鲜橘子的个数
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOrange++;
            }
        }
        
    }
    //如果新鲜橘子个数是0，返回0
    if (freshOrange === 0) {
        return 0;
    }
    //当队列不为空时执行循环
    while (queue.length > 0) {
        //记录当前队列的长度
        const size = queue.length;
        //设置标志，如果有橘子被腐烂，改为true
        let flag = false;
        //循环处理队列中的每一个节点
        for (let i = 0; i < size; i++) {
            //解构赋值
            const [x, y] = queue.shift();
            //遍历四个方向
            for (const [dx, dy] of directions) {
                //记录新坐标
                const newX = x + dx;
                const newY = y + dy;
                //判断,如果是新鲜橘子，把他变成腐烂的橘子，然后加入队列,改变新鲜橘子的数量
                if (newX >= 0 && newX < rows && newY >= 0 && newY < columns && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2;
                    queue.push([newX, newY]);
                    freshOrange--;
                    flag = true;
                }
            }
            
        }
        //在处理完当前队列里所有节点之后，若有橘子腐烂才增加分钟数
        if (flag == true) {
                minutes++;
            }
    }
    return freshOrange === 0 ? minutes : -1;

};
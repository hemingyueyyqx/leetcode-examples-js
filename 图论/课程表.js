/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //初始化入度数组，记录每门课程的先修课程的数量，用0填充,[0,0]
    const inDegree = new Array(numCourses).fill(0);
    //初始化邻接表，二维数组，记录每门课程的后续课程 [[],[]]
    const adjList = new Array(numCourses).fill(0).map(() => []);
    //遍历先修课程数组
    for (let [course, preCourse] of prerequisites) {
        inDegree[course]++;
        adjList[preCourse].push(course);
    }
    //初始化队列，记录所有入度为0的课程
    const queue = [];
    //记录已经遍历过的课程，即上完的课
    let count = 0;
    //遍历inDegree
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
        
    }
    //当队列长度大于0时循环
    while (queue.length > 0) {
        // const size = queue.length;
        //遍历队列中的每个节点，表示上该课程；
        // for (let i = 0; i < size; i++) {
            const currentCourse = queue.shift();
            count++;
            //遍历当前课程的后续课程
            for (course of adjList[currentCourse]) {
                inDegree[course]--;
                //如果后续课程的入度为0，加入队列
                if (inDegree[course] == 0) {
                    queue.push(course);
                }
            }
            
        // }
    }
    return count === numCourses;
};
// // 不使用 fill(0)
// const numCourses1 = 2;
// const adjList1 = new Array(numCourses1).map(() => []);
// console.log("adjList1",adjList1); 

// // 使用 fill(0)
// const numCourses2 = 2;
// const adjList2 = new Array(numCourses2).fill(0).map(() => []);
// console.log("adjList2",adjList2); 
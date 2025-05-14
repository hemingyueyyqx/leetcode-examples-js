function myPromiseAll(promises) {
  // 返回一个新 Promise
  return new Promise((resolve, reject) => {
    // 存储结果的数组
    const results = [];
    // 已完成的 Promise 计数器
    let completed = 0;
    
    // 如果传入的 Promise 数组为空，直接 resolve 空数组
    if (promises.length === 0) {
      resolve(results);
      return;
    }
    
    // 遍历每个 Promise
    promises.forEach((promise, index) => {
      // 将每个元素包装为 Promise，处理非 Promise 值
      Promise.resolve(promise)
        .then(value => {
          // 将结果按原始顺序存入数组
          results[index] = value;
          // 计数器加一
          completed++;
          
          // 所有 Promise 都已完成，resolve 结果数组
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          // 任何一个 Promise 失败，直接 reject
          reject(error);
        });
    });
  });
}

// 示例用法
const promise1 = Promise.resolve(1);
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
const promise3 = 3; // 非 Promise 值

myPromiseAll([promise1, promise2, promise3])
  .then(values => console.log("All resolved:", values)) // 输出: [1, 2, 3]
  .catch(error => console.error("Rejected:", error));

// 错误处理示例
const promise4 = Promise.reject(new Error("Oops!"));
myPromiseAll([promise1, promise4, promise3])
  .then(values => console.log(values))
  .catch(error => console.error("Caught:", error.message)); // 输出: "Oops!"
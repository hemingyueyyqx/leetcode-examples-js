//  Promise 设计的核心思想：将状态控制逻辑交给使用者，Promise 类只负责状态管理和回调分发。
class CustomPromise {
    // 定义三种状态常量
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
// 执行器函数内部的代码（由开发者编写）调用 resolve 或 reject
// 构造器本身不会主动调用它们，除非执行器同步抛出异常
    constructor(executor) {
        this.status = CustomPromise.PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.status === CustomPromise.PENDING) {
                this.status = CustomPromise.FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback());
            }
        };

        const reject = (reason) => {
            if (this.status === CustomPromise.PENDING) {
                this.status = CustomPromise.REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(callback => callback());
            }
        };

        try {
            // 将 resolve 和 reject 传递给执行器
            // 构造器将 resolve 和 reject 函数传递给执行器（executor）
// 构造器立即执行执行器函数 executor(resolve, reject)
            executor(resolve, reject);
        } catch (error) {
             // 仅在 executor 同步抛出异常时调用
            reject(error);
        }
    }
// .then() 方法的实现精妙地解决了几个核心问题：
// 状态管理：根据当前 Promise 的状态决定何时执行回调
// 异步执行：确保回调总是异步执行，避免时序问题
// 链式调用：通过返回新 Promise 实现链式调用和值传递
// 错误处理：捕获回调中的异常并转换为新 Promise 的拒绝
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error; };

        return new CustomPromise((resolve, reject) => {
            const handleFulfilled = () => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            };

            const handleRejected = () => {
                try {
                    const result = onRejected(this.reason);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            };
// const promise = CustomPromise.resolve(42);
// promise.then(value => console.log(value)); // 立即执行？
// 如果直接执行 handleFulfilled()（不使用 setTimeout），会导致同步执行
// 使用 setTimeout 确保即使 Promise 已经 resolved，回调仍会异步执行
            if (this.status === CustomPromise.FULFILLED) {
                setTimeout(handleFulfilled, 0);
            } else if (this.status === CustomPromise.REJECTED) {
                setTimeout(handleRejected, 0);
            } else {
                this.onFulfilledCallbacks.push(() => setTimeout(handleFulfilled, 0));
                this.onRejectedCallbacks.push(() => setTimeout(handleRejected, 0));
            }
        });
    }
// .catch() 之所以这样实现，有以下几个原因：
// 简化 API：提供更直观的错误处理语法
// 代码复用：避免重复实现错误处理逻辑
// 保持一致性：与 .then() 的行为保持一致
// 支持链式调用：返回新的 Promise，确保链式调用不中断
    catch(onRejected) {
        return this.then(null, onRejected);
    }

    finally(callback) {
        return this.then(
            value => CustomPromise.resolve(callback()).then(() => value),
            reason => CustomPromise.resolve(callback()).then(() => { throw reason; })
        );
    }

    static resolve(value) {
        if (value instanceof CustomPromise) {
            return value;
        }
        return new CustomPromise((resolve) => resolve(value));
    }
// executor 函数的第一个参数（resolve）可以忽略，用 _（下划线）作为占位符表示该参数未被使用。
    static reject(reason) {
        return new CustomPromise((_, reject) => reject(reason));
    }

    static all(promises) {
        return new CustomPromise((resolve, reject) => {
            const results = [];
            let completedCount = 0;

            if (promises.length === 0) {
                resolve(results);
                return;
            }

            promises.forEach((promise, index) => {
                CustomPromise.resolve(promise)
                    .then(value => {
                        results[index] = value;
                        completedCount++;
                        if (completedCount === promises.length) {
                            resolve(results);
                        }
                    })
                    .catch(reason => {
                        reject(reason);
                    });
            });
        });
    }

    static race(promises) {
        return new CustomPromise((resolve, reject) => {
            promises.forEach(promise => {
                CustomPromise.resolve(promise)
                    .then(value => {
                        resolve(value);
                    })
                    .catch(reason => {
                        reject(reason);
                    });
            });
        });
    }
}    
// const promise = new CustomPromise((resolve, reject) => {
//     setTimeout(() => reject("操作失败"), 1000);
// })
// promise.then(data => {
//     console.log(data);
    
// }).catch(error => {
//     console.log(error);
    
// }).finally(() => {
//     console.log("结束promise调用");
    
// })
const promises = [
    CustomPromise.reject(1),
    CustomPromise.reject(2),
    CustomPromise.reject(3)
]
CustomPromise.all(promises).then(result => {
    console.log(result);
    
}).catch(error => {
    console.log(error);
    
})
CustomPromise.race(promises).then(result => {
    console.log(result);
    
}).catch(error => {
    console.log(error);
    
})
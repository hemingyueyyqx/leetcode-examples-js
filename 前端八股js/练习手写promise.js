class MyPromise {
    // 定义三种状态
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    // 定义构造器
    constructor(executor) {
        // 初始化数据
        this.status = MyPromise.PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        // 定义resolve
        const resolve = (value) => {
            if (this.status === MyPromise.PENDING) {
                this.status = MyPromise.FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback());
            }
        }
        // 定义reject
        const reject = (reason) => {
            if (this.status === MyPromise.PENDING) {
                this.status = MyPromise.REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(callback => callback());
            }
        }
        // 构造器将resolve和reject传递给执行器
        try {
            executor(resolve,reject)
        } catch (error) {
            // 通过定义try-catch手动捕获同步错误
            reject(error);
        }
    }
    // 定义then方法
    then(onFulfilled, onRejected) {
        //判断传入参数是否是函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };
        //返回MyPromise
        return new MyPromise((resolve, reject) => {
            //定义处理成功回调的函数
            const handleFulfilled = () => {
                // 用try-catch处理
                try {
                    const result = onFulfilled(this.value);
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            }
            //定义处理失败回调的函数
            const handleRejected = () => {
                // 用try-catch处理
                try {
                    const result = onRejected(this.reason);
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            }
            //判断状态
            if (this.status === MyPromise.FULFILLED) {
                setTimeout(handleFulfilled, 0);
            } else if (this.status === MyPromise.REJECTED) {
                setTimeout(handleRejected, 0);
            } else {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(handleFulfilled, 0);
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(handleRejected, 0);
                })
            }

        })
    }
    //定义catch
    catch(onRejected) {
        this.then(null, onRejected);
    }
    //定义finally
    finally(callback) {
        this.then(
            value => MyPromise.resolve(callback()).then(() => value),
            reason => MyPromise.resolve(callback).then(() => { throw reason; })
        )
    }
    //定义resolve静态方法
    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        }
        return new MyPromise((resolve) => {
            resolve(value);
        })
    }
    // 定义reject静态方法
    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason)
        })
    }
    //定义.all静态方法
    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const results = [];
            const count = 0;
            if (promises.length === 0) {
                resolve(results);
                return;
            }
            promises.forEach((promise, index) => {
                MyPromise.resolve(promise).then(value => {
                    results[index] = value; 
                    count++;
                if (count === promises.length) {
                    resolve(results);
                }
                })
                    .catch(reason => {
                        reject(reason);
                })
               
                
            })
        })
    }
    // 定义race静态方法
    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise) => {
                MyPromise.resolve(promise).then(value => {
                    resolve(value)
                }).catch((reason)=>{
                    reject(reason)
                })
            })
        })
    }
}
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => { resolve("操作成功") },1000)
    
})
promise.then(value => {
   console.log(value);
    
}).catch(error => {
    console.log(error);
    
})
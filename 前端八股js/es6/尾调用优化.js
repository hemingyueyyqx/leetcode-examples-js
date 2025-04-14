// 函数名：factorial，用于计算一个数的阶乘。
// 参数：
// n：表示要计算阶乘的数。
// total：是一个可选参数，用于保存当前的阶乘计算结果，默认值为 1。
function factorial(n, total = 1) {
    // 这是递归函数的终止条件。当 n 的值等于 1 时，递归过程结束，函数直接返回当前的 total 值。因为 1 的阶乘就是 1，此时 total 已经保存了最终的阶乘结果
    if (n === 1) return total;
//     // 递归调用：如果 n 不等于 1，函数会进行递归调用。将 n - 1 作为新的 n 值传递给下一次递归调用，同时将 n * total 作为新的 total 值传递。这样每次递归调用都会将 n 的值减 1，并更新 total 的值为当前 n 与之前 total 的乘积。
// 尾调用优化：尾调用是指一个函数的最后一个操作是调用另一个函数。在这个例子中，return factorial(n - 1, n * total); 是函数的最后一个操作，属于尾调用。尾调用优化是一种优化技术，它可以避免在递归调用过程中不断创建新的栈帧，从而减少内存的使用。在支持尾调用优化的 JavaScript 引擎中，递归调用不会导致栈溢出错误，因为每次递归调用都会复用当前的栈帧。
  return factorial(n - 1, n * total); // 尾调用优化
}
function factorial(n, total = 1) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

const result = factorial(5);
// console.log(result); // 输出: 120

// 这个函数在计算较大项数的斐波那契数列时，递归调用的次数会呈指数级增长，导致栈空间被迅速耗尽。
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 计算第50项斐波那契数列（可能导致栈溢出）
console.log('111',fibonacci(50));

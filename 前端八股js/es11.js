const obj = { a: { b: { c: null } } }
// 可选链操作符
// console.log(obj.a?.b?.c?.d);
const a = null;
const b = 0;
// 空值合并运算符，当值为null或undefined时提供默认值，简化了条件判断。
// console.log(a ?? b);
// console.log(b ?? 9);
// .at()方法
const arr = [1, 6, 2, 3, 4, 5]
console.log(arr[arr.length - 2]);
console.log(arr.at(-2));
console.log(arr.at(2));
const str = "hello"
console.log(str.at(-1));
const arr1 = ["hello", "world"]
console.log(arr1.at(-1));
// bigint
const c = 10n;
console.log(typeof c);
// 当数值超过 2^53 - 1（即 Number.MAX_SAFE_INTEGER，约 9007199254740991）时，普通 Number 会失去精度，而 BigInt 可以精确表示任意大的整数。
// Number 超出安全范围会失去精度
console.log(9007199254740992 === 9007199254740993); // true（错误！）

// BigInt 可以精确表示
console.log(9007199254740992n === 9007199254740993n); // false（正确）
console.log(Number(10n)+5)
// Promise.allSettled
// Promise.allSettled() 是 ES2020 引入的 Promise 静态方法，用于并行处理多个 Promise，并在 ** 所有 Promise 都完成（无论成功还是失败）** 后返回结果数组。与 Promise.all() 不同，它不会因某个 Promise 失败而立即终止，而是会等待所有 Promise 都有结果。
// 示例 1：所有 Promise 成功
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3)
]
Promise.allSettled(promises).then(resuls => {
    console.log(resuls);
    
})
Promise.all(promises).then(results => {
    console.log(results);
    
}).catch(error => {
    console.log(error);
    
})


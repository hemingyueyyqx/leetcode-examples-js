// ES5
//apply 是 JavaScript 中所有函数都拥有的方法，其作用是改变函数的 this 指向并调用该函数。apply 方法接收两个参数：
// 第一个参数是要绑定的 this 值，若不需要改变 this 指向，可传入 null 或 undefined。
// 第二个参数是一个数组，数组中的元素会被展开作为原函数的参数。
Math.max.apply(null, [1, 2, 3]);

// ES6
Math.max(...[1, 2, 3]);
// ...numbers：使用了 JavaScript 中的剩余参数（Rest Parameters）语法。剩余参数允许你将一个不定数量的参数表示为一个数组。在 sum 函数中，...numbers 会把所有传递给 sum 函数的参数收集到一个名为 numbers 的数组中。例如，当调用 sum(1, 2, 3) 时，numbers 数组的值就是 [1, 2, 3]。
// reduce 方法：reduce 是数组的一个高阶方法，用于对数组中的每个元素执行一个累加器函数，并将结果汇总为单个值。它接收两个参数：
// 累加器函数：这是一个回调函数，用于定义如何对数组元素进行累加操作。在这个例子中，累加器函数是 (a, b) => a + b，它接收两个参数 a 和 b，并返回它们的和。a 是累加的结果，b 是当前正在处理的数组元素。
// 初始值：这是可选的参数，用于指定累加的初始值。在这个例子中，初始值为 0。
// 执行过程：
// 第一次执行累加器函数时，a 的值为初始值 0，b 的值为数组的第一个元素 1，a + b 的结果为 0 + 1 = 1。
// 第二次执行时，a 的值为上一次的结果 1，b 的值为数组的第二个元素 2，a + b 的结果为 1 + 2 = 3。
// 第三次执行时，a 的值为上一次的结果 3，b 的值为数组的第三个元素 3，a + b 的结果为 3 + 3 = 6。
// 由于数组中没有更多的元素，reduce 方法最终返回 6。
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
// [].concat()：concat 是 JavaScript 数组对象的一个方法，用于合并两个或多个数组。[].concat() 表示创建一个空数组，然后使用 concat 方法来合并其他数组。
// 这段代码通过 concat 方法和扩展运算符实现了嵌套数组的扁平化。需要注意的是，这种方法只能处理一层嵌套的数组。如果数组的嵌套层次更深，例如 [[[1]], [2, [3]], [4]]，这个函数就无法将其完全扁平化。对于多层嵌套的数组，可能需要使用递归等更复杂的方法来实现完全扁平化。
sum(1, 2, 3); // 6
function flatten(arr) {
  return [].concat(...arr);
}
flatten([[1], [2, 3], [4]]); // [1, 2, 3, 4]


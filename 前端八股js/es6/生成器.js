// function*：这是定义生成器函数的语法。在 JavaScript 中，在 function 关键字后面加上 * 就表示这是一个生成器函数。生成器函数与普通函数不同，它可以暂停和恢复执行，并且能返回多个值。
// let id = 1：在生成器函数内部，定义了一个变量 id 并初始化为 1，这个变量将作为生成的 ID 的起始值。
// while (true)：使用一个无限循环，确保生成器可以持续生成 ID。
// yield id++：yield 是生成器函数的关键关键字。当执行到 yield 语句时，生成器函数会暂停执行，并将 yield 后面的表达式的值返回给调用者。在这里，yield id++ 会先返回当前的 id 值，然后再将 id 的值加 1。当再次调用生成器的 next 方法时，函数会从暂停的位置继续执行。
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
// gen.next()：调用生成器对象的 next 方法会继续执行生成器函数，直到遇到下一个 yield 语句。next 方法返回一个对象，该对象包含两个属性：
// value：表示 yield 后面表达式的值。
// done：是一个布尔值，表示生成器函数是否已经执行完毕。在这个例子中，由于使用了无限循环，done 始终为 false。
// 第一次调用 gen.next().value 时，生成器函数从开始执行，遇到 yield id++，此时 id 的值为 1，所以返回 1，然后函数暂停。
// 第二次调用 gen.next().value 时，生成器函数从暂停的位置继续执行，id 的值已经变为 2，再次遇到 yield id++，返回 2，然后函数再次暂停。
// const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

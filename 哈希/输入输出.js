// require 是 Node.js 中用于引入模块的函数。
// readline 是 Node.js 的内置模块，它提供了一种逐行读取可读流（如 process.stdin）的接口，方便我们与用户进行交互。
const readline = require('readline');
// readline.createInterface 是 readline 模块提供的一个方法，用于创建一个 readline.Interface 实例。
// input: process.stdin：指定输入流为标准输入，即用户在命令行输入的内容。process.stdin 是 Node.js 中代表标准输入的可读流。
// output: process.stdout：指定输出流为标准输出，即程序将信息输出到命令行显示。process.stdout 是 Node.js 中代表标准输出的可写流。
// 创建 readline 接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.question 是 readline.Interface 实例的一个方法，用于向用户提出一个问题，并等待用户输入答案。
// 第一个参数 '请输入一个整数: ' 是提示信息，会显示在命令行中，提示用户输入内容。
// 第二个参数是一个回调函数，当用户输入内容并按下回车键后，该回调函数会被调用。回调函数的参数 input 就是用户输入的内容，它是一个字符串类型。
// let line = parseInt(input);：使用 parseInt 函数将用户输入的字符串转换为整数。parseInt 函数尝试将字符串解析为整数，如果字符串不能被正确解析为整数，它会返回 NaN（Not a Number）。
// console.log('你输入的整数是:', line);：使用 console.log 函数将提示信息和用户输入转换后的整数输出到命令行。
// rl.close();：调用 rl.close() 方法关闭 readline 接口，释放相关资源。一旦关闭，就不能再使用该接口读取用户输入了。
// 读取输入行
rl.question('请输入一个整数: ', (input) => {
    let line = parseInt(input);
    console.log('你输入的整数是:', line);
    // 关闭 readline 接口
    rl.close();
});






const buffer = new ArrayBuffer(8,{maxByteLength:32}) //创建一个 8 字节的 ArrayBuffer
console.log(buffer);
console.log(buffer.maxByteLength);
// // 修改buffer的长度
// buffer.resize(16)
// console.log(buffer.byteLength);

// 创建一个视图，可以按无符号 8 位整数读写数据
// const view = new Uint8Array(buffer)
// console.log(view);

// view[0] = 1;
// console.log(view[0]);
// console.log(buffer.detached, 'buffer创建');
// // buffer 转移
// es2024实验特性
// const transferred = buffer.transfer();
// console.log(buffer.detached, 'buffer转移');
// console.log(transferred.detached, 'transferred.detached');
// const str = "kkkk"

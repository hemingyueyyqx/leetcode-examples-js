// ArrayBuffer：它是 JavaScript 中用于表示二进制数据的底层数据结构，是一段固定长度的连续内存区域，用于存储二进制数据。
// new ArrayBuffer(16)：使用 new 关键字创建一个 ArrayBuffer 对象，括号中的 16 表示该 ArrayBuffer 的长度，单位是字节（byte）。这意味着这个 ArrayBuffer 对象会在内存中分配 16 字节的连续空间，可用于存储二进制数据。
// 类型化数组（Typed Arrays）：JavaScript 提供了多种类型化数组，如 Int8Array、Uint8Array、Int16Array、Int32Array 等，用于以特定的数据类型（如 8 位整数、16 位整数、32 位整数等）来操作 ArrayBuffer 中的数据。
// new Int32Array(buffer)：创建一个 Int32Array 类型的视图对象 int32View，它会将 buffer 这个 ArrayBuffer 对象作为存储数据的底层缓冲区。Int32Array 表示以 32 位有符号整数的形式来访问和操作 buffer 中的数据。
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
// 由于 Int32Array 每个元素占用 4 个字节（32 位），而 buffer 的长度是 16 字节，所以 int32View 这个 Int32Array 视图对象可以存储 4 个 32 位有符号整数（16 ÷ 4 = 4）。你可以通过索引来访问和修改 int32View 中的元素，例如：

// 设置第一个元素的值为 100
int32View[0] = 100;

// 获取第一个元素的值
console.log(int32View[0]); // 输出: 100

// DataView：DataView 是 JavaScript 中用于以任意方式读取和写入 ArrayBuffer 中二进制数据的对象。它提供了一组方法，可以按照不同的数据类型（如整数、浮点数等）来访问和修改 ArrayBuffer 中的数据。
// new DataView(buffer)：使用 new 关键字创建一个 DataView 对象 view，并将之前创建的 ArrayBuffer 对象 buffer 作为参数传递给它。这样，view 就可以对 buffer 中的二进制数据进行读写操作。
// setInt32 方法：setInt32 是 DataView 对象的一个方法，用于将一个 32 位有符号整数写入到 ArrayBuffer 中指定的字节偏移位置。
// 参数解释：
// 第一个参数 0 表示字节偏移量，即从 ArrayBuffer 的第 0 个字节开始写入数据。
// 第二个参数 42 是要写入的 32 位有符号整数值。
const view = new DataView(buffer);
view.setInt32(0, 42);
console.log(view.getInt32(0)); // 42

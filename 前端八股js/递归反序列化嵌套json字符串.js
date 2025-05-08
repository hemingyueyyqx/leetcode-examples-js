// 递归实现反序列化为JS对象
const parseObject = (data) => {
  let newValue = data;
  //使用 Object.entries(data) 方法将对象 data 转换为一个由键值对组成的数组，然后使用 for...of 循环遍历这个数组。在每次循环中，key 是对象的键，value 是对象的值。
  for (const [key, value] of Object.entries(data)) {
    if (value instanceof Array) {
      //如果 value 是一个数组，使用 forEach 方法遍历数组中的每个元素，并递归调用 parseObject 函数处理这些元素。
      value.forEach((d) => {
        parseObject(d);
      });
    }
    if (typeof value == "object") {
      //如果 value 是一个对象（除了 null），递归调用 parseObject 函数处理这个对象
      parseObject(value);
    }
    //  首先检查 value 是否为字符串，并且该字符串包含 {" 或 [，这是 JSON 对象或数组的起始符号，以此来判断该字符串可能是一个 JSON 字符串。
    // 如果满足条件，使用 JSON.parse 方法尝试将该字符串解析为 js 对象，并将解析结果存储在 newValue 中。
    // 如果解析结果是一个对象，递归调用 parseObject 函数处理这个对象，并将处理结果赋值给原对象 data 中对应的键。
    // 使用 try...catch 块捕获解析过程中可能出现的错误，如果解析失败，不做任何处理。
    if (
      typeof value == "string" &&
      (value.includes('{"') || value.includes("["))
    ) {
      try {
        newValue = JSON.parse(value);
        if (typeof newValue == "object") {
          data[key] = parseObject(newValue);
        }
      } catch (error) {
        //
      }
    }
  }
  return newValue;
};
const resp1 = "{\"person\": {\"name\": \"John Doe\", \"age\": 30, \"address\": {\"street\": \"123 Main St\", \"city\": \"Anytown\", \"state\": \"CA\", \"zip\": \"12345\"}}, \"hobbies\": [\"reading\", \"swimming\", \"running\"], \"friends\": [{\"name\": \"Jane Smith\", \"age\": 28}, {\"name\": \"Bob Johnson\", \"age\": 32}], \"extra\": \"{\\\"info\\\": \\\"Some nested JSON data\\\"}\"}";
const obj = JSON.parse(resp1);
 parseObject(obj);

// console.log('obj:', obj);
console.log(obj);
// console.log();

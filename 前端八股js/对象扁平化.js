function flattenObject(obj, parentKey = '', result = {}) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          // 递归处理嵌套对象
          flattenObject(obj[key], newKey, result);
        } else {
          // 基本类型或数组直接赋值
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }

 const test = {a:3,b:{c:4,d:[6,6]}}
console.log(flattenObject(test))
function hasCircularReference(object) {
    //定义一个集合存放已经被访问过的对象
    const visited = new Set();
    //定义递归函数判断
    const isCircularReference = (obj) => {
        //判断是否是对象
        if (typeof obj === 'object' && obj !== null) {
            //递归终止条件
            if (visited.has(obj)) {
                return true;
            }
            //将当前对象加入集合
            visited.add(obj);
            // 遍历对象
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    //递归属性的值，如果属性值是对象，返回true
                    if (isCircularReference(obj[key])) {
                        return true;
                    }
                }
            }
            //遍历结束后将对象从集合中移除
            visited.delete(obj);
            
        }
        return false;
    }
    //初始调用
    return isCircularReference(object);
}
const obj1 = {};
const obj2 = { ref: obj1 };
obj1.ref = obj2;
const obj3 = { ref: {a:1} };

console.log(hasCircularReference(obj3));  
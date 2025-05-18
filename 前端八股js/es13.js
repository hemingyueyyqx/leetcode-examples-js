// es13之前类的表示方法
class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
}
const person = new Person("zhangsan", 18)
console.log(person);
// es13之后
class Person1 {
    // constructor (name,age){
        name = "lisi";
        age = 19;
    // }
}
let person1 = new Person1();
console.log(person1);
//  私有方法和字段
class Person2 {
    // constructor (name,age){
        #firstName = "si";
        #lastName = "li";
    get name() {
        return `${this.#firstName}${this.#lastName}`
    }
    
    // }
}
const person2 = new Person2();
console.log(person2.name);
// await顶层操作
function setTimeoutAsync(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        },time)
    })
}
(async function run() {
    console.log('开始等待...');
    await setTimeoutAsync(3000);
    console.log('等待3秒后继续执行');
})()
// await setTimeoutAsync(3000)
// 从数组最后查找 findLast findLastIndex
// find findIndex 
const arr = [1, 2, 10, 9, 9,14] 
const find = arr.find((value) => value === 9)
const findIndex = arr.findIndex((value)=>value ===9)
console.log(find);
console.log(findIndex);
const findLast = arr.findLast((value) => value === 9)
const findLastIndex = arr.findLastIndex((value)=>value ===9)
console.log(findLast);
console.log(findLastIndex);


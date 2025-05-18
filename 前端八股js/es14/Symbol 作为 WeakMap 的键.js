const privateProps = new WeakMap();

class Person {
  constructor(name) {
    // 创建唯一的 Symbol 并存储为实例属性
    this.privateKey = Symbol('private');
    privateProps.set(this.privateKey, { age: 0 });
    this.name = name;
  }

  incrementAge() {
    // 直接使用存储的 Symbol 访问 WeakMap
    const privateData = privateProps.get(this.privateKey);
    privateData.age++;
  }

  getAge() {
    return privateProps.get(this.privateKey).age;
  }
}

const person = new Person('Alice');
console.log(person);

person.incrementAge();
console.log(person.getAge()); // 1
console.log(person.age);      // undefined
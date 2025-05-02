//面试题二

var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person2 = { name: 'person2' }
// person1.foo1();
const newF = person1.foo1.bind(person2);
// console.log(newF);
// newF();

// person1.foo2();
// person1.foo2.apply(person2)
// person1.foo3()()
// person1.foo3.apply(person2)()
// person1.foo3().apply(person2)
// person1.foo4()()
// person1.foo4.apply(person2)()
// person1.foo4().apply(person2)
console.log(typeof [1,2,3]);
console.log(isNaN());
console.log(Number.isNaN(5));



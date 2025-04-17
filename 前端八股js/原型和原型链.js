function Person() {
  this.getName = function () {
    console.log('person')
  }
}
Person.prototype.getProtoName = function () {
  console.log('proto person')
}
const person = new Person()
const person1 = new Person()
console.log(Person.prototype === person.__proto__);
console.log(person.__proto__);


 
console.log(person.getName === person1.getName) // false
console.log(person.getProtoName === person1.getProtoName) // true
 
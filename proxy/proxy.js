const target = {
  name: 'John',
  age: 30
};
 
const handler = {
  get(target, property) {
    console.log(`Getting property: ${property}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting property: ${property} to ${value}`);
    target[property] = value;
  }
};
 
const proxy = new Proxy(target, handler);
 
proxy.name; // Output: "Getting property: name"，返回 "John"
proxy.age = 31; // Output: "Setting property: age to 31"
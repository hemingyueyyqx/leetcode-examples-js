const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log(typeof symbol1);
// Expected output: "symbol"
console.log(symbol1);

console.log(symbol2 === 42);
console.log(symbol2);

// Expected output: false
console.log(symbol3);

console.log(symbol3.toString());
// Expected output: "Symbol(foo)"
// Symbols 与 for...in 迭代
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";
console.log(obj);

for (var i in obj) {
  console.log(i); // logs "c" and "d"
}
console.log(JSON.stringify({ [Symbol("foo")]: "foo" })
);

// '{}'



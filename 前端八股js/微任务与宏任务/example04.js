async function async1() {
  console.log('async1');
}

async function async2() {
  console.log('async2 start');
  await async1();
  console.log('async2 end');
}

setTimeout(function() {
  console.log('setTimeout');
}, 0);

console.log('script start');

async2();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});

console.log('script end');
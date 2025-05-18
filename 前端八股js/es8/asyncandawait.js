async function fn() {
    return 10;
}
console.log(fn());
fn().then(data => {
    console.log(data)
})
async function getFn() {
   const data1 = await fn();
console.log(data1); 
}
getFn()


// async function fn1() {
//     const p1 = Promise.resolve(300)
//     const res = await p1;
//     const a = await 1;
//     console.log(res);
//     console.log(a);
    
// }
// fn1()


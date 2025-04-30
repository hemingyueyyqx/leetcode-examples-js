setTimeout(()=>{
  new Promise(resolve =>{
  	resolve();
  }).then(()=>{
  	console.log('test');
  });
  console.log(4);
});

new Promise(resolve => {
  resolve();
  console.log(1)
}).then( () => {
  console.log(3);
  Promise.resolve().then(() => {
    console.log('before timeout');
  }).then(() => {
    Promise.resolve().then(() => {
      console.log('also before timeout')
    })
  })
})
console.log(2);


// 1.遇到setTimout，异步宏任务，放入宏任务队列中
// 2.遇到new Promise，new Promise在实例化的过程中所执行的代码都是同步进行的，所以输出2
// 3.而Promise.then中注册的回调才是异步执行的，将其放入微任务队列中
// 4.遇到同步任务console.log(‘5’);输出5；主线程中同步任务执行完
// 5.从微任务队列中取出任务到主线程中，输出3、 4，微任务队列为空
// 6.从宏任务队列中取出任务到主线程中，输出1，宏任务队列为空

setTimeout(function () {
	console.log('1');
});
new Promise(function(resolve){		    
	console.log('2');
	resolve();
}).then(function(){		    
	console.log('3');
}).then(function(){
console.log('4')
}); 		
console.log('5');
// 2 5 3 4 1

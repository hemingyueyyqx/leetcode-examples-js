function fnSum(a,b,c){//求和函数
	return a+b+c
} 
function curry2(fn){
    //接收一个后面的参数 除了fn的参数
    // arguments 对象：在 JavaScript 中，每个函数内部都有一个 arguments 对象，它是一个类数组对象，包含了函数调用时传递的所有参数。需要注意的是，arguments 并不是真正的数组，它没有数组的方法和属性。
    // call 是函数的一个方法，用于调用函数并指定函数内部的 this 值，同时可以传递参数给函数。在这里，Array.prototype.slice.call(arguments, 1) 的作用是将 slice 方法应用到 arguments 对象上，就好像 arguments 是一个真正的数组一样。
    // let args = Array.prototype.slice.call(arguments, 1) 这句话的意思是，从 arguments 对象中提取从索引 1 开始到末尾的所有元素，并将这些元素组成一个新的数组赋值给变量 args。也就是说，args 数组包含了除第一个参数（即函数 fn）之外的所有参数。
let args = Array.prototype.slice.call(arguments,1)
return function(){
    let newArg = args.concat(Array.from(arguments)) //将内部函数的参数和外部的参数合并
    if (newArg.length < fn.length) { //参数没有到三个 fn.length获取传递的函数的参数个数
        // return curry2.call(this, fn,...newArg) 这行代码的作用是递归调用 curry2 函数，将当前的 this 值、原始函数 fn 以及已经收集到的参数数组 newArg 传递进去。这样做的目的是为了实现柯里化（currying），即逐步收集函数的参数，直到收集到足够的参数（达到原始函数所需的参数个数），然后再调用原始函数并返回结果
        return curry2.call(this,fn,...newArg) //又套了一个function  这个this指向这个function 如果没有到达会一直套这个方法
    }else{
        return fn.apply(this,newArg) //将内部函数自动指向 传入所有的参数 
    } 
}
}
let fn3 = curry2(fnSum) //函数
console.log(fn3(1)()(2)()(3)); //6
console.log(fn3()(1)()(2)()()); //偏函数  function

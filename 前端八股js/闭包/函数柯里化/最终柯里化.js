function fnSum(a,b,c){//求和函数
	return a+b+c
} 
function curry2(fn){
//接收一个后面的参数 除了fn的参数
let args = Array.prototype.slice.call(arguments,1)
return function(){
    let newArg = args.concat(Array.from(arguments)) //将内部函数的参数和外部的参数合并
    if(newArg.length < fn.length){ //参数没有到三个 fn.length获取传递的函数的参数个数
        return curry2.call(this,fn,...newArg) //又套了一个function  这个this指向这个function 如果没有到达会一直套这个方法
    }else{
        return fn.apply(this,newArg) //将内部函数自动指向 传入所有的参数 
    } 
}
}
let fn3 = curry2(fnSum) //函数
console.log(fn3(1)()(2)()(3)); //6
console.log(fn3()(1)()(2)()()); //偏函数  function

function fnSum(a,b,c){//求和函数
  return a+b+c
} 
function curry1(fn){
  //接收一个后面的参数 除了fn的参数
  let args = Array.prototype.slice.call(arguments,1)//从下标1开始全部剪切  把Array里面的slice方法加给外部函数的arguments
  return function(){
      let newArg = args.concat(Array.from(arguments)) //将内部函数的参数和外部的参数合并
      return fn.apply(this,newArg) //将内部函数自动指向 传入所有的参数
  }
}
let fn2 = curry1(fnSum,1,2) //函数
console.log(fn2(3)); //6

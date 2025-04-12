function fnSum(a,b,c){//求和函数
    return a+b+c
}
//简单柯里化 他就是使用了一个函数来改造原本的函数
function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}
//调用 避免了多余的无用参数传递
let fnCurry = curry(fnSum) //函数
console.log(fnCurry(1)(2)(3));//6

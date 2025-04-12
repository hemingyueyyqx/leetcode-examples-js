function outerFun() {
    let outerVar = '我在outer函数里!';
    function innerFun() {
      console.log(outerVar);
    }
    return innerFun;
  }
  const innerFn1 = outerFun();
  innerFn1(); // 输出: 我在outer函数里!
 function a(){
    function b(){
        var bb = 666
        console.log(aa);  //输出：666
    }
    var aa = 333
    return b
}
var demo = a()
demo()
function addFn(){
    let count = 1
    function a(){
        count++
        console.log(count);
    }
    return a
}
var acc = addFn() 
acc () //2 
acc () //3
acc () //4


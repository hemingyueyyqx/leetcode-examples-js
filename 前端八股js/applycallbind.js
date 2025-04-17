// call()的第一个参数是this要指向的对象，后面传入的是参数列表，参数可以是任意类型，当第一个参数为null、undefined的时候，默认指向window；
// apply()：第一个参数是this要指向的对象，第二个参数是数组
//例如：
var obj = {}//定义一个空的对象
function f(x,y){
console.log(x,y)
console.log(this) //this是指obj
}
f(3, 4);//this是全局对象


f.apply(obj,[1,2]) //后面的值需要用[]括起来
f.call(obj, 1, 2) //直接写
g1 = f.bind(obj)
g1(3, 4)

// call()改过this的指向后，会再执行函数，bind()改过this后，不执行函数，会返回一个绑定新this的函数
//例如：
function f1(){
console.log("看我怎么被调用");
console.log(this) //指向this
}
var obj = {};
f1.call(obj) //直接调用函数
var g = f1.bind(obj); //bind()不能调用函数
g();  //此时才调用函数
// 在判断数据类形式使用typeof，一般不是太准确的，我们可以使用Object.prototype.toString.call()方法来判断一个数据的数据类型
console.log(Object.prototype.toString.call("qq"))            // [Object String] 返回值都是字符串类型
console.log(Object.prototype.toString.call(12))              // [object Number]
console.log(Object.prototype.toString.call(false))           // [object Boolean]
console.log(Object.prototype.toString.call(undefined))       // [object Undefined]
console.log(Object.prototype.toString.call(null))            // [object Null]
console.log(Object.prototype.toString.call(function(){}))    // [object Function]
console.log(Object.prototype.toString.call([]))              // [object Array]
console.log(Object.prototype.toString.call({}))              // [object Object]
// 利用上面的输出的内容进行封装一个函数，以达到判断输入数据的基本类型
   function getType(a){
       var obj = Object.prototype.toString.call(a); //区分对象类型  确定当前的数据的类型
       var sub = obj.substr(8); 
       // stringObject.substr(start,length)  start 要抽取的子符串的起始下标，
       // length 截取的长度，如果不写则表示从start开始截取到最后 ，stringObject表示某一字符串
      var len = sub.length;
      var sub = sub.substr(0,len-1)
      var rs =  sub.toLowerCase(sub) //转换成小写
      return rs ;
    }
console.log(getType("a")); //string

// 利用call()翻转字符串
//思路:将字符串转化为数组，借用数组中的reverse，将字符串翻转过来
     
 var str = "abcdefg";
 console.log(Array.prototype.reverse.call(str)); //此时会报错误，即引用类型错误，就是说只有数组才能使用reverse这个方法；(错误写法)
    //方法一：这种方法内有使用call()
 var arr =  Array.from(str).reverse().join("") //将字符串转化为数组，在进行翻转，然后在进行拼接
 console.log(arr) //gfedcba
 console.log(typeof arr) //string
     //方法二：
var rs = Array.prototype.reverse.call(str.split("")).join(""); 
    //splice(start,length)方法用于把一个字符串分割成字符串数组，start 表示从指定的地方分割字符串    length表示分割的长度。
    //返回一个一个字符串数组 如果把空字符串 ("") 用为参数那么字符串中的每个字符之间都会被分割
console.log(rs); //gfedcba
console.log(typeof arr) //string
// 利用apply()求最大值
var arr =[2,6,8,3,4,9,7,23,56,889]; 
console.log(Math.max.apply(arr,arr)) //第一个arr表示让arr借用max这个方法，第二个arr表示传给max的数据

//apply()所执行的操作：1.执行Math.max(1,2,3,5,4) 2.把内部的this改成arr

function fn1(){
    var type ='JavaScript'
    let tt1 = 1
    const tt2 = 2 
    var innerBar={
        getType: function(){
            console.log(tt1);
            return type 
        },
        setType:function(newType){
            type = newType
        }
    }
    return innerBar
}
var bar = fn1()   
console.log(bar.getType()); //输出：1 JavaScript
bar.setName('python')
console.log(bar.setType()); //输出：1 python

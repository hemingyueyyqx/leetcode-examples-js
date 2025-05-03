function a(){
    function b(){
        var bb = 666
        console.log(aa); 
        // console.log(this);
        
    }
    var aa = 333
    return b
}
var demo = a()
demo()

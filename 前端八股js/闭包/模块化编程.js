const moduleFn = (function() {
    // 定义私有变量
    let privateVar = '我是私有变量!';
    // 定义私有方法
    function privateMethod() {
        console.log(privateVar);
    }
    // 返回一个包含公共方法的对象
    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

// 调用公共方法
moduleFn.publicMethod(); 
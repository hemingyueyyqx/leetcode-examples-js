const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i=0
        return {
            next: () => {
                i++;
                if (i <= 5) {
                    return Promise.resolve({ done: false, value: i })
                } else {
                   return Promise.resolve({ done: true})
                }
            } 
            
        };
    }
};
(async () => {
    for await (const num of asyncIterable) {
        console.log(num); // 依次输出1到5
    }
})();

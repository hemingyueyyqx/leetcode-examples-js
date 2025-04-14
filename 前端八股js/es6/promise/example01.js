// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(1000).then(() => console.log('1秒后执行'));
// function getJSON(url) {
//     return new Promise((resolve, reject) => {
//     //   XMLHttpRequest 是浏览器提供的一个内置对象，用于在浏览器和服务器之间进行异步通信。
// // xhr.open('GET', url) 用于初始化一个新的请求，GET 表示请求方法为获取数据，url 是要请求的资源地址。
//     const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         // xhr.onload 是一个事件处理函数，当请求成功完成（即服务器返回响应）时会触发该函数。在这个函数中，调用 resolve(xhr.responseText) 将 Promise 的状态变为 fulfilled，并将服务器返回的响应文本（即 JSON 数据）作为结果传递出去。
// // xhr.onerror 是一个事件处理函数，当请求过程中发生错误（如网络问题）时会触发该函数。在这个函数中，调用 reject(xhr.statusText) 将 Promise 的状态变为 rejected，并将错误信息（如状态文本）作为失败原因传递出去。
//     xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);
//         // 调用 xhr.send() 方法来发送之前配置好的请求。
//     xhr.send();
//     });

// }
// // 使用示例
// getJSON('https://www.doubao.com/chat/3028997527625474')
//    .then(data => {
//         console.log('请求成功，返回的数据：', data);
//     })
//    .catch(error => {
//         console.error('请求失败，错误信息：', error);
//    });
// //    fetch 是现代浏览器提供的一个用于发起网络请求的 API，它返回一个 Promise 对象。当请求发起后，该 Promise 对象会在请求完成时被解决（resolved），并返回一个 Response 对象，该对象包含了服务器的响应信息。
// // .then 方法用于处理 fetch 返回的 Promise 对象解决后的结果。它接收一个回调函数作为参数，该回调函数会在 Promise 解决时被调用，并且会传入 Response 对象作为参数。
// // response.ok 是 Response 对象的一个属性，它是一个布尔值，表示响应的 HTTP 状态码是否在 200 - 299 范围内。如果 response.ok 为 false，说明请求可能失败了，此时通过 throw new Error('Network response was not ok') 抛出一个错误，这个错误会被后续的 catch 方法捕获。
// // 如果 response.ok 为 true，说明请求成功，调用 response.json() 方法将响应的内容解析为 JSON 格式。response.json() 方法也返回一个 Promise 对象，当解析完成时，该 Promise 对象会被解决，并返回解析后的 JSON 数据。
//     function fetchData(url) {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     });
// }
// // 使用示例
// fetchData('https://api.example.com/data')
//   .then(data => {
//         console.log('请求成功，返回的 JSON 数据：', data);
//     })
//   .catch(error => {
//         console.error('请求失败，错误信息：', error);
//   });
    function retry(fn, times) {
  return new Promise((resolve, reject) => {
    function attempt() {
      fn().then(resolve).catch(err => {
        if (times-- > 0) attempt();
        else reject(err);
      });
    }
    attempt();
  });
}

// 模拟一个可能失败的异步操作
function asyncOperation() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.8) {
            reject(new Error('Operation failed'));
        } else {
            resolve('Operation succeeded');
        }
    });
}

// 使用 retry 函数进行重试
retry(asyncOperation, 3)
  .then(result => {
        console.log('最终结果：', result);
    })
  .catch(error => {
        console.error('重试多次后仍失败，错误信息：', error);
    });


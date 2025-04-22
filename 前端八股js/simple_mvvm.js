// 定义 ViewModel 构造函数
function ViewModel(data) {
    this.data = data;
    this.bindings = {};

    // 遍历数据对象的属性
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            // 使用 Object.defineProperty 实现数据劫持
            Object.defineProperty(this, key, {
                get: function () {
                    return this.data[key];
                },
                set: function (newValue) {
                    this.data[key] = newValue;
                    // 数据更新时通知所有绑定的元素更新视图
                    if (this.bindings[key]) {
                        this.bindings[key].forEach(function (element) {
                            element.textContent = newValue;
                        });
                    }
                }
            });
        }
    }
}

// 定义绑定函数
ViewModel.prototype.bind = function (key, element) {
    if (!this.bindings[key]) {
        this.bindings[key] = [];
    }
    this.bindings[key].push(element);
    // 初始设置元素的文本内容
    element.textContent = this[key];
};

// 使用示例
const data = {
    message: 'Hello, MVVM!'
};

const viewModel = new ViewModel(data);

const element = document.createElement('div');
document.body.appendChild(element);

// 绑定数据和元素
viewModel.bind('message', element);

// 更新数据，视图会自动更新
setTimeout(() => {
    viewModel.message = 'Data updated!';
}, 2000);
        
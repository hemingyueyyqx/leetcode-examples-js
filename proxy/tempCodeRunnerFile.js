let view = new Proxy(
  {
    selected: null,
  },
  {
    set: function (obj, prop, newval) {
      let oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // 默认行为是存储被传入 setter 函数的属性值
      obj[prop] = newval;

      // 表示操作成功
      return true;
    },
  },
);

let i1 = (view.selected = document.getElementById("item-1"));
console.log(i1.getAttribute("aria-selected")); // 'true'

let i2 = (view.selected = document.getElementById("item-2"));
console.log(i1.getAttribute("aria-selected")); // 'false'
console.log(i2.getAttribute("aria-selected")); // 'true'

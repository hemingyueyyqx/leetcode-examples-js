// var str = "abc123def";
// var patt1 = /[0-9]+/;
// let result = str.match(patt1)
// console.log( result[0]);
// var str = "Is is the cost of of gasoline going up up";
// var patt1 = /\b([a-z]+) \1\b/igm;
// let res = str.match(patt1);
// console.log(res);
var str = "https://www.runoob.com:80/html/html-tutorial.html";
var patt1 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
arr = str.match(patt1);
console.log(arr);
// for (var i = 0; i < arr.length ; i++) {
//     document.write(arr[i]);
//     document.write("<br>");
// }

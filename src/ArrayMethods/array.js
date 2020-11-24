// const array = [1, 2, 3, 4, 5, 6];

// map
// const result = array.map(function(elem, idx, arr){
//     return elem * 2;
// });
// console.log(result);

// const result = array.map((elem, idx, arr) => {
//   return elem * 2;
// });
// console.log(result);

// const result = array.map((elem, idx, arr) =>  elem * 2);
// console.log(result);

/*
  上面幾種方法是一樣的意思哦，但是通常會用下面的方式去寫因為看起來比較簡短
*/

// filter
// const result = array.filter((elem, idx, arr) => elem % 2 === 0);
// console.log(result);
/*
  這邊的意思是回傳除以2之後餘數等於0的值，並建立一個新的result array
*/

// reduce
// array.reduce(函式(accumulator, elem, idx, arr), initValue);
// 所謂的accumulator
//                0  1  3   6  10  15
// const array = [1, 2, 3,  4,  5,  6];
//                1  3  6  10  15  21
//                初使值是0加上array的1
// 最後結果就是最後的accmulator = 21
// const result = array.reduce((accumulator, elem, idx, arr) => {
//   return accumulator + elem
// }, 0);
// console.log(result);
// result = 21
// const result = array.reduce((acc, value) => acc + value, 0);
// console.log(result);

// ****以上三個函式都不會改變原本array的值****

/*
  參考網址：
  1. 從es6開始的Javascript學習生活
  https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/array.html
  2. 常用陣列方法
  https://wcc723.github.io/javascript/2017/12/27/javascript-array-function/
  3. ES6 解構賦值
  https://wcc723.github.io/javascript/2017/12/25/javascript-destructuring/
  4. JavaScript 展開與其餘
  https://wcc723.github.io/javascript/2017/12/24/javascript-spread-operator/
  5. forEach 
  https://wcc723.github.io/javascript/2017/12/26/javascript-array/
*/

let array = [1, 2, 3, 4];

console.log(array.pop());          // (3) [1, 2, 3]         value:4
console.log(array.push(5));        // (5) [1, 2, 3, 4, 5]   value:5
console.log(array.shift());        // (3) [2, 3, 4]         value:1
console.log(array.unshift(0));     // (5) [0, 1, 2, 3, 4]   value:0
// 這幾種做法都會去改變array的裡面的值

array.reverse();
// 這樣array已經被翻轉了哦
// const newArr = array.slice();
const newArr = [...array];
newArr.reverse();
// 這樣就可以達到把array順序對調但是又不影響原本的array的效果

/*
  console.log(array.reverse());
  return array.reverse();
  如果code裡面寫得像是這樣的話會有問題
  因為你在console.log裡面看的時候你已經翻轉過一次了
  但是你在return的時候你又在reverse一次就會變回原本的東西
*/

console.log(array.sort());        // (4) [1, 2, 3, 4]
console.log(array.splice());      // []

/*
  操作上盡量避免去使用這些會mutate array的方法
  如果真的用到的話也會盡量用上面的const newArr這種方法去做變數過水
*/
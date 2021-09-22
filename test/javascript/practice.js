





// const { assert } = require('console');

// function range(start, end, step = start < end ? 1 : -1) {
//     let rangeArray = [];
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) rangeArray.push(i)
//     } else {
//         for (let i = start; i >= end; i += step) rangeArray.push(i);
//     }
//     console.log(rangeArray);
//     return rangeArray;
// }

// range(1, 10);
// range(5, 2);
// range(1, 10, 2);

// function sum(arr) {
//     let total = 0;
//     arr.forEach(element => {
//         total += element;
//     });
//     return total;
// }

// console.log(sum(range(1, 10)));

// // Create a list of object (like linked list) referencing each other
// // Example: 
// // console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// var list = [10, 20]
// function arrayToList(list) {
//     var nestedObj = {}
//     for (let i = list.length - 1; i >= 0; i--) {
//         nestedObj[i] = list[i]
//     }
// }



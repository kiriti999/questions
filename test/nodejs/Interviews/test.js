// let array = [1, 2, 4, 5, 0, 9, 8];

// let array = [1, 0, 0];
let array = [1, 2, 0, 0, 4, 5];
let input = 0;

// console.log('check ', );


let out = array.filter((item, index, arr) => {
    if(item === input) {
        array.splice(index, 0, input);
        array.pop();
    }
    return arr;
});

console.log('out ', out);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element === input) {
//         array.splice(index, 0, input);
//         array.pop();
//         break;
//     }
// }

// console.log('array ', array);


// let array2 = [1, 2, 4, 5, 0, 9, 8];
// let res2 = array2.slice(0, 2);
// console.log(res2);
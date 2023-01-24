// In which order it will print the following:
// console.log("A")
// setTimeout(() => console.log("B"), 0)
// Promise.resolve().then(console.log("C"))
// console.log("D")

// Output of the following:
// for (let i = 0; i <= 6; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }

// Flatten the array with out put of unique values:
let arr = [1, 2, 3, [78, 32, 21, [19, 12, 10, 32, [10, 12, 8, 14, [2, 17]]]], [15, 14, 10]];

let out = [];
let seen = {};
const uArray = (array) => {
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (Array.isArray(element)) {
            uArray(element)
        }
        else {
            if (!(element in seen)) {
                out.push(element);
                seen[element] = true;
            }
        }
    }
}

uArray(arr);
console.log('out ', out);

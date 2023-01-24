// Write a "slowSum" function, takes two arguments and returns the sum after 1 second

const slowSum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    })
}

const getSum = async () => {
    const out = await slowSum(1, 2);
    console.log(out);
}

// getSum();


/*
Create a sum function with n arguments – sum(1, 2, 3, 4, 5, ...)
- Using the slowSum function implement the sum function
- Prints the intermediate/recurring sums after waiting for 1 second
- Returns the result in the end
*/

// let res;
// const sum = async (...array) => {
//     const val = array[0];
//     console.log('val', val);
//     for (let index = 1; index < array.length; index++) {
//         const element = array[index];
//         console.log('element', val, element);
//         res += await slowSum(element, val);
//         // console.log('res ', res);
//     }
// }

// sum(1, 2, 3, 4, 5); //Not working


/* Given a string s containing only lowercase letters,
continuously remove adjacent characters that are the same and return the result.
Ex: Given the following strings...
s = "abccba", return ""
s = "foobar", return "fbar"
s = "abccbefggfe", return "a"
*/

// Answer use stacks and pop if match found
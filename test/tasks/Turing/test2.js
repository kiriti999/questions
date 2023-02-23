// Given a string k of lower case letters, the letters can be repeated and exist consecutively
// A substring from K is considered valid if it contains at least three consecutive identical letters

// let k = 'abcdddeeeeaabbbcd'
// output: [[3, 5][6, 9][12, 14]]
// Explanation: Large groups are 'ddd', 'eeee' and 'bbb'

let k = 'abcdddeeeeaabbbcd';
let letters = k.split('');

const consecutiveLetters = letters.filter((curr, index) => letters.indexOf(curr) !== index);
console.log('consecutiveLetters ', consecutiveLetters)

let i = 0;
let out = [];
let startIndex = 0;
let count = 0;

while (i < consecutiveLetters.length) {
    let curr = consecutiveLetters[i];
    startIndex = i;

    if (consecutiveLetters[i] === curr) {
        i++;
        count++;
    }

    if (count >= 3) {
        out.push([startIndex, i + 1])
        startIndex = 0;
        count = 0;
    }
}

console.log('out ', out); // Incorrect output








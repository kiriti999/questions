/* #region  Hoisting:*/
// ==================
// What will be the out put if I run the below code?
check1();
check2();
function check1() {
    var a = 10;
    console.log(a);
    console.log(b);
    var b = 10;
}

// Variable Scope check
if (true) {
    var a = 10;
    let b = 10;
    const c = 10;
}
console.log(a);
console.log(b);
console.log(c);
// What is the output?
// Answer b is not define error
// Answer c is not define error
/* #endregion */

/* #region  setTimeout inside loop */
// setTimeout inside loop
// ======================
// What will be the out put and how to overcome it

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log('i value is: ', i); // prints 3 three times
    }, 1000);
}

/* #endregion */

/* #region  Implement left rotations / Circular array: */
// Implement left rotations:
// =========================
// Given the inputs:

var numOfLeftRotations = 4;
var sizeOfArray = 5;
var a = [1, 2, 3, 4, 5];
// Example = [1,2,3,4,5] [2,3,4,5,1] [3,4,5,1,2] [4,5,1,2,3] [5,1,2,3,4];

// Out should be:
// 5 1 2 3 4
/* #endregion */

/* #region  Implement the below add function: */
// Implement the below add function:
// ====================
add(2)(5); // should return 7
/* #endregion */

/* #region  Design pattern */
// Design pattern
// ==============

// create a chaining method (chain of responsibility - behavior pattern) in javascript?

// Write an example to create a singleton pattern in javascript?

// Answer for singleton
// ======================
class createEmployee extends Employee {
    constructor(name, money, employer) {
        super(name, money, employer);
    }

    static getInstance(name, money, employed) {
        if (typeof name.instance === 'object') {
            console.log('instance already created');
            return name.instance;
        }
        name.instance = this;
        name.money = money;
        name.employed = employed;
        return this;
    }
}
/* #endregion */

/* #region  Remove duplicates from array */
var arr = [1, 3, 3, 4, 5, 1, 2, 6, 7, 7, 8];

var map = {};
var uniq = [];
arr.forEach(item => {
    if (!map.hasOwnProperty(item)) {
        map[item] = true;
        console.log(item);
        uniq.push(item);
    }
});
console.log(uniq);

var unique = arr.filter((value, index, array) => array.indexOf(value) === index);
console.log('unique', unique);
/* #endregion */


/* #region  Get unique and distinct elements from two arrays: */
let arr = [3, 4, 5, 6, 6, 4, 5, 8, 9, 10, 10];
let arr2 = [11, 11, 11, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6];
// Expected out put return [3, 8, 9, 10, 11]

// Answer:
function unique() {
    var map = {};
    var uniqueArray = [];
    for (let i = 0; i < this.length; i++) {
        if (!map.hasOwnProperty(this[i])) {
            map[this[i]] = true;
            uniqueArray.push(this[i]);
        }
    }
    return uniqueArray;
}

function distinct(arr, arr2) {
    arr = unique.apply(arr);
    arr2 = unique.apply(arr2);
    var result = arr.filter((e) => arr2.indexOf(e) === -1);
    var result2 = arr2.filter((e) => arr.indexOf(e) === -1);
    return [...result, ...result2];
}

console.log('unique ', JSON.stringify(distinct(arr, arr2), 2, null));
/* #endregion */

/* #region The sum of the range   */

// Expected output:
// ================
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
function range(start, end, step = start < end ? 1 : -1) {
    let rangeArray = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) rangeArray.push(i);
    } else {
        for (let i = start; i >= end; i += step) rangeArray.push(i);
    }
    console.log(rangeArray);
    return rangeArray;
}

range(1, 10);
range(5, 2);
range(1, 10, 2);

function sum(arr) {
    let total = 0;
    arr.forEach((element) => {
        total += element;
    });
    return total;
}

console.log(sum(range(1, 10)));
/* #endregion */

/* #region  Find the largest numbers based on n argument */
function findLargest(arr, n) {
    console.log(arr.splice(arr.length - n));
}
findLargest(mergeSort(arr), 3);
/* #endregion */

// Regex for date dd-mm-yyyy or email address

// /* #region   PRAMATI TECHNOLOGIES INTERVIEW QUESTIONS*/

// 1. write polyfill for array.pop();
Array.prototype.pop1 = function () {
    return this.slice(this.length - 1);
};

// 2. get only unique numbers from this array below:
// var arr = [1,1,2,2,3,4,5,'a', 'b','c', false];
arr.filter((e, i, array) => array.indexOf(Number(e)) === i);

// invoke it as array.unique();
Array.prototype.unique = function () {
    return this.filter((e, i, array) => array.indexOf(Number(e)) === i);
};

// 3. based on dynamic arguments, implement the sum
// sum(1)(2)(25)(100)()
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // log 20

// 4. polyfill for bind, debounce, substring

/* #endregion */

/* #region maximize the palindrome javascript  */
//codereview.stackexchange.com/questions/180273/find-palindromic-substrings-as-efficiently-as-possible
Source: https: function countPalindromesInString(s) {
    let subStrings = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            let subString = s.substring(j, j + i + 1);
            if (subString === subString.split('').reverse().join('') && !subStrings.includes(subString)) {
                subStrings.push(subString);
            }
        }
    }
    return subStrings.length;
}
/* #endregion */

/* #region  Get unique and distinct element from two arrays: */
let arr = [3, 4, 5, 6, 6, 4, 5, 8, 9, 10, 10];
let arr2 = [11, 11, 11, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6];
// Expected out put return [3, 8, 9, 10, 11]

// Answer:
function unique() {
    var map = {};
    var uniqueArray = [];
    for (let i = 0; i < this.length; i++) {
        if (!map.hasOwnProperty(this[i])) {
            map[this[i]] = true;
            uniqueArray.push(this[i]);
        }
    }
    return uniqueArray;
}

function distinct(arr, arr2) {
    arr = unique.apply(arr);
    arr2 = unique.apply(arr2);
    var result = arr.filter((e) => arr2.indexOf(e) === -1);
    var result2 = arr2.filter((e) => arr.indexOf(e) === -1);
    return [...result, ...result2];
}

console.log('unique ', JSON.stringify(distinct(arr, arr2), 2, null));
/* #endregion */

/* #region  String compression as input is 'a12c56a1b5' and output is 'a13c56b5' */
//stackoverflow.com/questions/62736865/string-compression-counting-the-repeated-character-in-javascript/62736965?noredirect=1#62736965
https: var str = 'a12c56a1b5';

function stringCompression(str) {
    var chars = str.match(/[a-zA-Z]+/g);
    var charCount = str.match(/[0-9]+/g);
    console.log('chars', chars);
    console.log('charCount', charCount);
    var hash = {};
    chars.forEach((e, i) => {
        if (hash[e]) {
            hash[e] += parseInt(charCount[i]);
        } else {
            hash[e] = parseInt(charCount[i]);
        }
    });
    var r = Object.keys(hash)
        .map((e, i) => e + hash[e])
        .toString()
        .split(',')
        .join('');
    console.log('r ', r);
}

stringCompression(str);
/* #endregion */

/* #region  Anagram */
// Method 1:

var s1 = 'abbbca';
var s2 = 'ababbc';

function checkAnagram(s1, s2) {
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    console.log('s1 === s2; ', s1 === s2);
    s1 === s2;
}
checkAnagram(s1, s2);

// Method 2: o(n)
function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert
        convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    //Get the character map of both strings
    const charMapA = getCharMap(stringA);
    const charMapB = getCharMap(stringB);

    /* Next, we loop through each character in the charMapA,
        and check if it exists in charMapB and has the same value as
        in charMapA. If it does not, return false */
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }

    return true;
}

function getCharMap(string) {
    // We define an empty object that will hold the key - value pairs.
    let charMap = {};

    /*We loop through each character in the string. if the character
        already exists in the map, increase the value, otherwise add it
        to the map with a value of 1 */
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
/* #endregion */

/* #region  count the occurrences of string */
var s1 = 'abbbca';
function checkCount(s1, letter) {
    var map = {};
    for (let i = 0; i < s1.length; i++) {
        count = 1;
        if (!map[s1[i]]) {
            map[s1[i]] = 1;
        } else {
            map[s1[i]] = map[s1[i]] + 1;
        }
    }
    console.log('map ', map);
    console.log(`Letter '${letter}' count: ${map[letter]}`);
}

checkCount(s1, 'a');
/* #endregion */

// Get the count of each key in array using es6
var array = ['a', 'b', 'c', 'a', 'b'];
// call back function taking previous, current, index, array
var result = array.reduce((p, c, i, arr) => {
    p[c] = p[c] ? p[c] + 1 : 1
    return p;
}, {});
console.log('result ', result);

/* #region  Get the second highest number in array containing duplicates */
var arr = [1, 2, 3, 4, 4, 1, 5, 2, 5];
arr = arr.filter((e, i, arr) => arr.indexOf(e) === i).sort();
console.log('arr[1] ', arr[1]);
/* #endregion */

// How to create private constructor in ES5 or create singleton class in es5?
//  Two way binding in pure javascript?


// Print values from array with interval of 1 second:
var array = [1, 2, 3, 4, 5];
var counter = 0;
var timer = setInterval(function () {
    // prints every 2 seconds
    console.log(array[counter]);
    counter++;
    if (counter === array.length) {
        clearInterval(timer);
    }
}, 2000);

// Output of default arg passed in?
function test(name = 'kiriti') {
    console.log(name);
}

test(); // kiriti
test(null); // null
test('k2'); // k2
test(false); // false
test(undefined); // kiriti

/* #region  Fibonacci sequence to print from 1 to 5 */
// 1 1 2 3 5 8 13 21
let n1 = 1, n2 = 1, nextTerm;

for (let i = 1; i <= 5; i++) {
    console.log('n1', n1);
    nextTerm = n1 + n2;
    console.log('nextTerm ', nextTerm);
    n1 = n2;
    n2 = nextTerm;
    console.log('n2 ', n2);
    console.log('');
}

console.log('Fibonacci Series:');
/* #endregion */


/* Find the largest number from the given number after removing the character/number '5' from the below number
    Example:
    1. Given number is 15958 or -15958
    2. Remove matching number 5 from the given number to form two numbers: -1958 and -1598
    3. Find the largest out of both
    4. Refer fiddle: https://jsfiddle.net/codespark/1fet62gw/2/
*/
const num = -15958;
const givenNum = '5';
const indices = getIndices(num, givenNum);

function getSplicedNumber(arr) {
    const isNegative = arr[0] === '-';
    if (isNegative) arr.shift();
    const intNumber = arr.map(strNum => parseInt(strNum));
    const finalNumber = Number(intNumber.join(''));
    return isNegative ? getNegativeNumbers(finalNumber) : finalNumber;
}

function getNegativeNumbers(num) {
    return -Math.abs(num);
}

function getIndices(num, givenNum) {
    const strArr = num.toString().split('');
    const indices = strArr.map((num, i) => num === givenNum ? i : '').filter(String);
    // const indices = strArr.flatMap((num, i) => num === givenNum ? i : []);
    return indices;
}

let stringNumbers1 = num.toString().split('');
let stringNumbers2 = stringNumbers1.slice(0);

stringNumbers1.splice(indices[0], 1);
console.log('stringNumbers1', stringNumbers1)
stringNumbers2.splice(indices[1], 1);

console.log('stringNumbers1', stringNumbers1)
const outputNumber1 = getSplicedNumber(stringNumbers1);
const outputNumber2 = getSplicedNumber(stringNumbers2);
const largestNumber = Math.max(outputNumber1, outputNumber2);
console.log('Numbers: ', outputNumber1, outputNumber2);
console.log('Largest number:', Math.max(outputNumber1, outputNumber2));

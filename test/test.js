// // const arr = ['a', ]

// // function palindrome(str) {
// //     for (let index = 0; index < str.length; index) {
// //         const element = str[index];
// //     }
// // }

// let array = ['a', 'b', 'c', 'd'];

// function getRandomFromArray() {
//     let out = array[Math.floor(Math.random() * array.length)];
//     // console.log('out ', out);
// }

// getRandomFromArray();
// getRandomFromArray();
// getRandomFromArray();
// getRandomFromArray();
// getRandomFromArray();

// const arr = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];

// function getChoices() {
//     const choices = arr.sort(() => Math.random() - 0.5).slice(0, 5);
//     console.log('file: test.js :: line 26 :: choices', choices);
// }

// getChoices();
// getChoices();

Array.prototype.sum = function () {
    var sum = 0;
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        sum += element;
    }
    return sum;
}

var arr = [1, 2, 3];
console.log(arr.sum());
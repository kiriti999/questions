// What is the output of following:
var bar = true;
// console.log(bar + 0);
// console.log(bar + 'xyz');
// console.log(bar + true);
// console.log(bar + false);

// Print values from array with interval of 1 second:
// var array = [1, 2, 3, 4, 5];
// var counter = 0;
// var timer = setInterval(function () {
//     // prints every 2 seconds
//     console.log(array[counter]);
//     counter++;
//     if (counter === array.length) {
//         clearInterval(timer);
//     }
// }, 2000);

// Get the count of each key in array using es6
// var array = ['a', 'b', 'c', 'a', 'b'];
// var result = array.reduce((p, c, i, arr) => {
//     p[c] = p[c] ? p[c] + 1 : 1
//     return p;
// }, {});
// console.log('result ', result);

var a = [1, 2, 3, 1, 5, 4, 6, 4];
// uniqueArray = a.filter(function(item, pos, self) {
//     console.log('item index:', self.indexOf(item), ' pos:', pos);
//     return self.indexOf(item) === pos;
// });

function uniqueArray(a) {
    var seen = {};
    return a.filter(function(item) {
        const r = seen.hasOwnProperty(item) ? false : (seen[item] = true);
        console.log('seen ', seen);
        console.log('r ', r);
        return r;
    });
}

console.log(uniqueArray(a));

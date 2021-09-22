var s1 = 'abbbca';
var s2 = 'ababbc';

function checkAnagram(s1, s2) {
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    console.log('s1 === s2; ', s1 === s2);
    s1 === s2;
}
// checkAnagram(s1, s2);

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
}

checkCount(s1, 'a');

var arr = [1, 2, 3, 4, 4, 1, 5, 2, 5];

arr = arr.filter((e, i, arr) => arr.indexOf(e) === i);

class Book {
    constructor() {}

    method_a() {}
}

const book = new Book();
book.method_a();

// Two way data binding in pure javascript

// var r = [1, 2, 3];
var r = [20, 1, 13, 'name1', 130, 'name2', 101];

// console.log(r.sort((a, b) => b - a));
// console.log(r.sort());

// r.sort((a, b) => {
//     console.log(this);
// });

function test(name = 'kiriti') {
    console.log(name);
}

test(); // kiriti
test(null); // null
test('k2'); // k2
test(false); // false
test(undefined); // kiriti

function minimumBribes(q) {
    // too chaotic special case
    for (let i = 0; i < q.length; i++) {
        if (q[i] > i + 3) {
            console.log('Too chaotic');
            return;
        }
    }

    // bubble sort count
    let count = 0;
    let i = 0;
    while (i < q.length - 1) {
        if (q[i] > q[i + 1]) {
            let x = q[i];
            q[i] = q[i + 1];
            q[i + 1] = x;

            count++;
            i -= 2; // i will be -1 instead of re-starting from the beginning.
        }
        i++;
    }
    console.log(q);
    console.log(count);
}

minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

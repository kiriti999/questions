/* #region  sort and remove duplicates without built in functions:*/
// sort and remove duplicates without built in functions:
var arr = [1, 2, 3, 5, 4, 4];

function bubbleSort(q) {
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

bubbleSort([5, 1, 2, 3, 7, 8, 6, 4]);
bubbleSort([1, 2, 5, 3, 7, 8, 6, 4]);

/* #endregion */

/* #region  Sort the given array [30, 45, 12, 90, 80, 85, 55]; */
var arr = [30, 45, 12, 90, 80, 85, 55];
function merge(left, right) {
    const sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    console.log('sorted arr ', [...sorted, ...left, ...right]);
    return [...sorted, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
/* #endregion */

// /* #region  quick sort for given array = [5, 3, 7, 6, 2, 9]; */
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    console.log('left ', left, 'right ', right);
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        console.log('index ', index);
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var array = [5, 3, 7, 6, 2, 9];
var sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
/* #endregion */

/* #region  Sort objects based on property name */
var list = [
    { name: 'Sameer', place: 'zhyd', id: '4' },
    { name: 'Bhaskar', place: 'bhyd', id: '2' },
    { name: 'Abhinav', place: 'chyd', id: '3' }
];

function sort(prop) {
    list.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
    console.log('list ', list);
}
/* #endregion */

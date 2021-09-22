var acctData = [
    {
        acctNum: 'AAA - 1234',
        user: 'Alice'
    },
    {
        acctNum: 'AAA - 5231',
        user: 'Bob'
    },
    {
        acctNum: 'AAA - 9921',
        user: 'Alice'
    },
    {
        acctNum: 'AAA - 8191',
        user: 'Alice'
    }
];
var balance = {
    'AAA - 1234': 4593.22,
    'AAA - 9921': 0,
    'AAA - 5231': 232142.5,
    'AAA - 8191': 4344
};

function getAccountNumbers(user = '', sortArgs = '', sortDirectionArgs = '') {
    var accounts = [];
    if (user) {
        accounts = acctData.filter((acc, i) => acc.user === user);
        if (accounts.length) {
            accounts[0]['balance'] = balance[accounts[0]['acctNum']];
        }
        return accounts;
    }

    return sortArgs ? _getNumbers(_sortBy, sortArgs) : _getNumbers(_sortDirection, sortDirectionArgs);
}

function _getNumbers(fn, args) {
    return fn(args).map((e) => {
        e['balance'] = balance[e['acctNum']];
        return e;
    });
}

function _sortBy(accountNumber = '', byBalance = '') {
    var sortedArray;
    // accountNumber = acctData.filter(e => e.acctNum === accountNumber);

    if (accountNumber === 'acctNum') {
        sortedArray = acctData.sort((a, b) => a.acctNum.split('-')[1] > b.acctNum.split('-')[1]);
    }

    if (byBalance === 'balance') {
        sortedArray = acctData.sort((a, b) => balance[a.acctNum] > balance[b.acctNum]);
    }

    return sortedArray || [];
}

function _sortDirection(direction) {
    return acctData.sort((a, b) => (direction === 'desc' ? balance[a.acctNum] < balance[b.acctNum] : balance[a.acctNum] > balance[b.acctNum]));
}

console.log('filter by Bob: ', '\n', getAccountNumbers('Bob', '', ''));
console.log('');
console.log('filter by Charlie: ', '\n', getAccountNumbers('Charlie'));
console.log('');
console.log('sort by Account number: ', '\n', getAccountNumbers('', 'acctNum', 'desc'));

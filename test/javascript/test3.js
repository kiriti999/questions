function checkCount(str, letter) {
    var map = {};
    for (let index = 0; index < str.length; index++) {
        count = 1;
        if (!map[str[index]]) {
            map[str[index]] = 1;
        } else {
            map[str[index]] = map[str[index]] + 1;
        }
    }
    console.log('map ', map);
    console.log(`Letter '${letter}' count: ${map[letter]}`);
}

checkCount('abbbca', 'a');
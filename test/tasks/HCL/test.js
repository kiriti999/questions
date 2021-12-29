// /* #region  Find anagram of a string or permutations and combinations of a string */
let findPermutations = (str) => {

    if (!str || typeof str !== "string") {
        return "Please enter a string"
    } else if (str.length < 2) {
        return str
    }

    let permutationsArray = []

    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        if (str.indexOf(char) != i)
            continue;
        let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);
        const permutations = findPermutations(remainingChars);

        for (const permutation of permutations) {
            permutationsArray.push(char + permutation);
        }
        // console.log('remainingChars ', remainingChars);
        // Create a sub problems of str, each having size n/b
        // Call procedure p recursively on each subproblem
        // Combine the results from the sub problems
    }
    return permutationsArray;
}

const output = findPermutations('eat');
console.log(output)
/* #endregion */

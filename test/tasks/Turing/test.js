// Find the animal with max occurrences from array animals
// Exclude forbidden animal f
// output should 'cat'
// animals in array are case sensitive

let animals = "Dog horse donkey CAT donkey caT bird donkey"
let f = ['donkey'];

let animalArray = animals.split(' ');
let animalsSmall = animalArray.map(element => element.toLocaleLowerCase()).filter(item => item !== f[0]);

const counts = {};
for (const word of animalsSmall) {
    counts[word] = counts[word] ? counts[word] + 1 : 1;
}

console.log(counts);

const output = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

console.log(output);
// Find anagram

// function myAnagram(arr1, arr2) {

//     var str1 = arr1;
//     var str2 = arr2;
//     var temp1 = [];
//     var temp2 = [];
//     var flag = 0;
//     if (str1.length !== str2.length) {
//         return "Not Anagram statement A";
//     } else {
//         for (var i = 0; i < str1.length; i++) {
//             temp1[i] = str1[i];
//         }

//         for (var j = 0; j < str2.length; j++) {
//             temp2[j] = str2[j];
//         }
//         temp1.sort();
//         temp2.sort();
//         for (var k = 0; k < str1.length; k++) {
//             if (temp1[k] !== temp2[k]) {
//                 return "Not Anagram statement C";
//             } else {
//                 return "Anagram! statement D";
//             }
//         }
//     }
// }


var words = "aa aa odg dog gdo".split(' ');
words = [...new Set(words)];

function sortStrChars(str) {
    if (!str) {
      return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
  }


  function getGroupedAnagrams(words) {
    const anagrams = {}; // {abc:[abc,cba], dell:[dell, ledl]}
    words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if (anagrams[sortedWord]) {
        return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
    });
    return anagrams;
  }

  const groupedAnagrams = getGroupedAnagrams(words);
  for (const sortedWord in groupedAnagrams) {
    console.log(groupedAnagrams[sortedWord].toString());
  }
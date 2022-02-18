// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

function findLongestWord(arr) {
    let lengths = []

    for(let i = 0; i < arr.length; i++){
        lengths.push(arr[i].length)
    }
    return Math.max(...lengths)
}

console.log(findLongestWord(["hi", "hello", 'skahfd', 'joijweoifoidnfwonwd']));

// RUNTIME O(n)

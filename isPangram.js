// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram(str) {
    let arr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '').split('').filter((item, pos, self) => {return self.indexOf(item) == pos;
      }).sort().join('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if(arr === alphabet){
        return true;
    }   else{
        return false;
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("Anthony516];];/'/]"))

// RUNTIME O(n)
// SPACE COMPLEXITY O(n)


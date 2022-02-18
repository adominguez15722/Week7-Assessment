// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function addToZero(arr) {
    let sum = 0
    let results = []

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            results.push((arr[i] + arr[j]))
            }
        }
        if(results.includes(sum)){
            return true
        }   else{
            return false
        }
    }
    
console.log(addToZero([1]))

//RUNTIME O(n^2)


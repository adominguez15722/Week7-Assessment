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
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0 ; j < arr.length; j++){
            let twoInd = arr[i] + arr[j + 1]
            console.log(twoInd)
            if(arr.length <= 1 || twoInd != sum ){
                console.log('false')
            }   else if(twoInd === sum){
                console.log('true')
            }   
            

        }
    }
}

addToZero([1, 2, 3, -2])

for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            return false;
        }
    }
}
return true;
}
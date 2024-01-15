// you get an array of numbers, return the sum of all the positive ones
// if there is nothing to sum, the sum default is 0

// if array is empty return 0
// if all integars in an array are negative return 0
// else return sum of all integars < 0

// USING FOR EACH

function positiveSum(arr) {
    const positiveArr = []
    let sum = 0;

    arr.forEach((num) => {
        if (num > 0){
            positiveArr.push(num) 
        }
    });

    positiveArr.forEach(num => {
        sum += num;
    });

    return sum;
};

console.log("ans 15", positiveSum([1,2,3,4,5])); //15
console.log("ans 13", positiveSum([1,-2,3,4,5])); //13
console.log("ans 0", positiveSum([])); //0
console.log("ans 0", positiveSum([-1,-2,-3,-4,-5])); //0
console.log("ans 9", positiveSum([-1,2,3,4,-5])); //9
// you get an array of numbers, return the sum of all the positive ones
// if there is nothing to sum, the sum default is 0

// if array is empty return 0
// if all integars in an array are negative return 0
// else return sum of all integars < 0

// USING FILTER METHOD

const sumOfPos = (arr) => {
    let arrOfPos = arr.filter((num) => num > 0);
    let sumOfPos = [];
    
    if (arrOfPos.length){
        sumOfPos = arrOfPos.reduce((accumulator, currentValue) => accumulator + currentValue);
    } else {
        return 0;
    }

    return sumOfPos;
};

console.log("ans 15", sumOfPos([1,2,3,4,5])); //15
console.log("ans 13", sumOfPos([1,-2,3,4,5])); //13
console.log("ans 0", sumOfPos([])); //0
console.log("ans 0", sumOfPos([-1,-2,-3,-4,-5])); //0
console.log("ans 9", sumOfPos([-1,2,3,4,-5])); //9
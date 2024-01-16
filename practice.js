// you get an array of numbers, return the sum of all the positive ones
// if there is nothing to sum, the sum default is 0

// if array is empty return 0
// if all integars in an array are negative return 0
// else return sum of all integars < 0

// USING FILTER METHOD
const posSum = (arr) => {
    let posArr = [];
    let sum = 0;

    posArr = arr.filter((num) => num > 0).forEach((num) => sum += num );
    console.log(posArr)
    console.log(sum)
}


console.log(posSum([-1,-2,-3,-4,-5]));
// console.log("ans 15", posSum([1,2,3,4,5])); //15
// console.log("ans 13", posSum([1,-2,3,4,5])); //13
// console.log("ans 0", posSum([])); //0
// console.log("ans 0", posSum([-1,-2,-3,-4,-5])); //0
// console.log("ans 9", posSum([-1,2,3,4,-5])); //9
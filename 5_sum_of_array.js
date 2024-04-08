// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(array){
    let sum = 0 ;
    for (let i of array){
        sum = sum + i ;
    }
    return sum ;
}
console.log(sumArray([1,2,3,4,5,9,11,8,9]))
console.log(sumArray([-1,-2,-3,-5,-5,-9,-11,-8,-9]))
console.log(sumArray([555]))
console.log(sumArray([]))
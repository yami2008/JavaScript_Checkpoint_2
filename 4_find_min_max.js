// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function maximum(array){
    if (array.length === 0){
        return 0;
    }
    // Je parcour mon tableau, si je trouve un nombre plus grand que mon max, il deviendra lui même le max.
    let max = parseInt(array[0]);
    for (let i of array){
        if(i > max){
            max = parseInt(i);
        }
    }
    return max ;
}

console.log(maximum([1,2,3,4,5,9,11,8,9]))
console.log(maximum([-1,-2,-3,-5,-5,-9,-11,-8,-9]))
console.log(maximum([555]))
console.log(maximum([]))


// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function minimum(array){
    if (array.length === 0)
        return 0;
    // Je parcour mon tableau, si je trouve un nombre plus petit que mon max, il deviendra lui même le max.
    let min = parseInt(array[0]);
    for (let i of array){
        if(i < min){
            min = parseInt(i);
        }
    }
    return min ;
}

console.log(minimum([1,2,3,4,5,9,11,8,9]))
console.log(minimum([-1,-2,-3,-5,-5,-9,-11,-8,-9]))
console.log(minimum([555]))
console.log(minimum([]))
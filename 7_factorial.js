// Factorial: Write a function to calculate the factorial of a given number..
function facto(number){
    number = parseInt(number);
    if (number === 0 || number === 1)
        return 1;
    let res = 1 ;
    for (let i= 1; i <= number; i++){
        res = res * i ;
    }
    return res ;
}

console.log(facto(5));
console.log(facto(3));
console.log(facto(8));
console.log(facto(0));
console.log(facto(1));
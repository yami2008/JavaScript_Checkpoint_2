// Prime Number Check: Create a function to check if a number is prime or not.
function premier(number){
    if (number === 0 || number === 1)
        return false ;
    if (number === 2)
        return true ;
    // je teste si number est divisible par i allant de 2 à la racile carrée de number
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++){
        if (number % i === 0){
            return false ;
        }
    }
    return true ;
}

console.log(premier(20));
console.log(premier(3));
console.log(premier(49));
console.log(premier(53));
console.log(premier(269));

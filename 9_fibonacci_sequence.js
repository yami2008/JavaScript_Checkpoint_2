// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(number){
    // fib(0) = 0, fib(1) = 1
    if (number <= 0){
        return 0 ;
    }
    if (number === 1){
        return 1;
    }
    else{
        // je gère les valeurs des termes précédents avec les variables pred et current, genre pred = fib(n-2) et current = fib(n), puis pred prendra l'ancienne valeur de current ==> pred = fib(n-1).
        let pred = 0 ;
        let current = 1 ;
        for (let i = 2; i <= number ; i++){
            let cpt = current ;
            current = pred + current ;
            pred = cpt ;
        }
        return current ;
    }
}


for (let i = 0 ; i < 20; i++)
    console.log(i + ' => ' + fibonacci(i));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(operation, operande, array){
    // Liste de mes opérations possible.
    let operationsPossibles = ['<', '>', '<=', '>=', '=', '<>'];
    // Si le user appelle la fonction avec une opération qui n'est pas dans ce tableau, on lève une erreur.
    if (operationsPossibles.includes(operation) === false){
        console.log("L'operation doit être soit <, >, <=, >=, =, <>");
        return array;
    }
    // On procède aux filtres suivant l'oprateur et l'opérande que le user a donné en paramètre.
    if (operation === '<'){
        return array.filter(function (i){
            return i < operande ;
        });
    }
    else if (operation === '>'){
        return array.filter(function (i){
            return i > operande ;
        });
    }
    else if (operation === '>=') {
        return array.filter(function (i) {
            return i >= operande;
        });
    }
    else if (operation === '<=') {
        return array.filter(function (i) {
            return i <= operande;
        });
    }
    else if (operation === '<>') {
        return array.filter(function (i) {
            return i !== operande;
        });
    }
    else{
        return array.filter(function (i){
            return i === operande ;
        });
    }
}


console.log(filterArray('=', 6, [1,2,3,4,5,9,11,8,9]));
console.log(filterArray('<=', 6, [1,2,3,4,5,9,11,8,9]));
console.log(filterArray('<', 6, [1,2,3,4,5,9,11,8,9]));
console.log(filterArray('<>', 5, [1,2,3,4,5,9,11,8,9]));
console.log(filterArray('>=', 6, [1,2,3,4,5,9,11,8,9]));
console.log(filterArray('>', 6, [1,2,3,4,5,9,11,8,9]));
console.log(filterArray('*', 6, [1,2,3,4,5,9,11,8,9]));
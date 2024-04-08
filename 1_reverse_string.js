// Reverse a String: Write a function that reverses a given string.
function reverseString(string){
    // Si la chaine est vide ou contient un seul char.
    if (string.length === 0){
        return "";
    }
    if (string.length === 1){
        return string ;
    }
    // Parcourir la chaine à l'envers.
    let str = "" ;
    for (let i = string.length - 1 ; i >= 0; i--){
        str = str + string.charAt(i);
    }
    return str;
}

console.log(reverseString('abcdefgh'))
console.log(reverseString('ab'))
console.log(reverseString('a'))
console.log(reverseString(''))
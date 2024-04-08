// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(string){
    // Récupérer les mots dans un tableau.
    let words = string.split(' ');
    for (let i in words){
        // Remplacer le premier char de chaque mot par son équivalent en majiscule.
        words[i] = words[i].replace(words[i].charAt(0) , words[i].charAt(0).toUpperCase());
    }
    // Recréer la phrase.
    return words.join(' ');
}
console.log(capitalizeWords("bonjour comment ça va, j'ai pas dormi"));
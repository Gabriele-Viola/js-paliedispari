/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/


let wordToCheck = prompt('inserisci la parola da verificare');
let wordToCheckLC = wordToCheck.toLowerCase()
let reversed = ""
let reversedLowerCase

function checkWord (wordToCheckLC){

for (let i = wordToCheckLC.length - 1; i >= 0; i--) {
    reversed = reversed + wordToCheckLC[i];
    reversedLowerCase = reversed.toLowerCase() 
}
if (wordToCheckLC == reversedLowerCase) {
   return (`${wordToCheckLC} is palindrome`);

}else {
    return (`${wordToCheckLC} is not palindrome`);        
}
}

console.log(checkWord(wordToCheckLC));




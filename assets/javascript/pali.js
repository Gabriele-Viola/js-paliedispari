/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/


let wordToCheck = "radar";
let reversed = ""

function checkWord (wordToCheck){

for (let i = wordToCheck.length - 1; i >= 0; i--) {
    reversed = reversed + wordToCheck[i]; 
}
if (wordToCheck == reversed) {
   console.log(`${wordToCheck} is palindrome`);

}else {
    console.log(`${wordToCheck} is not palindrome`);        
}
}
console.log(checkWord(wordToCheck));




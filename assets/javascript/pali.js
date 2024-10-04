/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/


let wordToCheck = "radar";
let reversed = "";
let message


function ChekWord(wordToCheck) {
    let wordToCheck = "radar";
    let reversed = "";
    

    for (let i = wordToCheck.length - 1; i >= 0; i--) {
        reversed += wordToCheck[i];


    }
    if (wordToCheck == reversed) {
        message =`${wordToCheck} is palindrome`;
        return message;

    } else {
        message = `${wordToCheck} is NOT palindrome`;
        return message
    }

}
console.log(message);

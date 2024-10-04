/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

let player_number = Number(prompt('scegli un numero da 1 a 5'))
let choose = prompt('Scegli tra "pari" o "dispari"')


function EvenOrOdd( player_number, choose) {
    
    let cpu_number = Math.floor((Math.random() * 5) + 1);
    let sum = player_number + cpu_number
    
    if ( (sum % 2 == 0 && choose == 'pari') || (sum % 2 != 0 && choose == 'dispari')){
        return (` your number is ${player_number} and cpu numer is ${cpu_number}, the sum is ${sum} You Win!`);
            
    }else if ((sum % 2 == 0 && choose == 'dispari') || (sum % 2 != 0 && choose == 'pari')) {
        return(` your number is ${player_number} and cpu numer is ${cpu_number}, the sum is ${sum} You Lose!`);
        
    }
}

console.log(EvenOrOdd(player_number, choose));

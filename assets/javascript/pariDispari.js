/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/
let wannaplay = true;
while (wannaplay) {
    let player_number = Number(prompt('Scegli un numero da 1 a 5'))
    let choose = prompt('Scegli "pari" o "Dispari"')
    function sumOfTwo(player_number) {
        let cpu_number = Math.floor((Math.random() * 5) + 1);
        return sum = player_number + cpu_number
    }
    console.log(sumOfTwo(player_number));



    function EvenOrOdd(choose) {
        if ((sum % 2 == 0 && choose == 'pari') || (sum % 2 != 0 && choose == 'dispari')) {
            return (` your number is ${player_number} and cpu numer is , the sum is ${sum} You Win!`);

        } else if ((sum % 2 == 0 && choose == 'dispari') || (sum % 2 != 0 && choose == 'pari')) {
            return (` your number is ${player_number} and cpu numer is , the sum is ${sum} You Lose!`);

        }
    }

    alert(EvenOrOdd(choose))


    alert(EvenOrOdd(player_number, choose));

    wannaplay = confirm('again?')
}


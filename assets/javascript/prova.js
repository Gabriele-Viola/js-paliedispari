let player_number = Number (prompt ('Scegli un numero da 1 a 5'))
let choose = prompt('Scegli "pari" o "Dispari"')


// function EvenOrOdd( player_number, choose) {
    
//     let cpu_number = Math.floor((Math.random() * 5) + 1);
//     // let sum = player_number + cpu_number
    
//     if ( (sum % 2 == 0 && choose == 'pari') || (sum % 2 != 0 && choose == 'dispari')){
//         return (` your number is ${player_number} and cpu numer is ${cpu_number}, the sum is ${sum} You Win!`);
            
//     }else if ((sum % 2 == 0 && choose == 'dispari') || (sum % 2 != 0 && choose == 'pari')) {
//         return(` your number is ${player_number} and cpu numer is ${cpu_number}, the sum is ${sum} You Lose!`);
        
//     }
// }



// alert(EvenOrOdd(player_number, choose));



function sumOfTwo(player_number) {
    let cpu_number = Math.floor((Math.random() * 5) + 1);
    return sum = player_number + cpu_number
}
console.log(sumOfTwo(player_number));



function EvenOrOdd(choose) {
    if ( (sum % 2 == 0 && choose == 'pari') || (sum % 2 != 0 && choose == 'dispari')){
        return (` your number is ${player_number} and cpu numer is , the sum is ${sum} You Win!`);
            
    }else if ((sum % 2 == 0 && choose == 'dispari') || (sum % 2 != 0 && choose == 'pari')) {
        return(` your number is ${player_number} and cpu numer is , the sum is ${sum} You Lose!`);
        
    }
}

alert(EvenOrOdd(choose))


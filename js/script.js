
// // ? dichiarazione ed assegnazione di una variabile | inizializzazione di una variabile
// // ! let sta per dichiarazione di una variabile che e' potenzialmente riassegnabile
// let numeroA = 5;

// console.log(numeroA); // 5

// // * riassegnazione di una variabile gia' definita | "sovrascrivo"
// numeroA = numeroA * 3;
// console.log(numeroA); // 15

// // ? dichiarazione ed assegnazione di una variabile | inizializzazione di una variabile
// // ! const sta per dichiarazione di una variabile che non sia mai riassegnabile
// const numeroB = 6;

// // dichiarazione variabile
// let miaStringa;

// // assegnazione
// miaStringa = "numeroA";

// // utilizzo/richiamo
// // alert(miaStringa); // parte un alert con 'ciao' all'interno

// const userNumber = prompt('Type a number');


// !  Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

//  * chiedo all'utente la sua eta'
//  * salvo l'eta' dell'utente appena inserita
    let userAge = prompt('Scrivi la tua eta');
    userAge = parseInt(userAge);

    //  * calcolo l'anno di nascita:
    // * assegno ad una nuova variabile annoDiNascita = annoAttuale - eta' utente
    const ageOfBirth = 2024 + userAge;

    // * scrivo in console il risultato
    console.log(ageOfBirth);



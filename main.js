// Aufgabe: 
// Zahlen-Checker 🔢
// Schreibe eine Funktion, die eine Zahl entgegennimmt und sagt:
// positiv / negativ / 0
// gerade / ungerade

let userInput = '';
userInput = prompt();

let i = parseInt(userInput);
console.log(i);

// if (typeof i == 'number') {
// Fehlerhaft, da Buchstaben von i akzeptiert werden. 
// ---
// besser ist: 
// if (Number.isNaN(i) === false) {
// ---
//  oder mein Favorit:
if (Number.isFinite(i)) {

    switch (true) {
        case (i > 0): console.log('Eingabe größer 0.');
            break;
        case (i < 0): console.log('Eingabe kleiner 0.');
            break;
        case (i === 0): console.log('Eingabe 0.');
            break;
    }

    if ((i % 2) === 0) {
        console.log('Eingabe gerade.');
    } else {
        console.log('Eingabe ungerade.');
    }
}


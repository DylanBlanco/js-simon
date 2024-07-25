// genera 5 numRandom
Numbers = 5;
const randomNumber = [];
for (let i = 0; i < Numbers; i++) {
    const randomNumber = generateRandomNumber(1, 100);
    console.log(`randomNumber`, randomNumber, typeof randomNumber);
}

// timer 30sec
setTimeout(timer, 30000);
function timer() {
    alert(`STOP`);
}

// chiedi valori
insert = 5;
const insertNum = [];
for (let i = 0; i < insert; i++) {
    const insertNum = prompt(`Inserisci valore:`);
    console.log (`Il num inserito è:`, insertNum, typeof insertNum);
}

// condizione gioco
if (insert == Numbers) {
    console.log(`valore esatto:`, insertNum, typeof insertNum);
}
else {
    console.log(`valore errato:`, insertNum, typeof insertNum);
    alert(`HAI PERSO`);
}

// funzione numeri random
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
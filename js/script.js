// genera 5 numRandom
numbers = 5;
const randomNumber = [];
for (let i = 0; i < numbers; i++) {
    const numbers = generateRandomNumber(1, 100);
    console.log(`numbers`, numbers, typeof numbers);
    randomNumber.push(numbers);
}
console.log(`Numeri random:`, randomNumber, typeof randomNumber);
document.getElementById(`random-numbers`).innerHTML = randomNumber;

// timer 30sec
setTimeout(timer, 30000);
function timer() {
    // chiedi valori
    insert = 5;
    const insertNum = [];
    for (let i = 0; i < insert; i++) {
        const insertNumbers = prompt(`Inserisci valore:`);
        console.log (`Il num inserito è:`, insertNumbers, typeof insertNumbers);
        insertNum.push(insertNumbers);
    }
    
    // condizione gioco
    if (insertNum == randomNumber) {
        console.log(`valore esatto:`, insertNum, typeof insertNum);
    }
    else {
        console.log(`valore errato:`, insertNum, typeof insertNum);
        alert(`HAI PERSO`);
    }
}


// funzione numeri random
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
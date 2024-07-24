Numbers = 5;
const randomNumber = [];
for (let i = 0; i < Numbers; i++) {
    const randomNumber = generateRandomNumber(1, 100);
    console.log(`randomNumber`, randomNumber, typeof randomNumber);
}


// funzione numeri random
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
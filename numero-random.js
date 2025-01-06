const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 10) + 1;

rl.question('Adivina un número del 1 al 10: ', (answer) => {
    const userGuess = parseInt(answer, 10);
    if (userGuess === randomNumber) {
        console.log('¡Felicidades! Adivinaste el número.');
    } else {
        console.log(`Lo siento, el número era ${randomNumber}.`);
    }
    rl.close();
});
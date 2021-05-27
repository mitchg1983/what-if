const prompt = require('prompt-sync')();

const num = prompt('Enter any whole number ');

const numNum = Number(num);

const three = (numNum % 3)

const five = (numNum % 5)

if (three === 0 &&
    five > 0) {
    console.log("fizz")
}

if (five === 0 &&
    three > 0) {
    console.log("buzz")
}

if (three ===0 &&
    five === 0) {
        console.log("fizzbuzz")
    }
const prompt = require('prompt-sync')();

const size = prompt('How many students are in your class? ');

const numberSize = Number(size);

const Grp1 = (numberSize % 3);

if (Grp1 === 0) {
    console.log("We will create", (numberSize / 3), "groups of three students.")
}

else if (Grp1 === 1) {
    console.log("We will create", ((numberSize - 4) /3), "groups of three students & 2 groups of two students.")
}

else if (Grp1 === 2) {
    console.log("We will create", ((numberSize - 2) /3), "groups of three students & 1 group of two students.")
}
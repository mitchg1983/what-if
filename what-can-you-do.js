const prompt = require('prompt-sync')();

const age = prompt('How old are you (in years)? ')

const numberAge = Number(age);

if (numberAge < 16) {
    console.log ("You can't drive.")
}

else if ( numberAge ===16 ||
    numberAge ===17)  {
        console.log ("You can drive but not vote.")
    }
    
else if ( numberAge ===18 ||
          numberAge ===19 ||
          numberAge ===20 ||
          numberAge ===21 ||
          numberAge ===22 ||
          numberAge ===23 ||
          numberAge ===24)  {
console.log ("You can vote but not rent a car.")
                            }
                            
else if ( numberAge >= 25) {
console.log ("You can do pretty much anything.")
                            }
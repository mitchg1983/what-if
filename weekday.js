const prompt = require('prompt-sync')();

const inp = prompt('Provide a number between 1-7.' )

const numImp = Number(inp)

if (numImp ===1) {
    console.log ("It is Monday.")
}
if (numImp ===2) {
    console.log ("It is Tuesday.")
}
if (numImp ===3) {
    console.log ("It is Wednesday.")
}
if (numImp ===4) {
    console.log ("It is Thursday.")
}
if (numImp ===5) {
    console.log ("It is Friday.")
}
if (numImp ===6) {
    console.log ("It is Saturday.")
}
if (numImp ===7) {
    console.log ("It is Sunday.")
}

else if (numImp < 1 ||
         numImp > 7) {
             console.log ("error:Invalid Entry")
         }
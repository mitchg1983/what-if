const prompt = require('prompt-sync')();

const weight = prompt('What is your Earth-weight in (lbs)? ');
const numWeight = Number(weight);
const planet = prompt('Which planet number will you be fighting on? ');
const numPlanet = Number(planet);

if (numPlanet === 1) {
    console.log ("You weigh", (numWeight * 0.78), "lbs on Venus." );
}
if (numPlanet === 2) {
    console.log ("You weigh", (numWeight * 0.39), "lbs on Mars." );
}
if (numPlanet === 3) {
    console.log ("You weigh", (numWeight * 2.65), "lbs on Jupiter." );
}
if (numPlanet === 4) {
    console.log ("You weigh", (numWeight * 1.17), "lbs on Saturn." );
}
if (numPlanet === 5) {
    console.log ("You weigh", (numWeight * 1.05), "lbs on Uranus." );
}
if (numPlanet === 6) {
    console.log ("You weigh", (numWeight * 1.23), "lbs on Neptune." );
}
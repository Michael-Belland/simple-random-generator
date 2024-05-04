let randomNames = ["Aaron", "Anna", "Bernice", "Calvus", "Cecilie", "Dafina", "Daniel", "Eugene", "Fred", "Helena", "Isabel", "Jack", "Jo-Anne", "Kristina", "Laura", "Lucas", "Maya", "Nyongesa", "Paul", "Pritha", "Quan", "Rita", "Rory", "Shannon", "Souta", "Terance", "Thomas", "Victor", "William", "Xanthippi"];
let hsrTypes = ["Physical", "Fire", "Ice", "Lightning", "Wind", "Quantum", "Imaginary"];
let hsrPaths = ["Destruction", "The Hunt", "Erudition", "Harmony", "Nihility", "Preservation", "Abundance"];

let nameIndex = Math.floor(Math.random()*randomNames.length);
let typeIndex = Math.floor(Math.random()*hsrTypes.length);
let pathIndex = Math.floor(Math.random()*hsrPaths.length);

//TODO: can the random index assignments be done with a loop instead?

console.log(`Your HSR Character is: ${randomNames[nameIndex]}, a ${hsrTypes[typeIndex]}-Type character on the Path of ${hsrPaths[pathIndex]}.`);
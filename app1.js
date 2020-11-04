
mathjs = require('./math.js');

const wynikDodawania = '3 + 5 =' + mathjs.add(3, 5);
const wynikOdejmowania = '4 - 7 = '+ mathjs.sub(4, 7);
const wynikMnozenia = '6 * 2 ='+ mathjs.multi(6, 2);
const wynikDzielenia = '8 / 2 ='+ mathjs.div(8, 2);

console.log(wynikDodawania);
console.log(wynikOdejmowania);
console.log(wynikMnozenia);
console.log(wynikDzielenia);


const fs = require('fs');


fs.writeFileSync('wynik.txt', wynikDodawania +'\n');
fs.appendFileSync('wynik.txt', wynikOdejmowania +'\n');
fs.appendFileSync('wynik.txt', wynikMnozenia +'\n');
fs.appendFileSync('wynik.txt', wynikDzielenia +'\n');

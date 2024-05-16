const name = "Nikson"
const repoCount = "15"

//console.log(name + repoCount + "value"); this is oldy style not recomended to use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nishant- stha')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString );

const newStringOne = "    Nikson   "
console.log(newStringOne);
console.log(newStringOne.trim());// trim removes spaces

const url = "https://nikson.com/nikson%20shrestha"

console.log(url.replace('%20', '-'))

console.log(url.includes('nikson'))
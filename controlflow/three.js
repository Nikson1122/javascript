// for of loop

// ["", "", ""]

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps: It is for unique value which holds key value pair
const map = new Map()
map.set('NP', "Nepal")
map.set('USA', "United States Of America")
map.set('UK', "United Kingdom")

//console.log(map);

for (const [key, value] of map){
   // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'efootball',
    'game2':"pubg"
// } its not applicable for objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }
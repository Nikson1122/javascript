// primitive datatypes
// 7 Types: string, Number, Boolean , null , undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 9212121214512151541n
 

// Reference(Non Primitive)
// Array, Objects, Functions

const heros = ["ragnar", "byon", "ivar"]
let myobj ={
    name: "nikson",
    age : 24,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heros  );

//memory types Stack(primitive)and Heap memory(Non-primitive)

let myname ="Nikson Shrestha"

let anothername =myname
anothername = "Nishant"

console.log(myname);

console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi : "user@bbl;"
}

let userTwo = userOne

userTwo.email = "Nikson@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


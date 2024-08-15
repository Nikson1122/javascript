// let myName = "Nikson      "

// console.log(myName.truelength);

let myHeros =["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power us ${this.spiderman}`);
    }

}
Object.prototype.nikson = function(){
    console.log(`nikson is present in all objects`);
}
Array.prototype.heyNikson = function(){
    console.log(`Hello from MR Nikson`)
}
// heroPower.nikson()

// myHeros.nikson()
// myHeros.heyNikson()
// heroPower.heyNikson()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.con"
}

const Teacher = {
    makeVide0: true
}
 
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUSername = "ChaiAurCode     "
String.prototype.truelength = function(){
   console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Lenth is ${this.trim().length}`);
}

anotherUSername.truelength()
"hitesh".truelength()
"iceTea".truelength()
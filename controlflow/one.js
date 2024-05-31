// if statement
// const isUserloggedIn = true
// const temperature = 41

// if(temperature<50){
//     console.log("Temperature is less than 50");

// }
// else{
//     console.log("temperature is greater tha 50");
// }

// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

//const balance = 1000
//if(balance>500) console.log("Test"),
// if (balance > 500) console.log("test"), console.log("test 2")

// if(balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }
const userLoggeddIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggeddIn && debitCard  ){
    console.log("Allow to buy course")
}

if (LoggedInFromGoogle || LoggedInFromEmail ){
    console.log("user logged in");
}
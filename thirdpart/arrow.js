const user = {
    username: "Nikson",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chiya(){
//     let username = "Nikson"
//     console.log(this.username);// this cannot be used in functions
// }
// chiya();

const chai = () => {
    let username = "Nikson"
    console.log(this);
}

//chai()
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3 , 4))

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return
const addTwo = (num1, num2) =>  ({username : "Nikson"})


console.log(addTwo(3 , 4))

const myArray = [2, 3, 4 ,5 , 6 ,7]

myArray.forEach(() => {})
function sayMyname(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("S");
    console.log("O");
    console.log("N");
    }
    
    
//sayMyname(d

// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2)
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    console.log("Nikson");
//    return result
return number1 + number2
  
 }
 

const result = addTwoNumbers(3, 5)

//console.log("Result: ",result);

function loginUserMessage(username = "sunny"){
//   if(username === undefined){
//     console.log("please enter the username")
//     return 
//   }
if(!username){
    console.log("please enter username");
    return
}
    return `${username} just logged in`
}
// console.log(loginUserMessage("Nikson"))
// console.log(loginUserMessage("nikson"))

function calculateCartPrice(val1, val2 , ...num1){
    return num1

}
console.log(calculateCartPrice(200, 400, 500, 69))

const user = {
    Username : "Nikson",
    price : "999"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.Username} amd price is ${anyobject.price} `);
}

// handleObject(user)// one methofd
//next method 
handleObject({
    Username: "sunny",
    price:5000
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500 , 1000]));
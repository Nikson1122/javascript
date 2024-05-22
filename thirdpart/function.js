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
console.log(loginUserMessage("nikson"))
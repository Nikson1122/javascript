// singleton 

// onject literals
// Object.create
const mySym = Symbol("key1")

const JsUser = {
    name: "Nikson",
    "fullname": "Nikson Shrestha",
    [mySym]: "mykey1",
    age : "24",
    email: "Nikson@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Sunday", "Tuesday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(JsUser[mySym])


JsUser.email ="Nikson@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email ="Nikson@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log("Hello Js user",`${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// const tinderUser = new Object() singleton object

const tinderUser = {} // non singleton object
tinderUser.id = "123.abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    emai : "Nstha@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Nikson",
            lastname : "Shrestha",
        }

    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6:"b"}
//const obj3 = {obj1, obj2};
// const obj3 = Object.assign({} ,obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email:"N@gmail.com"

    },
    {

    },
    {

    },
]

    users[1].email,

    console.log(tinderUser);

    console.log(Object.keys(tinderUser));
    
    console.log(Object.values(tinderUser));

    console.log(Object.entries(tinderUser));

    console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in nepali",
    price : "999",
    courseInstructor: "Nikson"
};

const {courseInstructor: instructor} = course

console.log(instructor);
// {
//  name: "nikson",
//  coursename : "js in nepali",
//  price : "free"
// }
[
    {},
    {},
    {},
]


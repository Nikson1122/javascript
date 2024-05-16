// Dates
 let myDate = new Date();
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);

//  let myCreatedDate = new Date(2024, 4, 16 )
//  let myCreatedDate = new Date(2024, 4, 16, 5, 3)
let myCreatedDate = new Date("2024-04-16" )
//  console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1 );
console.log(newDate.getDay());

// `${newDate.getDay()}`

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})
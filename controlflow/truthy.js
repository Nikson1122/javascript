const userEmail = []

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("dont have user email");
}

// falsy values

//false , 0, -0, Biging 0n , "", null, undefined, Nan

//truthy valuse

// "0", 'false', " ", [], {}, fuunction(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

const emptyObj = {}
if (Object.keys(emptyObj.lenght === 0)) {
    console.log("object is empty");
}

// Nullish coalescing operator

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terinary operator

//conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice < 80 ? console.log("less than 80") : console.log("more than 80")
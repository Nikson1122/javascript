const user = {
    username: "Nikson",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User (username, loginCount, isloggedIn){
    this.username = username ;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function (){
        console.log(`welcone ${this.username}`)
    }

    //return this
}

const userOne = new User("Nikson", 12 , true)
const userTwo = new User("ChaiAurCode", 14, false)

console.log(userOne.constructor);
// console.log(userTwo);
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Nikson = new User("Nikson")
// console.log(Nikson.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("ipone", "i@phone.com")
console.log(iphone.createId()); 

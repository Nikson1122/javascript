const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptographyn network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)

})
promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 ressolved");
    
})
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "raksi", email:"raksi@example.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Nikson", password: "1234"})
            
        }else{
            reject("Something went Wrong")
        }
    }, 1000)
})
 promiseFour.then((user) => {
console.log(user);
return user.username

}).then((username) =>{
console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either ressolved or rejected"))

// const promiseFive = new promise(function(reolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "1234"})
            
//         }else{
//             reject("js went Wrong")
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

fetch('https://www.randomlists.com/urls')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))
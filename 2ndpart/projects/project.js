document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.array.forEach(function(button){
    console.log(button);
    button.addEventListner('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'blue'){  
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'Yellow'){
            body.style.backgroundColor = e.target.id;
        }
     
    })
})
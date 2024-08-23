const User = {
    _emai: "Nikson@gmail.com",
    _password:"abc",


get email(){
    return this._email.toUpperCase()

},

set email(value)
{
    this._emai = value
}
}

const tea = Object.create(User)
console.log(tea.email);

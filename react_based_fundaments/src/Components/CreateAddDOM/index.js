import react from 'react'
import reactDom from 'react-dom' //Use this library to inject your element to DOM

const h1 = <h1>Lorem Ipsum</h1>

reactDom.render(h1, document.getElementById("root"))// reactDom.render(WHAT, WHERE) ///
//=>On WHAT is the const I created
//=>On WHERE I'm injecting it on the div>id"Root" on index.html

const user_1= {
    name:"Juli",
    last_name:"García",
    age:25,
}

function getInfo(user){
    return("My name is "+ user.name+ " and my last name is " + user.last_name +` I'm currently ${user.age} years old`)
}

ReactDOM.render(getInfo(user_1), document.getElementById("root"))

// TWO WAYS OF EXPRESSION

// `My name is ${user.name}` or "My name is " + user.name
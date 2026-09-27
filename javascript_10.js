// Functions

// Methods = Built-in Functions!

// Function Declaration Syntax:

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(2, 6))

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@"))
}

console.log(getUserNameFromEmail("ishaanjain4u@gmail.com"))

// Anonymous functions - that don't have any name

const greet = function (){
    console.log("Hello")
}

greet()

// --------------------------------------------------

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase("dAvE"))
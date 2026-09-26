// User Input

// Alert notifications

alert("Hello World!")

// Confirm notifications

confirm("Ok === True\nCancel === False")

// prompting notifications

let name = prompt("Please enter your first name.");

console.log(name);
console.log(name === null);

console.log(name ?? "You didn't enter your name.");

// -----------------------------

let name_1 = prompt("enter last name")
if(name_1){
    console.log(name ?? "You didn't enter your name.")
} else {
    console.log("You didn't enter your name")
}

// ------------------------------

let name_2 = prompt("enter next name")
if(name_2){
    console.log(name.length)
    console.log(name.trim().length)
    console.log(name.trim())
} else{
    console.log("You didn't enter your name.")
}
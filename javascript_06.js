// Conditionals: ternary operator

//syntax: condition? ifTrue : ifFalse

let soup
let isCustomerBanned = false
let soupAccess = isCustomerBanned
    ? "Sorry, we are out of soup"
    : soup
    ? `Yes, we have ${soup} today.`
    : "Sorry, no soup today."
console.log(soupAccess)


// ---------------------------------------------------------------------

// ? -> if true
// : -> else

let testScore = 79
let myGrade = testScore > 89 
? "A"
: testScore > 79 
? "B"
: testScore > 69 
? "C"
: testScore > 59 
? "D"
: "F"
console.log(`My test grade is a ${myGrade}.`)
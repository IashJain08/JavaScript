// If statement

let customerIsBanned = false
let soup ="vegetable soup"
let crackers = true
let reply

if(customerIsBanned){
    reply = "No soup for you!"
}
else if(soup && crackers){
    reply = `Here's your order of ${soup} & crackers.`
}
else if(soup){
    reply = `Here's your order of ${soup}`
} else{
    reply = `Sorry, we're out of soup.`
}
console.log(reply)

// ---------------------------------------------------------------------------

let testscore = 89
let grade

if(testscore >= 90){
    grade = "A"
} else if (testscore >= 80){
    grade = "B"
} else if (testscore >= 50){
    grade = "C"
} else if (testscore >= 40){
    grade = "D"
} else if (testscore >= 30){
    grade = "E"
} else {
    grade = "F"
}

console.log(grade)


// --------------------------------------------------------------------------

let strings = ["rock", "paper", "scissors"]

let computer = strings[Math.floor(Math.random() * 3)]

console.log(computer)

playerone = "rock"

if(playerone == computer)
{
    console.log("tie")
}

else if(playerone =="rock")
    {
        if(computer =="paper")
            console.log("computer wins")

        else
        {
            console.log("player one wins")
        }
    }

    else if(playerone=="paper")
    {
        if(computer=="scissors")
            console.log("computer wins")

        else
        {
            console.log("player one wins")
        }
    }

    else if(playerone=="scissors")
    {
        if(computer=="rock")
            console.log("computer wins")

        else
        {
            console.log("player one wins")
        }
    }
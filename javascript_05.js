// Conditionals: Switch Statements

// syntax

// switch("expression or value"){

//     case choice1:
//         // run this code
//         break

//     case choice2:
//         // run this code
//         break

//     // add as many as you want

//     default:
//         // run this case if no cases match here
//         // no need for a break here
// }

// ------------------------------------------------------------------------------



switch(2){

    case 1:
        console.log(1)
        break

    case 2:
        console.log(2)
        break

    case 3:
        console.log(3)
        break

    default:
        console.log("no match")
}


// -----------------------------------------------------------------------------------------------------

let game = ["rock", "paper", "scissors"]

computer = game[Math.floor(Math.random() * 3)]

console.log("Computer: ", computer)

let playerOne = "rock"

console.log("Player: ", playerOne)

switch(playerOne + ", " + computer){
    case "rock, rock":
        console.log("Tie")
        break

    case "paper, paper":
        console.log("Tie")
        break

    case "scissors, scissors":
        console.log("Tie")
        break

    case "rock, scissors":
        console.log("playerOne wins")
        break

    case "paper, rock":
        console.log("playerOne wins")
        break

    case "scissors, paper":
        console.log("playerOne wins")
        break

    case "rock, paper":
        console.log("computer wins")
        break

    case "scissors, rock":
        console.log("computer wins")
        break

    case "paper, scissors":
        console.log("computer wins")
        break

    default:
        console.log("no decision")
}

// --------------------------------------------------------------------------------

switch (playerOne + "-" + computer) {
    case "rock-rock":
    case "paper-paper":
    case "scissors-scissors":
        console.log("Tie");
        break;

    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
        console.log("Player One wins");
        break;

    case "rock-paper":
    case "scissors-rock":
    case "paper-scissors":
        console.log("Computer wins");
        break;

    default:
        console.log("Invalid choice");
}
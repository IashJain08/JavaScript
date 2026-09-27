// Loops

let myNumber = 0;
while (myNumber < 10) {
    console.log(myNumber)
    myNumber = myNumber + 1;
}

// OR

let Number = 0
do{
    console.log(Number)
    Number += 1
} while (Number < 10)

// OR

for(let i = 0; i < 10; i++){
    console.log(i)
}

// ---------------------------------------------------------------

let name = "Dave"
for(let i = 0; i <=name.length; i++){
    console.log(name.charAt(i))
}

let counter = 0
let myLetter
while(counter <= 3){
    myLetter = name[counter]
    console.log(myLetter)
    counter++
}

console.log(counter)

// can use break and continue - will work same as C++

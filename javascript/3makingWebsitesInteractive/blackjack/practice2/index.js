//object
let person= {
    name: "Mary",
    age: 35,
    country: "Canada"   
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and she lives in " + person.country + ".")
}

logData()


//if else
let age = 19

if (age < 6){
    console.log("Free")
}else if ( age < 18){
    console.log("child discount")
}else if (age < 27){
    console.log("student discount")
}else if (age < 67){
    console.log("full price")
}else{
    console.log("senior citizen discount")
}
 

//loops and array
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

console.log("The 5 largest countries in the world:")
for (i = 0; i < largeCountries.length; i++){
    console.log("- " + largeCountries[i])
}


//push, pop, unshift, shift 
let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries2.pop()
largeCountries2.push("Pakistan")
largeCountries2.shift()
largeCountries2.unshift("China")
console.log(largeCountries2)

// Logical operators
let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday"){
    console.log("😱")
}

// Rock papers scissors
let hands = ["rock", "paper", "scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random()*hands.length)
    return hands[randomIndex]
}

console.log(getHand())

// Sorting fruits
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortingFruits(){
    for(i=0; i<fruit.length; i++){
        if (fruit[i] === "🍎"){
            appleShelf.textContent += "🍎" 
        } else {
            orangeShelf.textContent += "🍊"
        }
    }
}
sortingFruits()
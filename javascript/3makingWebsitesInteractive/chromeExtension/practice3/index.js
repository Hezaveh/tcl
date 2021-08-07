// // const openBtn = document.getElementById("open-btn")

// // openBtn.addEventListener("click", function(){
// //     console.log("I want to open the box!")
// // })


// // let devEl = document.getElementById("container")
// // devEl.innerHTML = "<button id='buy-btn' onclick='buy()'>Buy!</button>" 

// // function buy(){
// //     devEl.innerHTML += "<p>Thank you for buying!</p>"
// // }


// // template strings/literals
// const recipient = "James"
// const sender = "Per"

// // Refactor the email string to use template strings
// //const email = "Hey " + recipient + "! How is it going? Cheers Per"
// const email =`
//     Hey ${recipient} 
//     How is it going? 
//     Cheers ${sender}
//     ` 
// console.log(email)


// // function saveLead(){
// //     console.log("Button clicked")
// // }

// //localStorage practice
// //localStorage.setItem("myLeads", "www.myleads.com")
// //console.log(localStorage.getItem("myLeads"))
// //localStorage.clear("myleads")
// //console.log(localStorage.getItem("myLeads"))
// //localStorage.clear()



// // function parameter
// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeding, name, emoji){
//     //welcomeEl.textContent = greeding + ", " + name + "!"
//     welcomeEl.textContent = `${greeding}, ${name}! ${emoji}`
// }

// greetUser("Welcome back", "Maryam", ":)")


// function add(num1, num2){
//     return(num1 + num2)
// }

// add(3, 4)


// function getFirst(arr){
//     return arr[0]
// }

// let first = getFirst([1, 2, 3])
// console.log(first)


///////////////////////////////////////////
// let and const practice //

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

///////////////////////////////////////////
// Log out items in an array //

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logItems(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

logItems(myCourses)


///////////////////////////////////////////
// save to localStorage //

localStorage.setItem("myCredit", "100")
localStorage.clear()
let myCredit = localStorage.getItem("myCredit")
console.log(myCredit)


///////////////////////////////////////////
// addEventListener and object in array //

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let janeBtn = document.getElementById("jane-btn")

janeBtn.addEventListener("click", function(){
    console.log(data[0].score)
})


///////////////////////////////////////////
// Generate sentence //

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

let describe = "largest countries"
let array = ["China", "India", "USA"]
function generateSentence(desc, arr) {

    //let str = arr.join(', ')
    //console.log("The " + arr.length + " " + desc + " are "+ str)
    let baseString = `The ${arr.length} ${desc} are`
    const lastIndex = arr.length - 1

    for(let i = 0; i < arr.length; i++){
        if (i === lastIndex){
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

let sentence = generateSentence(describe, array) 
console.log(sentence)


///////////////////////////////////////////
// Render images //

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

let container = document.getElementById("container")

function renderImages(){
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img class="team-img" alt="Employee in the company" src="${imgs[i]}">`    
    }
    container.innerHTML = imgsDOM
}

renderImages()


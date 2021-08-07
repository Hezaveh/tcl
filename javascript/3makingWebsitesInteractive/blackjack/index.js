
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let massage = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let cardEl = document.getElementById("card-el")
// if we change id to class in html we use . instead of #
let cardEl = document.querySelector("#card-el")

let player = {
    name: "Mary",
    chips: 143,
    
    sayHello: function(){
        console.log("Hello!")
    }
}

player.sayHello();


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber == 1) {
        return 11
    }else if (randomNumber > 10 ){
        return 10
    }else{
    return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum =  firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardEl.textContent = "Cards: "

    for (let i = 0; i<cards.length; i ++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    } 

    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        card = getRandomCard()
        cards.push(card)
        console.log(cards)
        sum += card
        renderGame()
    }
}
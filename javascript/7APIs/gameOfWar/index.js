let deckId
let computerScore = 0
let myScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const title = document.getElementById("title")
const remainingText = document.getElementById("remaining")
const computerScoreEl = document.getElementById("computer-score")
const myScoreEl = document.getElementById("my-score")
drawCardBtn.disabled = true;


function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            console.log(data)
            deckId = data.deck_id

        })
        drawCardBtn.disabled = false;
        computerScore = 0
        myScore = 0
        computerScoreEl.innerHTML = "Computer score: 0"
        myScoreEl.innerHTML = "My score: 0" 
        title.innerHTML = "WAR!"
        cardsContainer.children[0].innerHTML = ""
        cardsContainer.children[1].innerHTML = ""
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            let card0 = data.cards[0].value
            let card1 = data.cards[1].value
            console.log(card0, card1)


            if (card0 ===  "JACK" ){
                card0 = 11
                console.log(card0)
            }else if (card0 ===  "QUEEN" ){
                card0 = 12
                console.log(card0)
            }else if (card0 ===  "KING" ){
                card0 = 13
                console.log(card0)
            }else if (card0 ===  "ACE" ){
                card0 = 14
                console.log(card0)
            }else{
                card0 = parseInt(data.cards[0].value)
                console.log(card0)
            }

            if (card1 ===  "JACK" ){
                card1 = 11
            }else if (card1 ===  "QUEEN" ){
                card1 = 12
            }else if (card1 ===  "KING" ){
                card1 = 13
            }else if (card1 ===  "ACE" ){
                card1 = 14
            }else{
                card1 = parseInt(data.cards[1].value)
                console.log(card1)
            }  

            console.log(card0, card1)

            const winnerText = determineCardWinner(card0, card1)
            title.textContent = winnerText

            if (data.remaining === 0) {
                drawCardBtn.disabled = true
                if (computerScore > myScore) {
                    title.innerHTML = "You Lose!"
                } else if (myScore > computerScore) {
                    title.innerHTML = "You win!"
                } else {
                    title.innerHTML = "It's a tie game!"
                }
            }

        })
})

function determineCardWinner(card1, card2){  
    if(card1 > card2){
        computerScore++
        computerScoreEl.textContent = `Computer score: ${computerScore}`
        return "You Lose!"
    }else if(card1 < card2){ 
        myScore++
        myScoreEl.textContent = `My score: ${myScore}`
        return "You Win!"
    }else{
        return "War!"
    }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/children


/*
function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent = `Computer score: ${computerScore}`
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        myScore++
        myScoreEl.textContent = `My score: ${myScore}`
        return "You win!"
    } else {
        return "War!"
    }
}*/



/* // how to use async/await insted of .then
async function handleClick() {
    const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await res.json()
    remainingText.textContent = `Remaining cards: ${data.remaining}`
    deckId = data.deck_id
    console.log(deckId)
}

drawCardBtn.addEventListener("click", async () => {
    const response = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    const data = await res.json()
    remainingText.textContent = `Remaining cards: ${data.remaining}`
    cardsContainer.children[0].innerHTML = `
        <img src=${data.cards[0].image} class="card" />
    `
    cardsContainer.children[1].innerHTML = `
        <img src=${data.cards[1].image} class="card" />
    `
    let card0 = data.cards[0].value
    let card1 = data.cards[1].value
    console.log(card0, card1)


    if (card0 ===  "JACK" ){
        card0 = 11
        console.log(card0)
    }else if (card0 ===  "QUEEN" ){
        card0 = 12
        console.log(card0)
    }else if (card0 ===  "KING" ){
        card0 = 13
        console.log(card0)
    }else if (card0 ===  "ACE" ){
        card0 = 14
        console.log(card0)
    }else{
        card0 = parseInt(data.cards[0].value)
        console.log(card0)
    }

    if (card1 ===  "JACK" ){
        card1 = 11
    }else if (card1 ===  "QUEEN" ){
        card1 = 12
    }else if (card1 ===  "KING" ){
        card1 = 13
    }else if (card1 ===  "ACE" ){
        card1 = 14
    }else{
        card1 = parseInt(data.cards[1].value)
        console.log(card1)
    }  

    console.log(card0, card1)

    const winnerText = determineCardWinner(card0, card1)
    title.textContent = winnerText

    if (data.remaining === 0) {
        drawCardBtn.disabled = true
        if (computerScore > myScore) {
            title.innerHTML = "You Lose!"
        } else if (myScore > computerScore) {
            title.innerHTML = "You win!"
        } else {
            title.innerHTML = "It's a tie game!"
        }
    }

})
*/

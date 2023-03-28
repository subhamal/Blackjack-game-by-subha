
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let sumEl = document.getElementById("sum-el")

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let cardEl = document.getElementById("card-el")

function getRamdomCard(){
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum === 1){
        return 11
    }
    else if(randomNum >10){
        return 10
    }
    else {
        return randomNum
    }
}

let player = {
    name: "Player",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRamdomCard()
    let secondCard = getRamdomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: " 
    for(let i = 0 ; i< cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRamdomCard()
    sum += card 
    cards.push(card)
    renderGame()
    }
}




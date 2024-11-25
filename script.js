let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let hasBlackJack = false
let isAlive = true

function startGame() {
    renderGame()
}

function renderGame() {
    let message
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function newCard() {
    let card = Math.floor(Math.random() * 10) + 2
    sum += card
    renderGame()
    cardEl.textContent += " " + card
    console.log("Drawing a new card from the deck!")
}
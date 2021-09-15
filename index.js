const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const newBtn = document.getElementById("new-btn"); 

let firstCard = randomNumber();
let secondCard = randomNumber();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function randomNumber() {
    return Math.floor(Math.random() * (12 - 2) + 2);
}

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: `;
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]}`
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Yeaaah! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        isAlive = false;
        message ="You're out of the game!";
    }

    messageEl.textContent = message;
}

function newCard() {
    let newCard = randomNumber();
    sum +=  newCard;
    cards.push(newCard);
    renderGame();
}

startBtn.addEventListener("click", startGame);
newBtn.addEventListener("click", newCard);
 


const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const newBtn = document.getElementById("new-btn"); 
const playerEl = document.getElementById("player-el");

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive =  false;
let message = "";

let player = {
    name: "Lucia",
    chips: 145
}

playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
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
    if ( isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum +=  newCard;
        cards.push(newCard);
        renderGame();
    }
    
}

startBtn.addEventListener("click", startGame);
newBtn.addEventListener("click", newCard);
 


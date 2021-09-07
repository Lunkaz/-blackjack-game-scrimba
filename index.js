let firstCard = Math.floor(Math.random() * (12 - 2) + 2);
let secondCard = Math.floor(Math.random() * (12 - 2) + 2);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
    console.log("Yeaaah! You've got Blackjack! 🥳");
    hasBlackJack = true;
} else {
    isAlive = false;
    console.log("You're out of the game! 😭");
}
 

console.log(hasBlackJack);
const startBtn = document.querySelector('#start-btn')

const randomCard = document.querySelector('#random-card')
const flipCardInnerRC = randomCard.querySelector('.flip-card-inner')
const flipCardBackRC = flipCardInnerRC.querySelector('.flip-card-back')

const randomCardGuess = document.querySelector('#random-card-guess')
const flipCardInnerRCG = randomCardGuess.querySelector('.flip-card-inner')
const flipCardFrontRCG = flipCardInnerRCG.querySelector('.flip-card-front')
const flipCardFrontP_RCG = flipCardFrontRCG.querySelector('.flip-card-front-p')
const flipCardBackRCG = flipCardInnerRCG.querySelector('.flip-card-back')

const higherLowerButtonWrapper = document.querySelector('.higher-lower-btn-wrapper')
const lowerBtn  = document.querySelector('#lower-btn')
const higherBtn = document.querySelector('#higher-btn')

const response = document.querySelector('.response')

const playAgain = document.querySelector('.play-again')
const playAgainBtn = document.querySelector('#play-again-btn')

const randomInteger = Math.floor(Math.random() * 10) + 1;
const randomIntegerGuess = Math.floor(Math.random() * 10) + 1;

function cardFlipStart() {
    startBtn.classList.add('hide-me')
    randomCard.classList.add('flip')
    flipCardInnerRC.classList.add('flip')
}

function gameStart() {
    cardFlipStart()
    flipCardBackRC.innerHTML = randomInteger

    setTimeout(function backCard() {
        flipCardFrontP_RCG.classList.remove('hide-me')
        higherLowerButtonWrapper.classList.remove('hide-me')
    }, 1000)

    return randomInteger
}

function cardFlipMiddle() {
    flipCardFrontP_RCG.classList.add('hide-me')
    randomCardGuess.classList.add('flip')
    flipCardBackRCG.innerHTML = randomIntegerGuess
    higherLowerButtonWrapper.classList.add('hide-me')
}

function guessLower() {
    cardFlipMiddle()
    if(randomInteger > randomIntegerGuess) {
        response.innerHTML = "You win!"
    } else if (randomInteger < randomIntegerGuess) {
        response.innerHTML = "Too bad! Try again."
    } else if (randomInteger == randomIntegerGuess) {
        response.innerHTML = "It's a tie!"
    } else response.innerHTML = "Something went wrong. PLease try again."

    playAgain.classList.remove('hide-me')
} 

function guessHigher() {
    cardFlipMiddle()
    if(randomInteger < randomIntegerGuess) {
        response.innerHTML = "You win!"
    } else if (randomInteger > randomIntegerGuess) {
        response.innerHTML = "Too bad! Try again."
    } else if (randomInteger == randomIntegerGuess) {
        response.innerHTML = "It's a tie!"
    } else response.innerHTML = "Something went wrong. PLease try again."

    playAgain.classList.remove('hide-me')
}

function cardReset() {
    document.location.reload()
}

startBtn.addEventListener('click', gameStart)
lowerBtn.addEventListener('click', guessLower)
higherBtn.addEventListener('click', guessHigher)
playAgainBtn.addEventListener('click', cardReset) 
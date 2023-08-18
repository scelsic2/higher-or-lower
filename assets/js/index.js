const startBtn = document.querySelector('#start-btn')
const randomCard = document.querySelector('.random-card')
const randomCardGuess = document.querySelector('.random-card-guess')
const higherLowerButtonWrapper = document.querySelector('.higher-lower-btn-wrapper')
const lowerBtn  = document.querySelector('#lower-btn')
const higherBtn = document.querySelector('#higher-btn')
const randomInteger = Math.floor(Math.random() * 10) + 1;

function gameStart() {
    console.log('Game Started!')
    startBtn.classList.add('hide-me')

    randomCard.innerHTML = randomInteger
    randomCard.classList.remove('hide-me')
    higherLowerButtonWrapper.classList.remove('hide-me')
    const storedInteger = randomInteger
    console.log(storedInteger)
    randomInteger = ''
    console.log(ReadableStreamBYOBRequest)
    return storedInteger
}

function guessLower() {

} 

startBtn.addEventListener('click', gameStart)
lowerBtn.addEventListener('click', guessLower)
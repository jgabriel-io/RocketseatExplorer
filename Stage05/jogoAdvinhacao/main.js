//Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnPlay")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

//Funções
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')
    const guessedNumber = Number(inputNumber.value)

    if (inputNumber.value.trim() !== '') {
        if (guessedNumber >= 0 && guessedNumber <= 10) {
            if (guessedNumber === randomNumber) {
                toggleScreen()
                screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas` 
            }
            inputNumber.value = ""
            xAttempts++
        } else {
            alert("Por favor, insira um número entre 0 e 10.")
        }
    }
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter () {
    if(e.key == 'Enter'&& screen1.classList.contains('hide')) {
        handleResetClick()
    }
}


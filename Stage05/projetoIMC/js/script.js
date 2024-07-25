import { Modal} from './modal.js'
import { AlertError } from "./alertError.js"
import { IMC, notNumber} from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    console.log(notNumber(weight))
    console.log(notNumber(height))

    const result = IMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

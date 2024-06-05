//06 - Jogo da advinhação
 
let resultado = prompt("Advinhe o número de 0 a 10")
const num = Math.round(Math.random() * 10)
 
let tentativas = 1
 
while(Number(resultado) != num) {
    resultado = prompt("Erro, tente novamente")
    tentativas++
}
 
if (tentativas == 1) {
    alert(`Parabéns! Você advinhou o número em ${tentativas} tentativa, o número a ser advinhado foi ${num}`)
} else {
    alert(`Parabéns! Você advinhou o número em ${tentativas} tentativas, o número a ser advinhado foi ${num}`)
}
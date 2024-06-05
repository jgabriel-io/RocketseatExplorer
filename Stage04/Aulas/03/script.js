//Solicite dois números, realize as operações básicas e apresente o resultado final

alert("Digite dois número para realizar as operações básicas")
let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")
 
n1 = Number(n1)
n2 = Number(n2)
 
const soma = n1 + n2
const sub = n1 - n2
const div = n1 / n2
const mult = n1 * n2
const restoDiv = n1 % n2
 
alert("O resultado da soma é " + soma)
alert("O resultado da subtração é " + sub)
alert("O resultado da divisão é " + div)
alert("O resultado da multiplicação é " + mult)
alert("O resto da divisão é " + restoDiv)

 
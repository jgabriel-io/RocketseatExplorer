// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello Word")

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

const n1 = 10
const n2 = 15

const soma = n1 + n2

alert("A soma dos números 10 e 15 é: " + soma)

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNum = 1

if (typeof isNum == 'number') {
    alert("É um número")
} else {
    alert("Não é um número")
}

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isStr = "aaaa"

if (typeof isStr == 'string') {
    alert("É uma string")
} else {
    alert("Não é uma string")
}

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBool = true

if (typeof isBool == 'boolean') {
    alert("É um booleano")
} else {
    alert("Não é um booleano")
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = n1 - n2

alert("A subtração dos números 10 e 15 é: " + sub)

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const multi = n1 * n2

alert("A multiplicação dos números 10 e 15 é: " + multi)

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = n1 / n2

alert("A divisão dos números 10 e 15 é: " + div)

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const isPar = 2241241543

if (isPar % 2 == 0){
    alert("É um número par")
} else {
    alert("Não é um número par")
}

// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const isImpar = 2431451512

if (isImpar % 2 != 0){
    alert("É um número ímpar")
} else {
    alert("Não é um número ímpar")
}
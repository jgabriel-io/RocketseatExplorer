//Calcular a média do aluno, solicitar o nome do aluno e as 3 notas.

alert("Digite seu nome e as suas médias")
let nome = prompt("Digite seu nome: ")
let n1 = prompt("Digite a primeira nota")
let n2 = prompt("Digite a segunda nota")
let n3 = prompt("Digite a terceira nota")
 
n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)
 
media = (n1 + n2 + n3) / 3
resultado = media > 6
media = media.toFixed(2)
 
if (resultado) {
    alert("Parábens " + nome + "! você foi aprovado, sua média foi: " + media )
} else if (media < 3) {
    alert(nome + " você foi reprovado, sua média foi " + media)
} else {
    alert(nome + " prepare-se para prova de recuperação, sua média foi " + media)
}

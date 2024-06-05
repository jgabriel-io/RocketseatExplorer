/*  
    1- Calcule a média dos alunos e indique se foram aprovados ou reprovados no concurso.
*/

const alunos = [
    {
        nome: "João",
        n1: 10,
        n2: 10,
    },
    {
        nome: "Gaby",
        n1: 10,
        n2: 10,
    },
    {
        nome: "Gu",
        n1: 5,
        n2: 5,
    },
]
function media(n1, n2) {
    return (n1 + n2) / 2
}
alunos.forEach(function(aluno) {
    const nome = aluno.nome;
    const nota1 = aluno.n1;
    const nota2 = aluno.n2;
    const mediaAluno = media(nota1, nota2);

    if (mediaAluno >= 7) {
        alert("A média do(a) aluno(a) " + nome + " é: " + mediaAluno + "\nParabéns, " + nome + " Você foi aprovado(a) no concurso!");
    } else {
        alert("A média do(a) aluno(a) " + nome + " é: " + mediaAluno + "\nNão foi dessa vez, " + nome + "! tente novamente!");
    }
});

/* Lista de pacientes */

const pacientes = [
    {
        nome: "João",
        idade: 25,
        altura: 1.70,
        peso: 70,        
    },
    {
        nome: "Maria",
        idade: 25,
        altura: 1.70,
        peso: 70,    
    },
    {
        nome: "João",
        idade: 25,
        altura: 1.70,
        peso: 70,    
    },
    {
        nome: "João",
        idade: 25,
        altura: 1.70,
    },
]

let nomePacientes = []

for(let paciente of pacientes) {
    if (paciente.nome && paciente.idade && paciente.altura && paciente.peso) {
        console.log(`${paciente.nome} tem ${paciente.idade} anos, mede ${paciente.altura} e pesa ${paciente.peso} quilos`);
    } else {
        console.log("Paciente inválido, está faltando informações");
    }
} 

/*
- Maneira simples de resolver

 for (let i = 0; i < pacientes.length; i++) {
    nomePacientes[i] = pacientes[i].nome
}
*/





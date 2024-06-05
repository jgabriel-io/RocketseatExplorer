/* IMC dos pacientes */

const pacientes = [
    {
        nome: "João",
        idade: 25,
        altura: 170,
        peso: 70,        
    },
    {
        nome: "Maria",
        idade: 25,
        altura: 170,
        peso: 70,    
    },
    {
        nome: "Pedro",
        idade: 25,
        altura: 170,
        peso: 70,    
    },
    {
        nome: "Gui",
        idade: 25,
        altura: 170,
        peso: 70,
    },
]

function IMC(peso, altura) {
    return (peso / ((altura / 100) ** 2)).toFixed(2)
}

const imcPaciente = function(paciente) {
    return`
        Paciente ${paciente.nome} possui o IMC de
        ${IMC(paciente.peso, paciente.altura)}
    `
}

for (let paciente of pacientes) {
    let mensagem = imcPaciente(paciente)
    alert(mensagem)
}

/*Arrow function

const imcPaciente = (paciente) => {
    return`
        Paciente ${paciente.nome} possui o IMC de
        ${(paciente.altura / ((paciente.peso / 100) ** 2)).toFixed(2)}
    `
}

for (let paciente of pacientes) {
    let mensagem = imcPaciente(paciente)
    alert(mensagem)
}
*/

/*função básica

function imcPaciente(paciente) {
    return`
        Paciente ${paciente.nome} possui o IMC de
        ${(paciente.altura / ((paciente.peso / 100) ** 2)).toFixed(2)}
    `
}

for (let paciente of pacientes) {
    let mensagem = imcPaciente(paciente)
    alert(mensagem)
}
*/


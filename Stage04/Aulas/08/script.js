/* Cadastrar e visualizar itens no menu com switch
    - Cadastrar itens
    - Mostrar itens
    - Sair
*/
let option;
let itens = []

while(option != 3) {
    let option = Number(prompt(`
        Olá usuário! Digite o número da opção desejada:
        
        1. Cadastrar item
        2. Visualizar itens
        3. Sair
    `))

    switch(option) {
        case 1:
            let item = prompt("Digite o nome do item")
            itens.push(item)
            break;
        case 2:
            if(itens.length == 0) {
                alert("Não há itens cadastrados")
            } else {
                alert(itens)
            }
            break;
        case 3:
            alert("Obrigado por utilizar nossos serviços")
        default:
            alert("Opção inválida")
            break;
    }
}
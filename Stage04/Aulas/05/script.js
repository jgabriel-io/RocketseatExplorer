//Capturar 10 itens e imprimir numa lista

let itens = [];
 
for(let item = 0; item < 10; item++) {
    let nomeItem = prompt("Digite o item " + (item + 1))
 
    itens[item] = nomeItem
}
 
alert(itens)
 
 
let mercado = [];
 
for(let itemMercado = 0; itemMercado < 20; itemMercado++) {
    let itemNome = prompt("Digite o item " + (itemMercado + 1))
 
    mercado[itemMercado] = itemNome
}
 
alert(mercado)

//Objeto como um array associativo

const colecionador ={
    nome:"João do Gibi",
    idade:41,
    tipocoleção:["quadrinhos"],
    contato:"joao@email.com"
}
console.log(colecionador)
console.log(colecionador["nome"])

adicionarTipo = function(propriedade,tipo){
    this[propriedade].push(tipo)
    for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
    }
}
console.log(colecionador)
// Lista de dependentes -> Verificar a melhor forma de agregar a informação de um novo dependente ao Objeto cliente.

const cliente = {
    nome:"Raul",
    idade:40,
    cpf:"12543622866",
    email:"raul@email.com",
    fones: ["55999595858", "552199996969"],
    dependentes:[{
        nome:"Eduardo Leon",
        parentesco:"filho",
        dataNasc:"29/08/2013"
    }]
}
            //  Metodo de Array push paramentro no ultimo indice do array
cliente.dependentes.push({
    nome:"Clara Leon",
    parentesco:"filha",
    dataNasc:"08/07/2014"
})

console.log(cliente) 

//const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="08/07/2014")

//console.log(filhaMaisNova)
//console.log(filhaMaisNova[0].nome)
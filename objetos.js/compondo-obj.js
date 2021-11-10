//Desafio  - Compondo um objeto -> Adicionar dependentes para um dos clientes cadastrados , com nome, idade e paretesco.
const cliente = {
    nome:"Aquiles",
    idade:36,
    cpf:"22867810808",
    email:"aquiles01@email.com",
    fones:["551199955899","5521984042444"]
}

cliente.dependentes ={
    nome:"Amaia",
    parentesco:"filha",
    dataNasc:"20/07/2012"
}

cliente.dependentes.nome = "Amaia Anjos"

console.log(cliente)

console.log(cliente)
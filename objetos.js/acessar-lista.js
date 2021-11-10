//Desafio - Acessar a chaves ->  Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela
// passa a chave com uma variavel

     //Objeto
const cliente = {
    nome: "Pombo",
    idade:35,
    cpf:"22767710901",
    email:"cadeopombo@gmail.com"
    
}
             // lista array 
const chaves =["nome","idade","cpf","email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"])


//Desafio - Padronizando os nomes 

//Precisamos padronizar a lista de alunos para conter letras maiúsculas: - ["ana Clara", "Ana julia", "MIGUEL leandro"]

let nomes = ["ana Clara", "Ana julia", "MIGUEL leandro"]

const nomesAtulaizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtulaizados)
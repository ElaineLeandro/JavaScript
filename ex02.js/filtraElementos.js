//Desafio - Filtrando elementos
//* Depois de clacular a média dos alunos, precisamos mostrar que é reprovado entre os alunos: - "Aquiles", "Ana", "Liz", "Lays" / - 7, 4.5, 8, 7.5

//Metodo filter "Filtra" tudo que vai dentro dos parentes ele pede que primeiro paramentro 

// Cada fez que o filter ele pode receber um parametro que nao é obrigatorio exemplo o indice se ultilizar um _ indice ele reconece aquele paramentro

const nomes = ["Aquiles", "Ana", "Liz", "Lays"]
const notas = [7, 4.5, 8, 7.5]
                 //trocamos aluno _  // por é primeiro elemeto aluno "Aquiles"
const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log (`Reprovados: ${reprovados}`)
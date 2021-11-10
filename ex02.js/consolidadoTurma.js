// Desafio - médias das turmas: com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:
// const salaJs =[7, 8, 8 ,7, 10, 6.5, 4, 10, 7 ]
// const salaJava =[6, 5, 8, 9, 5, 6]
// const salaPathon = [7, 3.5, 8, 9.5]
// reduce é funcão comum

const salaJs =[7, 8, 8 ,7, 10, 6.5, 4, 10, 7 ]
const salaJava =[6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum,atual) =>
    atual + acum,0)
    return somaDasNotas/notasDaSala.length
}
console.log(`A médias das sala de JavaScript:${mediaSala(salaJs)}`)
console.log(`A medias das sala de Java:${mediaSala(salaJava)}`)
console.log(`A medias das sala de Python:${mediaSala(salaPython)}`)

const notas = [9, 8.5, 6.3, 10] 

const media = notas.reduce((acumula, notaAtual) => notaAtual + acumula,0)/notas.length

console.log(media)
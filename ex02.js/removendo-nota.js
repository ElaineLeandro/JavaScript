//Desafio removendo nota 
const notas = [10, 9, 8, 6.5, 5]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log( `A média é ${media}`)

//metodo pop dentro do parametro ele não aceita  e tirar ultimo elemento.
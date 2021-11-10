//Objeto literal e referência -> a estrutura de um objeto, com seus pares de chave e valor:

//const objPersonagem = {
//    nome: "Alice no País",
//    classe: "Menina",
//    nivel: "15"
//}
//const objPersonagem2 = objPersonagem
//objPersonagem2.nome = "Alice no País das maravilhas"

//console.log(objPersonagem.nome)
//console.log(objPersonagem2.nome)

//A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):

let num = 650
let num2 = num

num2 = 800
console.log(num) //650
console.log(num2) //800

//método Object.create():

const objPersonagem = {
    nome: "Snop",
    classe: "cachorro",
    nivel: "10"   
}
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Snop, o sabio", 

console.log(objPersonagem.nome)
console.log(objPersonagem2.nome)

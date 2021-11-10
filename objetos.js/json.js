//O JSON ->JSON é um acrônimo de JavaScript Object Notation ou “notação de objeto JavaScript”. Como o próprio nome já sugere, JSON é um formato que utiliza a sintaxe de objetos e arrays do JavaScript. É muito versátil e se tornou a forma mais comum de estrutura para transferência de dados entre cliente/servidor, e tem sido utilizado mesmo em programas que não utilizam JavaScript. A estrutura também é mais fácil de compreender, comparada com outro formato de transferência de dados, o XML:

const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "Miguel Anjo",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
})
//console.log(jsonLivro)
const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)
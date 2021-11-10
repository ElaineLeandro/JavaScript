//Trabalhar com objetos no Javascript permite que utilizemos diversos tipos de dados, desde primitivos (string, number, bool) até tipos mais elaborados como arrays ou outros objetos.
const cliente = {
    nome: "Benicio",
    idade:33,
    email: "beni@email.com",
    telefones: ["+550033338888", "+550033334444"]
}
    cliente.animalEstimacao = [{
    nome: "Costelinha",
    raça: "Cão",
    vacinado: true
}]
    cliente.animalEstimacao.push({
    nome: "Tody",
    raça: "Gato",
    vacinado: false
})
console.log(animalEstimacao.nome)

//O cliente possui uma propriedade chamada animalEstimacao, um array de objetos, o que nos permite usar funções comuns a arrays como filter().
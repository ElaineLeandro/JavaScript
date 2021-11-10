//Vendas de passagens -> Logica
console.log(`Trabalhando com condicionais`);
const savaldor = `Savaldor`;
const saopaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Savaldor`,
    `São Paulo`,
    `Rio de Janeiro`,
);
// alterando a variavel para efetuar os teste idadeComprador 
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idadade");
//     listaDeDestinos.splice(1, 1); // removendo item
// }   else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removedo item
// }else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

                // caracter de escape n\n\ dentro de uma condicional, pula linha
console.log("Embarque: \n \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Exlente viagem");
}else{
    console.log("Ah você não pode embarcar");
}

console.log(listaDeDestinos);

// atalho para comentar Ctrlkc;)
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

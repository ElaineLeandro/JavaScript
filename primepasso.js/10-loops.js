console.log(`Trabalhando com Loops`);
const savaldor = `Savaldor`;
const saopaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Savaldor`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(" \n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}        
console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}
//vou declara a minha inicialização da variavel dentro dele, o segundo espeço é condição q vai verificar de cada loop, terceiro espaço ele vai execultar no final de cada loop  
//for(let cont = 0 ; cont <3 ; cont++){
//    if(listaDeDestinos[contador] == destino){
//        destinoExiste = true;
//        }
//}
for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}n
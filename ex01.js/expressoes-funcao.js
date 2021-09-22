// declaração de função
//function minhaFuncao (paramentro){
// bloco de codigo 
//}

//minhafuncao ("paramentro")

// expressao de função

const soma = function (numero1, numero2){  return numero1 + numero2}
//console.log(soma(8,8))

//diferença principal: HOISTTING
//funções e var são " listadas" no topo do arquivo.

console.log(apresentar())

function apresentar(){
    return "Oie";
}
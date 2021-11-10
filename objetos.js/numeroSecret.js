const numeroSecreto = parseInt(math.random()* 11);

function Chutar(){
    const Resultado = document.getElementById("resultado");
    const chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto){
        Resultado.innerHTML= "Parabéns você acertou!"
    }else if (chute > 10 || chute < 0){
        Resultado.innerHTML = "Você deve digitar um número de 0 á 10"

    }else {
        Resultado.innerHTML = "Ah que chato você errou!" + numeroSecreto;
    }
}
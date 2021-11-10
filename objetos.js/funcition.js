function Converter(){
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolarNumererico = parseFloat(valor);
    
    let valorEmReal = valorEmDolarNumererico * 5;
    console.log(valorEmReal);
    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido= "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;

}

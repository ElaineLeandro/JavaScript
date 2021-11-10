//Percorrendo objetos
const paciente = {
    nome: "Gustavo Olivio.",
    idade:30,
    email: "guto@email.com",
    identicacao: "Lidão032536",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
        return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
        for (let info in paciente) {
            console.log(info)
        };
    }
    
}

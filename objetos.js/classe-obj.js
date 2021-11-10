//Classe Objeto; o nome da classe sempre iniciar letra maiuscula

class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}
const eduarda = new Cliente("Eduarda","Duda@email.com", "12336528820",800)

eduarda.exibirSaldo()
console.log(eduarda)
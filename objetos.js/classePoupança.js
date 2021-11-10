//Cliente poupança -> Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança;

class Cliente{
    constructor (nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar (valor){
    this.saldo += valor
    }
    exibirSaldo(){
    console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor (nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca 
    }
    depositarPoupanca (valor)
    {
        this.saldoPoupanca += valor
    }
} 
const pattyPimentinha = new ClientePoupanca("Patty Pimentinha","patpi@email.com","12345678901",650,950)

//console.log(pattyPimentinha)

pattyPimentinha.depositar(450)
pattyPimentinha.depositarPoupanca(250)

console.log(pattyPimentinha)

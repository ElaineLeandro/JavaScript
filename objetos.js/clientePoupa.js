//Cliente poupança -> Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança;

function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{  
    Cliente.call(this,nome,cpf,email,saldo,saldoPoup)
    this.saldoPoup = saldoPoup
}
const sullivan  = new ClientePoupanca("sullivan","55296920333","sulli@email.com",150,250) 
console.log(sullivan)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

sullivan.depositarPoup(300)
console.log(sullivan.saldoPoup)

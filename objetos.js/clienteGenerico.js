function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
const cat = new Cliente ("Cat", "12613510500","cat@email.com",800)
console.log(cat)
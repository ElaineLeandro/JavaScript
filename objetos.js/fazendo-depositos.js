//Fazendo depósitos -> adicionar uma propriendade que permita "açoes", para que os clientes que estão cadastrados consigam fazer operações;
const cliente = {
    nome:"Eduardo Olivio",
    idade:41,
    cpf:"12543622866",
    email:"edu@email.com",
    fones: ["55999595858", "552199996969"],
    dependentes:[
      {
        nome:"Ellen Olivio",
        parentesco:"filha",
        dataNasc:"29/08/2005"},
      {
        nome:"Ellen Olivio",
        parentesco:"filha",
        dataNasc:"29/08/2005"
      }
    ],
    saldo:10000,
    depositar:function(valor){
    this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(250)
console.log(cliente.saldo)






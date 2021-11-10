//Puxando relatório -> Percorrer um objeto e extrair informações básicas do cliente em formato mais legível e de forma automatizada para fornecer a outros departamentos do banco: Metodo for in

const cliente = {
    nome: 'Costelinha',
    idade:36,
    cpf:'12332522606',
    email:'costela@email.com',
    fone:['2284043699','5521936963322'],
    dependentes:[
    {
        nome:'Liz Anjos',
        parentesco:'filha',
        dataNasc:'19/10/2012'},
    {
        nome:'Poia Anjos',
        parentesco:'filha',
        dataNasc:'19/10/2012'
    }
    ],
    saldo:460,
    depositar:function(valor){
        this.saldo += valor
    }
}
let relatorio="";

for (let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente [info] === "function")
    {
        continue
    }else{
        relatorio +=`
        ${info} ==> ${cliente[info]}
        `
    }

}
console.log(typeof cliente.depositar)
console.log(relatorio)
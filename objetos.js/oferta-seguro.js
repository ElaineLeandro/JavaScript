//Oferta de seguro  -> Percorre um objeto, verificar se existe a chave`depemdente` e caso exista, enviar uma mensagem de oferta de seguro
const cliente = {
    nome: 'Amaia',
    idade:36,
    cpf:'12322523303',
    email:'amaia@email.com',
    fone:['2284043698','5521936963323'],
    dependentes:[
    {
        nome:'Miguel Anjos',
        parentesco:'filha',
        dataNasc:'19/10/2012'},
    {
        nome:'Benjamin Anjos',
        parentesco:'filha',
        dataNasc:'15/11/2013'
    }
    ],
    saldo:460,
    depositar:function(valor){
        this.saldo += valor
    }
}
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("depemdentes"))
    {
        console.log(`Oferta seguro de vida para ${obj.nome}`);
    }
}
console.log(Object.entries(cliente))
console.log(Object.values(cliente))
oferecerSeguro(cliente)
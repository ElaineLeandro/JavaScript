const clientes = [
    {
    nome: "Eduardo",
    cpf: "12312312312",
    dependentes: [{
        nome: "Ellen",
        parentesco: "filha",
        dataNasc: "14/08/2005"
    },
    {
        nome: "Eduarda",
        parentesco: "filha",
        dataNasc: "20/08/2008"
    }],
    },
    {
    nome: "Raul",
    cpf: "56767867867",
    dependentes: [{
        nome: "Lays",
        parentesco: "filha",
        dataNasc: "15/07/2005"
    },
    {
        nome:"Rauany",
        parentesco:"filha",
        dataNasc:"19/10/2006"
    }],
    }
]
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes)
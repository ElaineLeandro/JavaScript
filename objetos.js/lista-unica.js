// Lista de depemdentes -> Extrair de uma listagem de clientes apenas as informações de depemdentes e montar uma lista única, para analise de outros departamentos do banco.

const clientes =[
    {
    nome:"Ruth Rodrigues",
    cpf:"00712332107",
    dependentes:[{
        nome:"Eduardo",
        parentesco:"filho",
        dataNasc:"29/08/1980"
    },
    {
        nome:"Raul",
        parentesco:"filho",
        dataNasc:"16/09/1981"
    }],
    },
    {
        nome:"Janaina",
        cpf:"29795613303",
        dependentes: [{
        nome:"Natã",
        parentesco:"filho",
        dataNasc:"15/05/2015"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.log(listaDependentes)
console.table(listaDependentes)

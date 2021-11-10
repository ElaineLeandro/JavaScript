//O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:

function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
    ${tipoCliente} da agência ${agencia}:
    - nome: ${this.nome}, email: ${this.email}
    `)
}

const cliente01 = {
    nome: "Daphne",
    email: "da@email.com"
}

const cliente02 = {
    nome: "Scooby-Doo",
    email: "by@email.com"
}
const clientePersonalizado = ["cliente personalizado", "Rio Grande do Sul"]
const clienteUniversitario = ["cliente universitario", "Maceio"]

imprimeNomeEmail.apply(cliente01, clientePersonalizado)
// cliente especial da agência Rio Grande do Sul: - nome: Daphne, email: da@email.com

imprimeNomeEmail.apply(cliente02, clienteUniversitario)
// cliente estudante da agência Maceio: - nome: Scooby-Doo, email: by@email.com
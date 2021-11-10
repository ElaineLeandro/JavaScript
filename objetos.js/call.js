//Método permite que uma função seja chamada com parâmetros e valor de this específicos;

function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}
const cliente1 = {
    nome: "Snoopy",
    email: "nopy@email.com"
}
const cliente2 = {
    nome: "Charlie Brown",
    email: "charli@email.com"
}
imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Snoopy, email:nopyc@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Charlie Brown, email: charli@email.com
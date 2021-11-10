//Para saber mais: this, bind(), apply() e call()

//const pessoa = {
//    nome: "Ellen",
//   email: "ellen@email.com",
//   imprimeNome: function(){
//    console.log(`${pessoa.nome}`)
//    }
//}
//pessoa.imprimeNome() //Ana

//const pessoa = {
//    nome: "Bento",
//    email: "Ben@email.com",
//    imprimeNome: function(){
//    console.log(`${this.nome}`)
//    }
//}
//pessoa.imprimeNome() //Bento

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}
const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}
const pessoa2 = {
    nome: "Vitor",
    email: "vi@email.com",
    imprimeInfo: imprimeNomeEmail
}
pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
pessoa2.imprimeInfo()
   //nome: Vitor, email p@email.com
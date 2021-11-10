//Para saber mais: this, bind(), apply() e call() ->No caso de atributos das funções construtoras ou dos construtores de classe, o this tem função similar: podemos dizer que o construtor recebe os atributos deste objeto:

function Personagem(nome, email){
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}
const personagem1 = new Personagem("Perna Longa", "perna@email.com")
const personagem2 = new Personagem("Lola", "lolo@email.com")

personagem1.imprimeNomeEmail()
// nome: Perna Longa, email: perna@email.com
personagem2.imprimeNomeEmail()
// nome: Lola, email: lolo@email.com

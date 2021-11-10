//Orientação Objeto-> Então a principal ideia do orientação a objeto, ele é um paradigma de programação, ele é um modelo, então é uma maneira de você programar, existem diversas maneiras;
//O que são classes? São modelos usando a criação objetos. Na classe iremos definir as propriedades e informação precisamos  e os comportamentos são metodos;
//Exemplo de Classe Js;

class Humano{
    construtor(nome, sobrenome, cpf, email, fone){
    this.nome= nome
    this.nomsobrenome= sobrenome
    this.cpf= cpf
    this.email= email
    this.fone= fone
    }   
}

//Atributos e Métodos -> A classe define os atributos(característica)e os metodos(comporatmentos) de um objeto;

exibirNomeCompleto(){
    console.log(`${this.nome} ${SourceBuffer}`)
}

//Herança -> É mecanismo de Orientação a Objeto que permite que uma classe herde características de uma classe;

//Exempo de Herança Js;

class Programadora extends Humano{
    construtor (nome, sobrenome, cpf, email, fone,linguagem){
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem

    }
}

//Objeto -> O objeto é uma instacia de uma classe: const novaDev = new Programadora("Amaia", "Olivio", "ama@email.com", "javaSript") -> quando uso new ele guarda na memoria. A Orientação a objetos é modelo(estilo) de se programar.Na Orientação a Objetos a ideia é transforma coisas do mundo para o código. Uma classe tem atributos e métodos.Um Objeto é uma instância de classe em memória.
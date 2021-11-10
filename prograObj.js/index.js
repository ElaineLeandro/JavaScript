// Entendendo o problema do cliente;
//Banco -> Essa Etrutura se repete N vezes de acordo com a quantidade de clientes temos -> como fazer um molde "Classse" para um cliente;
// { const Nome;
//   const CPF;
//   const Agencia;
//   const Saldo;
// }

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();

cliente1.nome = "Gato de Botas";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = "Liz";
cliente2.cpf = 88822233309;

const contaCorrenteGato = new ContaCorrente();
contaCorrenteGato.agencia = 1001;
contaCorrenteGato.cliente = cliente1
contaCorrenteGato.depositar(800);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.agencia = 102;

contaCorrenteGato.transferir(valor, conta2);
console.log(conta2)

//contaCorrenteGato.depositar(100);
//contaCorrenteGato.depositar(100);
//contaCorrenteGato.depositar(-100);
//const valorSacado = contaCorrenteGato.sacar(50);


//console.log(contaCorrenteGato);
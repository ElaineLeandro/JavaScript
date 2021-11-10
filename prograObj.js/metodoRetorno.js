
class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar (valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "André Corredor";
cliente1.cpf = 11233455677;


const cliente2 = new Cliente();
cliente2.nome = "Erik Sem Filtro ";
cliente2.cpf = 22311644588;

const cliente3 = new Cliente();
cliente3.nome = "Tata Advogada";
cliente3.cpf = 32212245699;

const contaCorrenteAndre = new ContaCorrente();
contaCorrenteAndre.agencia = 1001;

contaCorrenteAndre.depositar(-100);
contaCorrenteAndre.depositar(100);
contaCorrenteAndre.depositar(100);
const valorSacado = contaCorrenteAndre.sacar(50);

console.log(valorSacado)

console.log(contaCorrenteAndre);

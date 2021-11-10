//Vendas de passagens
console.log(`Trabalhando com listas`);
//const portoDeGalinhas = `Porto De Galinhas`;
//const natal = `natal`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Porto De Galinhas`,
    `Natal`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Florianopolis`) // adcionando um item na lista isso quando valor foi declarado
console.log(`Destinos possíveis`);
//console.log(portoDeGalinhas, natal, rioDeJaneiro);
console.log(listaDeDestinos)

//listaDeDestinos = 2;

listaDeDestinos.splice(2,1);
console.log(listaDeDestinos[3]);
console.log(listaDeDestinos[3], listaDeDestinos[0]);
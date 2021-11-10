//Desafio - Lista de Telefones -> Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se ha mais de um número em algum cadastro.

const cliente = {
    nome:"Arrasa Corações",
    idade:30,
    cpf:"12236410201",
    email:"coracao@gmail.com",
    telefone:["55983563040","5521966665969"]
}
                // O forEach - Só retorna o que esta no loop
cliente.telefone.forEach(telefone => console.log(telefone))
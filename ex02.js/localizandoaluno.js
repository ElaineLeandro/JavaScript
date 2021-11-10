// Dasafio - Procurando Lista
// * Crie uma função que recebe como argumento o nome de um aluno
// * verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// * Caso o nome do aluno  não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

const alunos = ['Aquiles','Bento', 'Lays', 'Rauany' ]
                               //3
const mediaDosAlunos= [10, 8, 7, 6]

// includes -> booleano
//indexof -> 3

let listaDeNotasEAlunos = [alunos,mediaDosAlunos ]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos [0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0] [3]
        return listaDeNotasEAlunos[0][indice] + ',sua média é' +listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não esta cadastrado"
    }
}
    
console.log(exibeNomeNota("Bento"))

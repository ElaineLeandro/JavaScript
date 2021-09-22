const nomes = [ 'Eduardo', 'Raul', 'Bento', 'Benicio', 'Miguel', 'Gabriel',
'Sullivan',  'Aquiles', 'Thor', 'Leandro', 'Ana', 'Clara', 'Lays', 'Ellen', 'Rauany', 'Eduarda', 'Amanda', 'Liz', 'Fabiana', 'Raquel', 'Ruth', 'Elaine']

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log ("tamanho da array:", nomes.length)
                               //0, 11
console.log (`Alunos da sala 1:${sala1}`)
                                //11
console.log (`Alunos da sala 2:${sala2}`)
let mediageral = 0 
let qtdHomens = 0
let qtdMulheresAcimade7 = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10)
nota = parseInt(prompt('Diite a nota do ' + contador + ' aluno'))
sexo = prompt('Digite o sexo do aluno (M/F)')

if(sexo == 'm'){
    if(nota > maiorNotaHomens){
        maiorNotaHomens = nota
    }
    qtdHomens++

    if(sexo == 'f' && nota > 7){
        qtdMulheresAcimade7++
    }

    mediageral += nota
    contador++
}

mediageral = mediageral / 10

console.log('A média geral dos alunos foi: ' + mediageral)
console.log('A quantidade de homens foi: ' + qtdHomens)
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: ' + qtdMulheresAcimade7)
console.log('A maior nota entre os homens foi: ' + maiorNotaHomens)
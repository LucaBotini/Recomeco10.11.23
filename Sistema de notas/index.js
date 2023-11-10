let continuar = true

let notaAluno = []
let sexos = []

while (continuar == true) {
notaAluno.push(parseInt(prompt('Qual a nota do aluno?')))
sexos.push(prompt('Qual o sexo do aluno? (M/F)'))
let continuarNotas = prompt('Deseja continuar cadastrando notas? (S/N)')

if(continuarNotas == 'n'){
    continuar = false
}
}
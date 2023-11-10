let continuar = true

let notaAluno = []
let alunos = []
let m = 0;
let maiorque7f = 0;
let maiornotam = 0
let mediaGeral = 0

while (continuar == true) {
    let qualnota = notaAluno.push(parseInt(prompt('Qual a nota do aluno?')))
    let mf = (prompt('Qual o sexo do aluno? (M/F)'))
    let continuarNotas = prompt('Deseja continuar cadastrando notas? (S/N)')
    if (continuarNotas == 'n') {
        continuar = false
    }
    if (qualnota > 7 && mf == 'f') {
        maiorque7f++
    }

    if (qualnota > 0 && mf == 'm') {
        maiornotam = qualnota
    }

    if (mf == 'm') {
        m++
    }
    alunos++
}

for (let i = notaAluno; i < notaAluno.length; i++) {
    mediaGeral = notaAluno / alunos
}
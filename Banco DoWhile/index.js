
do {
    const nome = prompt('Qual seu nome?')
    const cpf = parseInt(prompt('Qual seu CPF? (xxxxxxxxxxx)'))

    const saqdep = parseInt(prompt('Depósito(1) Saque(2)'))
    const valorInserido = parseInt(prompt('Qual valor inserido?'))
    let saldoTotal = 10
    switch (saqdep) {
        case 1:
            if (saqdep == 1) {
                saldoTotal = saldoTotal + valorInserido

            }
            break;
        case 2:
            if (saqdep == 2) {
                saldoTotal = saldoTotal - valorInserido

            }
            break;

        default:
            break;
    }
let soun = 'n'

soun = parseInt(prompt('Deseja encerrar o processo? (S/N)'))
} while (soun == 'n')
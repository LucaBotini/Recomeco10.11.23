let soun = false
const nome = prompt('Qual seu nome?')
const cpf = parseInt(prompt('Qual seu CPF? (xxxxxxxxxxx)'))

let saldoTotal = 10
let maiorValor = 0
do {
    const saqdep = parseInt(prompt('Depósito(1) Saque(2)'))
    const valorInserido = parseInt(prompt('Qual valor inserido? Seu saldo é de: ' + saldoTotal + ' reais'))

    switch (saqdep) {
        case 1:
            if (saqdep == 1 && valorInserido > 0 ){
                saldoTotal = saldoTotal + valorInserido
                }else {
                    alert('Você não pode inserir valores abaixo ou igual a (0)')
                }
            break;
        case 2:
            if (valorInserido < saldoTotal) {
                    saldoTotal = saldoTotal - valorInserido
                }else{
                    alert('Você não pode inserir valores abaixo ou igual a (0)')
                }
            break;

        default:
            alert('Insira uma opção válida')
            break;
    }


    if (valorInserido > maiorValor) {
        maiorValor = valorInserido
    }

    let soun2 = prompt('Deseja encerrar o processo? (S/N)')
    if (soun2 == 's') {
        soun = true
    }
} while (soun == false)

alert('Seu saldo é de: ' + saldoTotal + ' reais')
alert('O maior valor inserido foi: ' + maiorValor + ' reais')
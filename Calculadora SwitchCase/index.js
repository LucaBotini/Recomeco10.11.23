let numUm = parseInt(prompt('Digite o primeiro número: '))
let numDois = parseInt(prompt('Digite o segundo número: '))
let operacao = parseInt(prompt('Adição (1) Subtração (2) Divisão (3) Multiplicação (4)'))

let resultado = 0


switch (operacao) {
    case 1:
        resultado = numUm + numDois
        alert('Seu resultado é: ' + numUm + ' + ' + numDois + ' = ' + resultado)
        break;
    case 2:
        resultado = numUm - numDois
        alert('Seu resultado é: ' + numUm + ' - ' + numDois + ' = ' + resultado)
        break;
    case 3:
        resultado = numUm / numDois
        alert('Seu resultado é: ' + numUm + ' / ' + numDois + ' = ' + resultado)
        break;
    case 4:
        resultado = numUm * numDois
        alert('Seu resultado é: ' + numUm + ' x ' + numDois + ' = ' + resultado)
        break;
    default:
        console.error('Esta operação não existe! Tente novamente (F5)')
        break;
}
let nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')
let altura = prompt('Qual sua altura?')
let peso = prompt('Qual seu peso?')

let anoNascimento = 2023 - idade
let IMC = peso / (altura * altura)

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNascimento + ', tem ' + altura + ' de altura, ' + 'pesa ' + peso + 'kg e seu IMC é ' + IMC + ' Kg/m2')
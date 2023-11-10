let nome = prompt('Qual seu nome?')
let idade = parseInt(prompt('Qual sua idade?'))
let carteira = prompt('Você possui Carteira Nacional de Habilitação (CNH) ? (S/N)')
let carro = prompt('Você possui um veículo? (S/N)')

if(idade < 18 || carteira == 'n'){
    alert(nome + ', você não pode dirigir.')
}

if(idade >= 18 && carteira == 's' && carro == 'n'){
    alert(nome + ', você pode dirigir mas não tem um carro.')
}

if(idade >= 18 && carteira == 's' && carro == 's'){
    alert(nome + ', você será nosso motorista!')
}
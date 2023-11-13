const nome = prompt('Qual seu nome?')
const idade = prompt('Qual sua idade?')
const peso = prompt('Qual seu peso?')
const altura = prompt('Qual sua altura?')
const profissao = prompt('Qual sua profissão?')

console.log(`Olá ${nome}, você tem ${idade} anos, pesa ${peso}kg, sua profissão é ${profissao}, e de altura tem: ${altura}m`)

if(idade >= 18){
    alert('Está liberado a skol. Ta um calor em bixo!')
}else{
    alert('Fica na coquinha, papai. Tu tem menos que 18')
}


const meses = idade * 12 
const semanas = idade * 52
const dias = idade * 365


console.log(`Sua idade em meses é: ${meses}, em semanas: ${semanas}, em dias: ${dias}.`)



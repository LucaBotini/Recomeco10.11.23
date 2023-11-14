let continuar = 's'

do {
    const nome = prompt('Qual seu nome?')
    const idade = parseInt(prompt('Qual sua idade?'))
    const peso = parseFloat(prompt('Qual seu peso? (Somente os números. ex: 68)'))
    const altura = parseFloat(prompt('Qual sua altura? (ex: 1.70)'))
    const profissao = prompt('Qual sua profissão?')
    const imc = peso / (altura * altura)
    const meses = idade * 12
    const semanas = idade * 52
    const dias = idade * 365
    const nascimento = 2023 - idade

    if (idade >= 18) {
        alert('Está liberado a skol. Ta um calor em bixo!')
    } else {
        alert('Fica na coquinha, papai. Tu tem menos que 18')
    }

    console.log(`Olá ${nome}, você tem ${idade} anos, pesa ${peso}kg, sua profissão é ${profissao}, e de altura tem: ${altura}m`)
    console.log(`Você nasceu em: ${nascimento}, sua idade em meses é: ${meses}, em semanas: ${semanas}, em dias: ${dias}.`)

    if (imc < 18.5) {
        console.log(`Seu IMC é ${imc} = MAGREZA`)
    }
    else if (imc > 18.5 && imc < 25) {
        console.log(`Seu IMC é ${imc} = NORMAL`)
    }
    else if (imc > 25 && imc < 31) {
        console.log(`Seu IMC é ${imc} = SOBREPESO`)
    } else {
        console.log(`Seu IMC é ${imc} = OBESIDADE`)
    }

    let idadeatual = 0

    for (let i = nascimento; i <= 2023; i++) {
        console.log(`${i} - ${idadeatual} anos de idade`)
        idadeatual++
    }
    let pergunta = prompt('Deseja continuar? (S/N)')
    if (pergunta == 'n') {
        continuar = 'n'
    }

} while (continuar == 's')
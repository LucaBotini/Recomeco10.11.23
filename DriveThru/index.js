alert('Olá, estamos em um posto de gasolina neste exato momento e precisamos da sua ajuda: ')
let escolha = parseInt(prompt('Escolha entre as 3 opções: Gasolina (1) Álcool (2) ou Calibrar Pneus (3)'))
let valorAbastecer = 0
resultado = 0
    if(escolha == 1){
        let valorGasolina = 5
        valorAbastecer = parseInt(prompt('Qual valor á abastecer? (R$ 5,00 por Litro)'))
        resultado = valorAbastecer / valorGasolina
        alert('Você abasteceu: R$' + resultado + ' de gasolina')     
    }
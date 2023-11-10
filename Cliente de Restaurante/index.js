let fome = prompt('O usuário está com fome? (S/N)')
let dinheiro = prompt('O usuário tem dinheiro? (S/N)')
let restaurante = prompt('O restaurante está aberto? (S/N)')

if(restaurante == 'n'){
    alert('Peça um delivery!')
}

if(fome == 'n' || dinheiro == 'n'){
    alert('Hoje a janta será em casa')
}

if(fome == 's' && dinheiro == 's' && restaurante == 's'){
    alert('Hoje o jantar será no seu restaurante preferido!')
}
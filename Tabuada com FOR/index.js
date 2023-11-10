let numero = parseInt(prompt('Digite um número e receba a tabuada seguinte'))

for (let i = numero; i <= numero + 2; i++) {
console.log('tabuada do número: ' + i)
for (let j = 0; j <= numero; j++) {
    console.log(i + ' X ' + j + ' = ' + (i * j))
}    
}
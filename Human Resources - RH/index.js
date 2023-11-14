let confirm1 = 'n'
do{
let name = prompt(`What is your name?`) //nome 
let age = parseInt(prompt(`What is your age?`)) //idade
let salary = parseFloat(prompt(`What is your salary?`)) // salario
let increase = 0.015 //1,5%



for (let year = 1; year <= 10; year++) {
    salary = salary + (salary * increase)
    increase *= 2    
    
    console.log(`${2023 + year} = R$ ${salary}`)
    
}

let confirm = prompt(`Is all the information correct? (Y/N)`)
if(confirm == 'y'){
    confirm1 = 'y'
}
}while(confirm1 == 'n')



let read = require('readline-sync')
let = contadora = 0

for(i = 1; i <=10; i++)
{

idade = read.questionInt("qual sua idade? ")

    if(idade>=18)
    {
        contadora = contadora + 1
    }
}
console.log("A quantidade total de pessoas com idade maior que 18 é:", contadora)
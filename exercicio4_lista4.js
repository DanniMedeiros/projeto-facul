let read = require('readline-sync')

let total = 0, soma = 0
/*numero_tabuada = read.questionInt("Qual número gostaria de mostrar a tabuada?")*/

for(let i = 0; i >= 0; i++)
{
    total = read.questionInt("Informe um numero ")
    soma = soma + total
    console.log(soma)
}
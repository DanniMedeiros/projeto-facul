let read = require('readline-sync')

let numero_tabuada
numero_tabuada = read.questionInt("Qual número gostaria de mostrar a tabuada?")

for(let i = 1; i <=10; i++)
{
    console.log(i + " x", numero_tabuada, "=", numero_tabuada*i)
}
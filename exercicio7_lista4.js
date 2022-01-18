let read = require('readline-sync')

let numero_tabuada, inicio, fim
numero_tabuada = read.questionInt("Qual número gostaria de mostrar a tabuada?")
inicio = read.questionInt("Qual o numero de inicio para tabuada? ")
fim = read.questionInt("Qual o valor de fim da tabuada? ")

for(let i = inicio; i <=fim; i++)
{
    console.log(i + " x", numero_tabuada, "=", numero_tabuada*i)
}
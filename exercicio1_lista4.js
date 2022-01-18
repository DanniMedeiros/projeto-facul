let read = require('readline-sync')

let numero, total = 0, media
/*numero_tabuada = read.questionInt("Qual número gostaria de mostrar a tabuada?")*/

for(let i = 1; i <=6; i++)
{
    numero = read.questionInt("Qual número gostaria de mostrar a tabuada?")
    total = total + numero
}
media = total/6
console.log("O total é: ", total, ". A media é: ", media)
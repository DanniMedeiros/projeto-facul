let read = require('readline-sync')

let contadora = 0 , total = 0, media
/*numero_tabuada = read.questionInt("Qual número gostaria de mostrar a tabuada?")*/

for(let i = 50; i <=70; i++)
{
    if((i%2)==0)
    {
        contadora = contadora + 1
        total = total + i
    }

}
media = total/contadora
console.log("A media de valores é: ", media,". O total é: ", total,". A quantidade de valores é:", contadora)
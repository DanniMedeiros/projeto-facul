let read = require('readline-sync')
let salario = 0.0, filhos, media_salario = 0.0, media_filhos = 0.0, maior_salario = 0.0, pesquisa, cont_pesq = 0, total_salario = 0.0, total_filhos = 0.0
console.log('Fazer pesquisa: 1 = Sim | 0 = Não')
pesquisa = read.question()
while(pesquisa == true){
    salario = read.questionFloat("Qual salario? ")
    filhos = read.questionInt("Quantos filhos?")
    if(salario>maior_salario){
        maior_salario = salario
    }
    cont_pesq ++
    total_filhos += filhos
    total_salario += salario    
    console.log('Fazer pesquisa: 1 = Sim | 0 = Não')
pesquisa = read.question()
}
media_salario = total_salario / cont_pesq
media_filhos = total_filhos / cont_pesq
console.log('A media de salario: R$',media_salario.toFixed(2))
console.log('A media de filhos: ',media_filhos)
console.log('O maior salario: R$',maior_salario.toFixed(2))
let read = require('readline-sync')
let contador =0, Ate15 = 0, De16a30 = 0,De31a45 = 0, De46a60 = 0, maior61 = 0, pctAte15=0, pctmaior61=0
for (let i = 1; i <= 15; i++){

    Idade = read.questionInt("Informe a idade: ")
    contador +=1
    if(Idade <=15){
    Ate15 ++
    }if(Idade >=16 && Idade <=30){
        De16a30 ++
    }if(Idade >=31 && Idade <=45){
        De31a45 ++
    }if(Idade >=46 && Idade <=60){
        De46a60 ++
    }if(Idade >61){
        Acima61 ++
    }         
 }
pctAte15 = (Ate15 / contador)*100
pctmaior61 = (maior61 / contador)*100
 console.log('Total com idade ate 15 anos:', Ate15)
 console.log('Total com idade de 16 a 30 anos:', De16a30)
 console.log('Total com idade de 31 a 45 anos:', De31a45)
 console.log('Total com idade de 46 a 60 anos:', De46a60)
 console.log('Total com idade acima de 61 anos:', maior61)
 console.log('A porcentagem ate 15 anos: ',pctAte15,'%')
 console.log('A porcentagem acima de 61 anos: ',pctmaior61,'%')
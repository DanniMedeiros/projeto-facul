let read = require('readline-sync')
let escolha = 0, novo_paciente, pacientes = [], atender_paciente="", paciente_atendimento, urgencia
do
{
    for (let i = 0;i < pacientes.length; i ++)
    {
        console.log(i + 1, "-", pacientes[i])
    }

    console.log("{1} Inclua paciente,{2} Atender paciente, {3} Inclua urgencia, {4} Finalizar")
    escolha = read.questionInt("Escolha uma das alternativas: ")

    
    switch(escolha)
    {
        case 1:
        
            novo_paciente = read.question("Qual o nome do paciente?:")
            pacientes.push(novo_paciente)

        break
        
        case 2:
        
            if(pacientes == 0)
            {
                atender_paciente = read.question("Qual o nome do paciente? ")
                paciente_atendimento = atender
            }
            else
            {
                paciente_atendimento = pacientes
                pacientes.shift()
            }
            
        break
        
        case 3:
        
                urgencia = read.question("Qual o nome do paciente com urgencia? ")
                
            if(paciente_atendimento == 0)
            {
                paciente_atendimento = urgencia
            }
            else
            {
                pacientes.unshift(urgencia)
            }

        break
        
    }
}
while(escolha<4)
const readline = require('readline-sync')

do{
    let soma = 0
    let situacao = ""
    const nome = readline.question("Nome: ")
    
    for(let c = 0; c < 4; c++){
        let nota = readline.questionFloat(`Nota ${c + 1}: `)
        soma += nota
    }
    let media = soma / 4
    
    if(media >= 7){
        situacao = "Aprovado"
    } else if(media >= 4){
        situacao = "Recuperação"
    } else{
        situacao = "Reprovado"
    }
    
    console.clear()
    
    let aluno = {
        nome: nome,
         media:media, 
         situacao:situacao}
    
    console.table(aluno)

    var continuar = readline.questionInt("Quer continuar: [1] - SIM\n[2] - NAO")

}while(continuar == 1)



 

// console.table(`Boletim \nNome: ${nome}\n Media: ${media}\nSituacao: ${situacao}  `)

 

 

// do{

//     let nota = readline.questionFloat(`Nota ${c + 1}: `)

//     c++

// }while(c < 4)

 

 

// while(c < 4){

//     let nota = readline.questionFloat(`Nota ${c + 1}: `)

//     c++

// }

 
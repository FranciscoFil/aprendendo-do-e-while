const readline = require("readline-sync")

let numero = readline.questionInt("Numero: ")

while(numero < 0 || numero > 10){
    numero = readline.questionInt("Numero invalido! O numero deve ser entre 0 e 10: ")
}

console.log("Continue o codigo")
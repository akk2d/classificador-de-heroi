let nameXp = ["FyeBwoii", 10002];
let classificador = ""

if(nameXp[1] <= 1000){
     classificador = "Ferro"
}
else if(nameXp[1] >= 1001 && nameXp[1] <= 2000){
    classificador = "Bronze"
}
else if (nameXp[1] >= 2001 && nameXp[1] <= 5000){
    classificador = "Prata"
}
else if (nameXp[1] >= 5001 && nameXp[1] <= 7000){
    classificador = "Ouro"
}
else if (nameXp[1] >= 7001 && nameXp[1] <= 8000){
    classificador = "Platina"
}
else if (nameXp[1] >= 8001 && nameXp[1] <= 9000){
    classificador = "Ascendente"
}
else if (nameXp[1] >= 9001 && nameXp[1] <= 10000){
    classificador = "Imortal"
}
else if (nameXp[1] >= 10001){
    classificador = "Radiante"
}

console.log("O Herói de nome " + nameXp[0] + " está no nível " + classificador + " e tem o total de " + nameXp[1] + "XP")
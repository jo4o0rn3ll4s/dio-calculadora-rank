function calcRank(nome,vitoria, derrota){
  let saldo = vitoria - derrota
  let classe = classifica(saldo)
  
  console.log(`O Herói ${nome} tem de saldo de ${saldo} está no nível de ${classe}`)
}

function classifica(valor){
  let nivel
  
  if(valor <= 10) nivel = "ferro"
  else if(valor <= 20) nivel = "bronze"
  else if(valor <= 50) nivel = "prata"
  else if(valor <= 70) nivel = "ouro"
  else if(valor <= 80) nivel = "platina"
  else if(valor <= 90) nivel = "ascendente"
  else if(valor <= 100) nivel = "imortal"
  else nivel = "radiante"

  return nivel
}

const nome_heroi = ["Hugo", "Claudio", "José" , "Mario"  , "Joana" , "Maria"];
const xp_heroi   = [[23,7], [49, 12] , [8, 17], [157, 38], [83, 22], [57, 23]]; //vitórias | derrotas

for(let i = 0; i < nome_heroi.length; i++){
  calcRank(nome_heroi[i],xp_heroi[i][0],xp_heroi[i][1])
}

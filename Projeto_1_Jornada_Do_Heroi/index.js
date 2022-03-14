console.clear();

const prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome?");

const titulo = "---------------------------Sobrevivente Perdido-------------------------------";

console.log();
console.log(titulo);
console.log();

//Introdução a jornada.

console.log(`Olá Sobrevivente ${nome}. \nSeja bem-vindo ao Planeta Titã. \nVocê está prestes a entra em nosso paraíso, após uma longa e árdua jornada naquilo que chamávamos de planeta, a Terra. \nAntes dele ser invadido pelos agentes da  Atech. \nUma inteligencia artificial conquistadora de mundos. \nTivemos que evacuar nosso amado planeta as pressas. \nMas infelizmente não conseguimos evacuar todos a tempo. Muitos morreram e foram poucos os que conseguiram ser resgatados. \nOs que chegarem até aqui terão que se mostrar dignos de estar em Titã, pela honra daqueles que morreram e para definir seu lugar de trabalho dentro de Titã. \nVocê está pronto? \nVamos começar.`);

//Perguntas ao herói

const pergunta_1 = prompt("Lutou contra os agentes da  Atech? ").toLowerCase()
const pergunta_2 = prompt("Conseguiu uma planta da Central da Atech? ").toLowerCase().trim()
const pergunta_3 = prompt("Destruiu uma das bases da  Atech? ").toLowerCase().trim()
const pergunta_4 = prompt("Não esperou para ser resgatado e roubou uma nave inimiga? ").toLowerCase()
const pergunta_5 = prompt("Trouxe pelo menos um sobrevivente? ").toLowerCase()


//Lógica da Classificação

let quantidades_de_sins = [];
let respostas = [pergunta_1, pergunta_2, pergunta_3, pergunta_4, pergunta_5];
let respostas_desejada = "sim";
let comecar_por = respostas.indexOf(respostas_desejada);

while (comecar_por != -1) {
    quantidades_de_sins.push(comecar_por);
    comecar_por = respostas.indexOf(respostas_desejada, comecar_por + 1);
} 

if(quantidades_de_sins.length >4){
    console.log(`Parabéns Herói ${nome}!!! Fará parte do conselho. Vamos, toda Titã está lhe esperando`)
}

else if((quantidades_de_sins.length === 1) || (quantidades_de_sins.length === 2)) {
    console.log("Você não realizou muitos feitos. Mas poderá entra. Irá trablhar nas minas de energia!!")
}

else if(quantidades_de_sins.length > 2 ) {
    console.log("Poderá entrar. Mas não terá um lugar de destaque. Irá para a plantação!!")
}

else if(quantidades_de_sins.length > 3 ) {
    console.log("Por pouco você não foi para a plantação. Poderá escolher um de nossos setores coordenar!!")
}

else {
    console.log("Você falhou miseravelmente. Logo, não é digno de entrar em Titã!!")
}



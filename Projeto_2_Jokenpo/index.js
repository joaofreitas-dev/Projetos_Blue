console.clear()

const prompt = require("prompt-sync")();

let elementos_jokenpo = ["pedra", "papel", "tesoura"]

let nome_jogador = prompt("Seja bem-vindo, vamos jogar Jokenpô?. Digite seu nome. ");

console.log()


let jogarNovamente;
let voceGanhou = 0;
let pcGanhou = 0;
let escolhaDojogador;
let escolhaDopc;

let numero_rodadas;

do { numero_rodadas = +prompt(`Certo ${nome_jogador}. Quantas rodadas a gente vai jogar? `);
console.log()

for(let i = 1; i <= numero_rodadas; i++){

escolhaDopc = elementos_jokenpo[Math.floor(Math.random() * elementos_jokenpo.length)];
    

escolhaDojogador = prompt(`${nome_jogador}, escolha pedra, papel ou tesoura. `).toLowerCase();
    console.log(`Você escolheu ${escolhaDojogador}.`);
    console.log(`O PC escolheu ${escolhaDopc}.`) ;
    console.log();
    

 if (escolhaDojogador === "pedra" && escolhaDopc === "tesoura"){
        console.log("PARABÉNS!!! Você ganhou essa rodada.")
        voceGanhou += 1
        console.log();

    }
    
if (escolhaDojogador === "papel" && escolhaDopc === "pedra"){
        console.log("PARABÉNS!!! Você ganhou essa rodada.")
        voceGanhou++
        console.log();

    }
    
if (escolhaDojogador === "tesoura" && escolhaDopc === "papel"){
        console.log("PARABÉNS!!! Você ganhou essa rodada.")
        voceGanhou++
        console.log();

    }
    
if (escolhaDojogador === "pedra" && escolhaDopc === "papel"){
        console.log("AHH!!! Você perdeu essa rodada. :(")
        pcGanhou++
        console.log();

    }
    
if (escolhaDojogador === "tesoura" && escolhaDopc === "pedra"){
        console.log("AHH!!! Você perdeu essa rodada. :(")
        pcGanhou++
        console.log();

    }
    
if (escolhaDojogador === "papel" && escolhaDopc === "tesoura"){
        console.log("AHH!!! Você perdeu essa rodada. :(")
        pcGanhou++
        console.log();
        
    }

if (escolhaDojogador === escolhaDopc){
    console.log("Rodada empatada")
    console.log();
}

    

}

console.log(`Você ganhou ${voceGanhou} de ${numero_rodadas} rodadas e o Pc ganhou ${pcGanhou} de ${numero_rodadas} rodadas`)
console.log()


if(voceGanhou > pcGanhou){
    console.log("Você foi o grande campeão :)")
    jogarNovamente = prompt("Deseja conceder um revanche ao perdedor? ")
    console.log()


} else if (voceGanhou === pcGanhou) {
    console.log("Que legal. Você e o PC empatarão. Assim ninguém fica triste.")
    jogarNovamente = prompt("Deseja desempatar? ")
    console.log()
}


else {
    console.log("O PC foi o grande campeão ")
    jogarNovamente = prompt("Deseja uma revanche? Perdedor. :)  ")
    console.log()
}


if(jogarNovamente !== "sim"){
    console.log(`Até logo então ${nome_jogador}, foi um prazer jogar com você!!!`)
    console.log()
}

} while(jogarNovamente === "sim") 


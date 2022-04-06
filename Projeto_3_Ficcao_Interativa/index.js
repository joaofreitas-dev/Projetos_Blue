//Bibliotecas usadas e limpar terminal.
console.clear()
const prompt = require("prompt-sync")();

//Gerar nome do personagem
function gerarNome() {
    let preFixos = ["MICRON-"];
    const randon = Math.floor(Math.random() * 165);
    let nome = preFixos[Math.floor(Math.random() * preFixos.length)];
    let nome2 = nome + randon;
    return nome2;
}

let jogarNovamente;
let nomePersonagem = gerarNome();
do{
//Personagem
let personagem = {
    nome: nomePersonagem,
    energia: 5500,
    saude: 100,
    kitSaude: 3,

    gastarEnergia: function(energiaGasta) {
        this.energia -= energiaGasta;
        
        if(this.energia < 1000){
            console.log(`Sua energia está ficando baixa de mais. Sua saúde está diminuindo. Por favor, descanse um pouco ou coma algo.`)
            this.saude -= 15;
        } else {
            console.log(`Sua energia diminuiu para ${this.energia} pontos.`)
        }
    },

    reporEnergia: function(energiaGanha){
        this.energia += energiaGanha;
        console.log(`Sua energia subiu para ${this.energia} pontos.`)
        
    },

    monitorDesaude: function(){
        if(this.saude < 25){
            console.log("Sua saúde está muita baixa")
        } else if(this.saude >= 25 && this.saude <= 50){
            console.log("Sua saúde está razoavel, mas requer cuidados.")
        } else {console.log("Sua saúde está boa.")}
    },

    reporSaude: function(maisSaude){
        this.saude += maisSaude;
        this.kitSaude -= 1;
        
    }, 

    verificarStatus: function(){
        if(this.saude === 0 || this.energia <= 0){
            return true        

        } 
    },

} 

//Controle de tempo
let relogio = {
    hora: 8,
    minuto: 30,
    dia: 1,

    passaTempo: function(horas, minutos) {
        this.hora += horas;
        this.minuto += minutos;
        if (this.hora >= 24) {
            this.hora -= 24;
            this.dia += 1;
        }
        if (this.minuto >= 60) {
            this.minuto -= 60;
            this.hora += 1;
        }
    },

    exibeTempo: function() {
        console.log(`Agora são ${this.hora}:${this.minuto} do dia ${this.dia}.`)
    }
}

//Controle de distancia


let geolocalizador = {
    distanciaDoponto: 330,
    kmsPercorridos: 0,
    kmsApercorrer: 0,


    passaKms: function(kms) {
        this.kmsPercorridos += kms;
        this.kmsApercorrer = (this.distanciaDoponto - this.kmsPercorridos);
        if (this.kmsPercorridos > this.distanciaDoponto){
            this.kmsApercorrer -= 330
        }
    },

    exibirKmspercorridos: function() {
        if (this.kmsPercorridos < 2) {
            console.log(`Você andou ${geolocalizador.kmsPercorridos} quilômetro e está à ${geolocalizador.kmsApercorrer} Km do ponto de resgate.\n`)
        } else {
            console.log(`Você andou ${geolocalizador.kmsPercorridos} quilômetros e está à ${geolocalizador.kmsApercorrer} Km do ponto de resgate.\n`)
        }
    },
}

//Apresentação da história
let intro = `Olá ${personagem.nome}.

O Planeta Terra foi invadido por uma inteligencial artificial que chamamos de Atech. Ela enviou drones com o objetivo de nos exterminar. Tivemos que elaborar um plano de evacuação de imediato, encontramos um planeta chamado Titã, que fica à 1,2 milhão de quilômetros da Terra. Infelizmente não conseguimos evacuar a todos de um só vez, muitos morreram durante a  espera, por isso criamos os CEH, Centros de Espera em Hipersono, em locais estratégicos, sendo 140 espalhados pela terra. 

Se você estiver vendo essa  mensagem, provavelmente sua base foi atacada e cortaram as fontes de energia das câmara de hipersono. Pela falta  de energia, o modo hipersono foi desativado e você está em ricos. Você precisa sair o quanto antes da base e se dirigir a ponto de resgate mais próximo.

Ao lado da sua câmara tem um kit de sobrevivência com um monitor de saúde, um geolocalizador, um kit com suprimentos, kit saúde e algumas ferramentas.

A próxima nave de resgate chegará em 21 dias. \n`;

console.log(intro);
console.log(`Procurando ponto de resgate mais próximo.\n`);
prompt(`Pressione enter para continuar. `);
console.clear();

//Ambiente de jogo
console.clear();

 

prompt(`Encontrei 1 ponto de resgate próximo e seguro.
O ponto de resgate está à distância de 330 Km. É o percurso mais demorado, entretanto o mais seguro.\n
Pressione enter para continuar. `);
console.clear();



//Ponto de Resgate


for(let i; relogio.dia < 21; i++ ){ 
    console.log(`\n`)
    relogio.exibeTempo();
   
    //Virificar status
let status = personagem.verificarStatus()

if(status === true){
    console.log()
    console.log("Você morrreu!")
    console.log()
    break;
} else if(relogio.dia === 21 && geolocalizador.kmsPercorridos < geolocalizador.distanciaDoponto){
    console.log("Você não chegou a tempo, a nave de resgate acabou de sair.")
    break;
}


    //Informações para o geolocalizador
    let escolhaKms;
    let escolhaDousuario;
    
    //Menu de escolhas
    console.log(`
O que deseja fazer agora?
    
    1 - Caminhar.
    2 - Correr.
    3 - Descansar.
    4 - Preparar abrigo.
    5 - Monitor de saúde.\n`);


    escolhaDousuario = +prompt(`Digite o número da opção desejada: > `);
    //Escolha caminhar
    
    if (escolhaDousuario === 1) {
        console.clear()
        console.log(`\n`)
        console.log(`Escolha quantos quilômetros deseja caminhar:

1 - 1 Km  - Levará 12 minutos. Terá 48 pontos de energia a menos.
2 - 5 Km's - Levará 1 horas. Terá 240 pontos de energia a menos.
3 - 10 Km's - Levará 2 horas. Terá 480 pontos de energia a menos.
4 - 15 Km's - Levará 3 horas. Terá 720 pontos de energia a menos.
5 - 20 Km's - Levará 4 horas. Terá 960 pontos de energia a menos.
`);
        escolhaKms = +prompt(`Digite o número da opção: > `);
        

        if (escolhaKms === 1) {
            console.clear();
            geolocalizador.passaKms(1);
            geolocalizador.exibirKmspercorridos();
            personagem.gastarEnergia(48);
            relogio.passaTempo(0, 12);
            
        } else if (escolhaKms === 2) {
            console.clear();
            geolocalizador.passaKms(5);
            geolocalizador.exibirKmspercorridos();
            personagem.gastarEnergia(240);
            relogio.passaTempo(1, 0);

        } else if (escolhaKms === 3) {
            console.clear();
            geolocalizador.passaKms(10);
            geolocalizador.exibirKmspercorridos();
            personagem.gastarEnergia(480);
            relogio.passaTempo(2, 0);

        } else if (escolhaKms === 4) {
            console.clear();
            geolocalizador.passaKms(15);
            geolocalizador.exibirKmspercorridos();
            personagem.gastarEnergia(720);
            relogio.passaTempo(3, 0);

        } else if (escolhaKms === 5) {
            console.clear();
            geolocalizador.passaKms(20);
            geolocalizador.exibirKmspercorridos(); 
            personagem.gastarEnergia(960);
            relogio.passaTempo(4, 0);
        }        

    } //Escolha correr
    else if (escolhaDousuario === 2){
        console.clear()
        console.log(`\n`)
        console.log(`Escolha quantos quilômetros deseja correr:

1 - 1 Km  - Levará 6 minutos. Terá 96 pontos de energia a menos.
2 - 10 Km's - Levará 30 minutos. Terá 480 pontos de energia a menos.
3 - 20 Km's - Levará 2 horas. Terá 1920 pontos de energia a menos.
`);
        escolhaKms = +prompt(`Digite o número da opção: > `);
if(escolhaKms === 1){
            console.clear();
            geolocalizador.passaKms(1);
            geolocalizador.exibirKmspercorridos(); 
            personagem.gastarEnergia(96);
            relogio.passaTempo(0, 6);

} else if(escolhaKms === 2){
            console.clear();
            geolocalizador.passaKms(10);
            geolocalizador.exibirKmspercorridos(); 
            personagem.gastarEnergia(0, 30);
            relogio.passaTempo(2, 0);

} else if(escolhaKms === 3){
            console.clear();
            geolocalizador.passaKms(20);
            geolocalizador.exibirKmspercorridos(); 
            personagem.gastarEnergia(1920);
            relogio.passaTempo(2, 0);

} else {
    console.clear()
    console.log(`\n`)
    console.log(`Escolha quantos quilômetros deseja correr:

1 - 1 Km  - Levará 6 minutos. Terá 96 pontos de energia a menos.
2 - 10 Km's - Levará 30 minutos. Terá 480 pontos de energia a menos.
3 - 20 Km's - Levará 2 horas. Terá 1920 pontos de energia a menos.
`);
    escolhaKms = +prompt(`Digite uma opção válida: > `);
}
     

    
        }//Escolha descansar
        else if(escolhaDousuario === 3){
            console.log(`Escolha qual será tempo de descanso:\n 
            1 - Descanso rápido. Levará 2 horas e 30 minutos. Terá 1500 pontos de enrgia.
            2 - Descanso longo. Levará 8 horas. Terá 5000 pontos de enrgia.
            `)
            let escolhaDescanco = +prompt(`Digite o número da opção desejada: > `)

            if (escolhaDescanco === 1){
                console.clear();
                personagem.reporEnergia(1500);
                relogio.passaTempo(2, 30);

            } else if(escolhaDescanco === 2){
                console.clear();
                personagem.reporEnergia(5000);
                relogio.passaTempo(8, 0);
            } else {console.log(`Escolha qual será tempo de descanso:\n 
            1 - Descanso rápido. Levará 2 horas e 30 minutos. Terá 1500 pontos de enrgia.
            2 - Descanso longo. Levará 8 horas. Terá 5000 pontos de enrgia.
            `)
            escolhaDescanco = +prompt(`Digite o número da opção desejada: > `)}
        } //Escolha prepara abrigo
        else if(escolhaDousuario === 4){
            console.clear()
            console.log("Ok!")
            relogio.passaTempo(1, 0)
            console.log("Abrigo pronto");
            personagem.gastarEnergia(100);
        }
        //Escolha monitor de saude
        else if(escolhaDousuario === 5){
            personagem.monitorDesaude()
            console.log("Deseja usa um kit saúde? ")
            let escolhaSaude = prompt("> ").toLowerCase()
            if(escolhaSaude === "sim"){
                personagem.reporSaude(25)
                console.log("Sua saúde foi reposta.")
            } else {
            prompt(`OK!
            Pressione enter para fechar o monitor de saúde`)}
        }
    
    }
    

    jogarNovamente = prompt("Deseja jogar novamente? > ")
    if(jogarNovamente !== "sim"){
        console.log(`Ok!
        Obrigado por jogar.
        `)
    }
} while(jogarNovamente === "sim")

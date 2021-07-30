
let numeroDeCartas; 

let imagens = ["cartaFrente1", "cartaFrente1", "cartaFrente2", "cartaFrente2", "cartaFrente3", "cartaFrente3", "cartaFrente4", "cartaFrente4", "cartaFrente5", "cartaFrente5", "cartaFrente6", "cartaFrente6", "cartaFrente7", "cartaFrente7"];

let imagensSelecionadas = [];


function quantasCartasQuerJogar(){ 
    numeroDeCartas = Number(prompt("Olá!! Com quantas cartas quer jogar? Max: 14 cartas"));  
    ValidarNumeroDeCartas();
}

quantasCartasQuerJogar();

function ValidarNumeroDeCartas(){
    if ((!Number(numeroDeCartas)) || (14 < numeroDeCartas) || (numeroDeCartas < 4) || (numeroDeCartas % 2 !== 0)){
        numeroDeCartas = prompt("Você deve escolher um número par entre 4 e 14");
        ValidarNumeroDeCartas();
    }
    darAsCartas();
}

function darAsCartas(){

    let container = document.querySelector(".container");
    
    for (let i = 1; i <= numeroDeCartas; i++) {  
  container.innerHTML += `<div onclick="selecionarCarta(this)" id="cartaNumero${i}" class="carta cartaCostas"></div>`
}
pegarImagens();
}

function pegarImagens(){

    for (let i=0; i<numeroDeCartas; i++) {
        let pegarImagem = imagens[i];
        imagensSelecionadas.push(pegarImagem);
}
embaralharArray()
}

function embaralharArray(){

    imagensSelecionadas.sort(comparador);
//sort é usada para ordenar de acordo com a funçao
    
    //sort é usada para ordenar de acordo com a funçao
}

function comparador() { 
	return Math.random() - 0.5;
}

// function inserirClasseNasCartas(){
//     for (let i = 1; i <= numeroDeCartas; i++) {
//     const element = document.getElementById("cartaNumero" + i);
//     element.classList.add(imagensSelecionadas[i-1]);
//     }
// }

// function selecionarCarta(carta){
//     let nomeDaId = (carta.id);
//     nomeDaId = nomeDaId.replace('cartaNumero',' ');
//     carta.classList.add(imagensSelecionadas[nomeDaId-1]);
//     // carta.classList.add(imagensSelecionadas);
// }
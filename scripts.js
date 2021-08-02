let ePrimeiraCarta = true;
let primeiraCarta, segundaCarta;
let numeroDeCartas;
let acabouJogo = 0;
let contadorDeCliques=0;
const imagens = ["cartaFrente1", "cartaFrente1", "cartaFrente2", "cartaFrente2", "cartaFrente3", "cartaFrente3", "cartaFrente4", "cartaFrente4", "cartaFrente5", "cartaFrente5", "cartaFrente6", "cartaFrente6", "cartaFrente7", "cartaFrente7"];
const imagensSelecionadas = [];

function quantasCartasQuerJogar(){ 
    numeroDeCartas = Number(prompt("Olá!! Com quantas cartas quer jogar? Max: 14 cartas"));  
    ValidarNumeroDeCartas();
}

quantasCartasQuerJogar();

function ValidarNumeroDeCartas(){
    if ((!Number(numeroDeCartas)) || (14 < numeroDeCartas) || (numeroDeCartas < 4) || (numeroDeCartas % 2 !== 0)){
        alert("Você deve escolher um número par entre 4 e 14");
        quantasCartasQuerJogar();
        numeroDeCartas=0; //rever o comportamento disso 
    }
    darAsCartas();
}

function darAsCartas(){
    const container = document.querySelector(".container");
    for (let i = 1; i <= numeroDeCartas; i++) {  
  container.innerHTML += `<div onclick="validarClique(this)" id="cartaNumero${i}" class="carta cartaCostas"></div>`
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
}

function comparador() { 
	return Math.random() - 0.5;
}

function validarClique(carta){
    if (carta.classList.length !== 3){
        selecionarCarta(carta);
    }
}

function selecionarCarta(carta){
    let nomeDaId = (carta.id);
    nomeDaId = nomeDaId.replace('cartaNumero',' ');
    carta.classList.add(imagensSelecionadas[nomeDaId-1]);
    //DEVE ESPERAR AQUI
    manterViradaOuDesvirarCarta(carta);
}
//-------------------------------------


//TIRAR DUVIDA COM NIVEA
// function desativarOnClick(){
//     if (ePrimeiraCarta === false){
//     let desativarBotao = document.querySelector("onclick")
//     desativarBotao.onclick = null;
//     }else(ePrimeiraCarta === true){
//     desativarBotao.onclick = selecionarCarta(this);
//     }
// }

//funçao pra ser dividida em varias menores
function manterViradaOuDesvirarCarta(carta){
    setTimeout(function () {
        
    if (ePrimeiraCarta){
        contadorDeCliques++
        primeiraCarta = carta
        ePrimeiraCarta = false;
    } else {
        
        segundaCarta = carta
        if(primeiraCarta.classList[2] !== segundaCarta.classList[2]){
            segundaCarta.classList = "carta cartaCostas";
            primeiraCarta.classList = "carta cartaCostas";
        
        } else {
            acabouJogo++
            if(numeroDeCartas/2 === acabouJogo){
                alert("Você ganhou em " + contadorDeCliques + " jogadas!");
                
                const AparecerBotao = document.querySelector(".esconder");
                AparecerBotao.classList.remove("esconder");
                const btn = document.querySelector("#refresh");
                btn.addEventListener("click", function() {
                location.reload();
                });        
            }        
        }
        ePrimeiraCarta = true 
    }
}, 1000);
}


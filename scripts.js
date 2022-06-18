const listaDeCartas = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"];

let contadorDeCartas;
do {
    contadorDeCartas = Number(prompt("Digite o número de cartas (de 4 a 14 cartas, deve ser par):"));
}while((contadorDeCartas < 4 || contadorDeCartas > 14) && contadorDeCartas%2 == 0);

function comparador() { 
	return Math.random() - 0.5; 
}

//PARES DE CARTAS--------------------------------

let listaJogo = [];
for (let i = 0; i < contadorDeCartas/2; i++){
    listaJogo.push(listaDeCartas[i]);
    listaJogo.push(listaDeCartas[i]);
}
listaJogo.sort(comparador);

//-----------------------------------------------

//INSERCAO-----------------------------------------------------------

const jogo = document.querySelector(".game-container");
for (let i = 0; i < listaJogo.length; i++){
    jogo.innerHTML += 
        `<div class="carta" onclick="descobreCarta(this)">
            <div class="frente face">
                <img src="./imagens/front.png" alt="">
            </div>
            <div class="fundo face">
                <img src="./imagens/${listaJogo[i]}.gif" alt="">
            </div>
         </div>
        `
}

//-------------------------------------------------------------------

//JOGO---------------------------------------------------------------

let paresDescobertos = 0;
let cartaAnterior = null;
let cartasViradas = 0;
let contadorDeJogadas = 0;

function nulificaCartaAnterior(){
    cartaAnterior = null;
}

function giraCarta(carta) {
    carta.querySelector(".fundo").style.transform = "rotateY(0deg)";
    carta.querySelector(".frente").style.transform = "rotateY(-180deg)";
    cartasViradas++;
    contadorDeJogadas++;
}

function desGiraCarta(carta) {
    carta.querySelector(".fundo").style.transform = "rotateY(-180deg)";
    carta.querySelector(".frente").style.transform = "rotateY(0deg)";
    cartasViradas--;
}

function descobreCarta(carta) {
    let cartaEscolhida = carta;
    if (cartasViradas == 0){
        giraCarta(cartaEscolhida);
        cartaAnterior = cartaEscolhida;
    }
    else if (cartasViradas == 1){
        giraCarta(cartaEscolhida);

        if (String(cartaEscolhida.querySelector(".fundo").innerHTML) !== 
        String(cartaAnterior.querySelector(".fundo").innerHTML)){
            setTimeout(() => {desGiraCarta(cartaAnterior)}, 1000);
            setTimeout(() => {desGiraCarta(cartaEscolhida)}, 1000);
            }
        else {
            paresDescobertos ++;
            cartasViradas = 0;
        }
    }
    
    if (paresDescobertos == (contadorDeCartas/2)){
        const alerta = "Você ganhou em " + contadorDeJogadas + " jogadas";
        setTimeout(() => {alert(alerta)}, 1000);
    }
}

//------------------------------------------


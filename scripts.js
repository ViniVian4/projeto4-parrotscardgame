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
        `<div class="carta ${listaJogo[i]}" onclick="descobreCarta(this)">
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

function giraCarta(carta) {
    carta.querySelector(".fundo").style.transform = "rotateY(0deg)";
    carta.querySelector(".frente").style.transform = "rotateY(-180deg)";
}

function desGiraCarta(carta) {
    carta.querySelector(".fundo").style.transform = "rotateY(-180deg)";
    carta.querySelector(".frente").style.transform = "rotateY(0deg)";
}

function descobreCarta(carta) {
    const cartaEscolhida = carta;
    if (cartaAnterior == null){
        giraCarta(cartaEscolhida);
        cartaAnterior = carta;
    }
    else {
        giraCarta(cartaEscolhida);
        cartaAnterior = carta;
        setTimeout(desGiraCarta(carta), 99000);
        desGiraCarta(cartaEscolhida);
    }    
}

//------------------------------------------


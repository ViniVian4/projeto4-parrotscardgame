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

//INSERCAO------------------

const jogo = document.querySelector(".game-container");
for (let i = 0; i < listaJogo.length; i++){
    jogo.innerHTML += 
        `<div class="carta" onclick="giraCarta(this)">
            <div class="frente face">
                <img src="./imagens/front.png" alt="">
            </div>
            <div class="fundo face">
                <img src="./imagens/${listaJogo[i]}.gif" alt="">
            </div>
         </div>
        `
}

//--------------------------

function giraCarta(carta) {
    const cartaEscolhida = carta;
    cartaEscolhida.querySelector(".fundo").style.transform = "rotateY(0deg)";
    cartaEscolhida.querySelector(".frente").style.transform = "rotateY(-180deg)";
}
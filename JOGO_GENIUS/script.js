//sequencia aleatoria com que cada div será
//acionada
let order = [];

//Sequencia de cliques
let clickOrder = [];

//Pontos
let score = 0;


//0 - Verde
//1 - Vermelho
//2 - Amarelo
//3 - Azul

//Variaveis do audio:
const somGreen=document.getElementById("somGreen");
const somBlue=document.getElementById("somBlue");
const somRed=document.getElementById("somRed");
const somYellow=document.getElementById("somYellow");





//Definição das classes do CSS (como no CSS)
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Gerar numeros entre 0 e 3 e representar as cores diferentes
let shuffleOrder = () => {

    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;

    clickOrder = [];

    for (let i in order){

        let elementColor = createColorElement(order[i]);

        //Transformando a cor da div para guiar o jogador
        lightColor(elementColor, Number(i) + 1);

        }
}

//Acende a proxima cor
let lightColor = (element, number) => {

    number = number * 500;

    setTimeout(() => {

        //Adionando classe CSS .selected
        element.classList.add('selected');

    }, number - 250);

    setTimeout(() => {

        element.classList.remove('selected');

    });
}

//Comparando a ordem de ação do usuario, com a ordem 
//criada pelo algoritmo do jogo

let checkOrder = () => {
    for(let i in clickOrder) {

        if(clickOrder[i] != order[i]) {

            gameOver();
            break;

        }
    }

    if(clickOrder.length == order.length) {

        alert(`Score: ${score}\nYou got it! Starting next level...`);

        nextLevel();

    }
}


//Funcao para verificar o clique do jogador

let click = (color) => {
    clickOrder[clickOrder.length] = color;

    createColorElement(color).classList.add('selected');

    setTimeout(() => {

        createColorElement(color).classList.remove('selected');

        checkOrder();

    },250);
  
}


//Funcao que retorna a cor

let createColorElement = (color) => {

    if (color == 0) {
        somGreen.play();
        return green;
    } else if (color == 1) {
        somRed.play();
        return red;
    } else if (color == 2) {
        somYellow.play();
        return yellow;
    } else if (color == 3) {
        somBlue.play();
        return blue;
    }
}

//Funcao para proximo nivel do jogo
let nextLevel = () => {

    score++;
    shuffleOrder();
}


//Funcao Game Over
let gameOver = () => {

    alert(`Score: ${score}! \n You Lose! \n Try Again?`);

    //Zerando sequencia criada pela aplicacao
    //Zerando sequencia clicada pelo usuario
    order = [];
    clickOrder = [];

    playGame();

}

//Funcao de inicio do jogo
let playGame = () => {
    
    alert('Welcome do GENIUS! Starting new game!');
    score = 0;

    nextLevel();

}

//Capturando os clicks
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Chamar funcao playGame para iniciar
//o jogo no carregamento da pagina
playGame();
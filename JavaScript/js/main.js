
//definindo string
var nome = "Rodrigo Gaiotto";
var frase = "Japao tem o melhor time do mundo";

//definindo numeros
var idade1 = 26;
var idade2 = 10;

//trabalhando com ARRAYs
var lista = ["apple", "banana", "orange"];

//incluindo entradas em um ARRAY
lista.push("grape");
lista.push("watermelon");


//Definindo dicionario: JSON (JavaScript Object)
var fruta = {nome:"maca", cor:"vermelha"}

//Lista de objetos
var frutas = [{nome:"maca", cor:"vermelha"},{nome:"banana", cor:"amarela"}];

//removendo ultima entrada de um ARRAY
//watermelon será removido
lista.pop();

//calculos aritmeticos
var idade = idade1 + idade2;

alert("Bem-Vindo " + nome + ", idade " + idade);


//gravando output de processamento na log do navegador
console.log( idade1 + idade );

//Trabalhando com o método / função "replace"
console.log ( frase.replace("Japao", "Brasil"));

console.log ( frase.toUpperCase());

console.log ( frase.toLowerCase());


//Imprimindo array:
console.log(lista);

console.log(lista[2]);
console.log(lista[3]);

//Imprimindo QUANTIDADE de itens na lista:
console.log(lista.length);

// Imprimindo ao contrario:
console.log(lista.reverse());

//Converter para String
console.log(lista.toString());

//Converter para String, alterando separador
console.log(lista.join(" - "));

//Imprimindo objeto
console.log(fruta);

//Imprimindo atributos de objetos:
console.log(fruta.nome);
console.log(fruta.cor);

//Imprimindo lista de objetos
console.log(frutas);

//Imprimindo nome da primeira entrada
console.log(frutas[0].nome);

//=======================================//

//Condicionais:

//var idade = 17;

var idade = prompt("Qual sua idade?");

if (idade >= 18){
    console.log("Maior de idade");
} else { 
    console.log("Menor de idade");
}


//=======================================//

var count = 0;
while (count < 6){
    console.log("saida: " + count);

    //count++;
    count = count + 1;

}


//=======================================//

var count1;

for (count1=0; count1 <=5; count1++) {

    console.log("saida do for: " + count1);

}

//=======================================//

var d = new Date();

var mes = d.getMonth()+1;


alert("Estamos no mês: " + mes);


//========================================//
//Funções

function soma(n1, n2){
    return n1 + n2;
}

//Passando os valores 5 e 10 para soma
console.log(soma(5,10));


//=============================================//

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Palmeiras", "Palmeiras", "Curintia"));


//=============================================//

function validaIdade (idade3) {

    var validar;
    if (idade3 >=18){
        validar = true;
    } else {

        validar = false;
    }

    return validar;
}

var idade3 = prompt("Qual sua idade mesmo?");

console.log(validaIdade(idade3));


//===============================================//

function clicou (){
    //alert("Obrigado por clicar");

    //Identificando elemento através do ID HTML e injetando um texto
    document.getElementById("agradecimento").innerHTML = "OBRIGADO POR CLICAR - CLIQUE AQUI NOVAMENTE";

    //verificando se o elemento está sendo reconhecido
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://www.google.com");
    window.location.href = "https://www.linkedin.com";
}

function trocar(elemento){

    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){

    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    //alert("trocar texto")
}


function load() {
    alert("Pagina Carregada");
}


function funcaoChange(elemento){
    console.log(elemento.value);

}
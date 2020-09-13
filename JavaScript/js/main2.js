//STRINGS

//Retorna o tamanho de um string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitator
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text','txeT');
console.log('\nSubstituição de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de um string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a ultima: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a ultima: ', secondToEnd);

// Retorna N characters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);


//NUMBERS
const myNumber = 12.4031;

// Transforma número para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string: ', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

// Transforma uma string and int
console.log('\nString parseada para int: ', parseInt('13.20'));


//NULL

const nullVariable = null;
console.log(typeof nullVariable);

//UNDEFINED

let undefinedVariable;
console.log('Tipo da variável', typeof undefinedVariable);

// BOOLEAN

const isActive = true;

const isAuthenticated = false;

console.log('Tipo da variavel: ', typeof isActive);


// OBJECTS
let user = {
    name: 'Rodrigo'
};

console.log(user);

// Alterando a propriedade de um objeto
// prop = propriedade
user.name = 'Outro nome 1';
console.log(user);

user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

function getProp(prop) {
    return user[prop]
}


// Criando uma propriedade
user.LastName = "Gaiotto";

// Deletando uma propriedade
delete user.name;


//FUNCOES COM OBJETOS:

const user2 = {
    name: 'Rodrigo',
    lastName: 'Gaiotto'
}

//Recupera as chaves do objeto
console.log('Propriedade do objeto user: ', Object.keys(user2));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user2));

// Retorna um array de arrays contendo [ nome_propriedade, valor_propriedade ]
console.log('\nLista de propriedades e valores: ', Object.entries(user2));

// Mergear propriedades dos objetos
Object.assign(user2, {fullName: 'Rodrigo Gaiotto'});

console.log('\nAdiciona a propriedade fullName no objeto user', user2);

console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user2, {age: 36}));

console.log(user2);

// Previne todas as alterações em um objeto

const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj apos as alteracoes: ', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Rodrigo'};
Object.seal(person);

person.name = 'Rodrigo Gaiotto';
delete person.name;
person.age = 26;

console.log('\nVariavel person apos alteracoes: ', person);



//SYMBOL

const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são unicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user3 = {
    [nameSymbol1]: 'Rodrigo',
    [nameSymbol2]: 'Outro nome',
    lastName2: 'Gaiotto'
}

console.log(user3);


// Symbols criam propriedades que não são enumberables
for (const key in user3) {
    if (user3.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user3[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user3));
console.log('Valores das propriedades do objeto user:', Object.values(user3));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user3));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user3));

// Criar um enum

const directions = {
    UP   : Symbol('UP  '),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};



// FUNCTIONS 


//ESSA FUNCAO, TEM A MESMA EXECUCAO...
function fn() {
    return 'Code here';
}

//...QUE ESTE ARROW FUNCTION
const arrowFn = () => 'Code here';

const arrowFn2 = () => {

    //Mais de uma expressão
    return 'Code here';
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);


// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);  // Executará a função fn
handleFnExecution(); // Não executara a função fn

// controlFnExec como função NORMAL
function controlFnExec2(fnParam){
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}



//==============================================//
//CONTINUAÇÃO FUNCTIONS

this.name = 'Nome no contexto de criacao'

const getNameArrowFn = () => this.name;

function getName(){
    return this.name;
}

const user4 = {
    name: 'Nome no objeto de execucao',
    getNameArrowFn,
    getName
}

console.log(user4.getNameArrowFn());
console.log(user4.getName());


//============================================//
//ARRAYS

const users = ['Rodrigo', 'Jose', 'Rafaela'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Rodrigo',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Jose',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Rafaela',
        age: 30,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('a variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr ) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});


// Filtrar array
const men = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homes: ', men);

// Retornar um novo array
//Exemplo abaixo: adicionando um atributo ao array persons
const personsWithCourse = persons.map(person => {
    person.course = 'Introducao ao JavaScript';
    return person;
});

console.log('\nPessoas com a adiçao do course: ', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);//iniciando com zero

console.log('\nSoma de idade das pessoas', totalAge);


// Juntando operações

const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);


//===================================================================//
//OPERADORES

//OPERADOR BINARIO
//syntax: operando1 operador operando2
//Ex. 1 + 1

//OPERADOR UNARIO
//syntax: operando1 operador   ou    operador operando1
//Ex. xx++    ou  ++x

//Deletar algo
delete something;

//Determinar algo
typeof something;


//Modulo (%)
//Operador binário. Retorna o inteiro restante da divisão dos dois operandos

12 % 5 // returna 2

// Incremento (++) e Decremento (--)
//++x 
//x++

//const a = ++2 //a já ira receber 3
//const b = 2++ //b vai receber 2 e depois ser incrementado

//--x
//x--

// Subtração ou Negação e Adição:

-3
+"3"    //retorna 3 - força string para numerico
+true   //retorna 1
+false  //retorna 0
-true   //retorna -1

// Exponenciação (**)

2 ** 3      // retorna 8
10 ** -1    // retorna 0.1

//Operador de agrupamento ()
2 * (3 + 2)

//Atribuição
//x = y

//Atribuição de adição
//x = x + y //ou
//x += y

//Atribuição de subtracao
//x = x - y //ou
//x -= y

//Atribuição de multiplicação
//x = x * y //ou
//x *= y 

//Atribuição de divisão
//x = x / y //ou
//x /= y 

// Atribuicao de resto
//x = x % y // ou
//x %= y 


// Igual ==
// Retorna verdadeiro caso os operandos sejam iguais. 3 == var1
//"3" == var1
//3 == '3'

//Não igual !=
//Retorna verdadeiro caso os operandos não sejam iguais. var1 != 4
//var2 != "3"

//Estritamente igual ===
// Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.
//3 === var1

//Estritamente não igual !==
//Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo
//var1 !== "3"
//3 !== '3'

//Maior que >
//Retorna verdadeiro caso o operando da esquerda seja maior que o da direita
//var2 > var1
//"12" > 2

//Maior que ou igual >=
//Retorna verdadeiro caso o operando seja maior ou igual ao da direita
//var2 >= var1
//var1 >= 3

//Menor que <
//Retorna verdadeiro caso o operando da esquerda seja menor que o da direita
//var1 < var2
//"12" < "2"

// Menor que o igual <=
// Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita
//var1 <= var2
//var2 <= 5


//===================================================================//
//TERNÁRIO
condicao ? valor1 : valor2

true ? 'foo' : 'bar'    // Retorna foo
false ? 'foo' : 'bar'   // Retorna bar


//====================================================================//
//OPERADORES LOGICOS

// AND LOGICO &&
exp1 && exp2

var a1 = true && true;      // t && t retorna true
var a2 = true && false;     // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cao";   // t && t retorna Cao
var a6 = false && "Gato";   // f && t retorna false
var a7 = "Gato" && false;   // t && f retorna false

// OU Lógico ||
exp1 || exp2 

var o1 = true || true;      // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 = true || false;     // t || f retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "Gato" || "Cao";   // t || t  retorna Gato
var o6 = false || "Gato";   // f || t retorna Gato
var o7 = "Gato" || false;   // t || f retorna Gato

// NOT Logico
!exp1

var n1 = !false;    // !t retorna false
var n2 = !false;    // !f retorna true
var n3 = !"Gato";   // !t retorna false


// True
" "
1

// False
""
0


//===================================================//
//SPREAD

var partes = ['ombro','joelhos'];
var musicas = ['cabeca', ...partes, 'e','pes'];

function fn(x, y, z){ }
var args = [0, 1, 2];
fn(...args);



//IN
// Isso, está nisso ?
something in somethingItens

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           // retorna TRUE
3 in arvores;           // retorna TRUE
6 in arvores;           //retorna FALSE
"cedro" in arvores;     //Retorna FALSE, deve-se especificar o numero DO indice, não o valor NO indice
"length" in arvores;    //retorna TRUE, pois length é uma propriedade de Array

// Objetos predefinidos
"PI" in Math;                           // retorna TRUE
var minhaString = new String("coral");
"length" in minhaString;                // retorna TRUE


// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;    //retorna TRUE
"modelo" in meucarro;   //retorna TRUE

//instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //code here
}

//=========================================================//
//==CONDICIONAIS


/*

if (condition) {

    //code

}


*/

const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {

    if(item % 2 === 0) {

        console.log(`O numero ${item} é par`);

    } else {

        console.log(`O numero ${item} é impar`);

    }
});


/*

if (condition) {
    
    // code

} else if (condition) {

    // code

}


*/


const array2 = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
array2.forEach(item => {

    if (item % 2 === 0) {

        console.log(`O numero ${item} é divisivel por 2`);

    } else if (item % 3 === 0) {

        console.log(`O numero ${item} é divisivel por 3`);

    } else if (item % 5 === 0) {

        console.log(`O numero ${item} é divisivel por 5`);

    }
});

console.log('\nif');

array2.forEach(item => {

    if(item % 2 === 0){
        console.log(`O numero ${item} é divisivel por 2`);
    }
    if(item % 3 === 0){
        console.log(`O numero ${item} é divisivel por 3`);
    }
    if(item % 5 === 0){
        console.log(`O numero ${item} é divisivel por 5`);
    }
});


/* 

switch (expressao) {
    case valor1:
        [break;]
    
    case valorN:
        [break;]

    default:
         [break;]   
}

*/

const fruit = 'pera';

switch (fruit){

    case 'banana':
        console.log('R$ 3,00 / kg');
        break;

    case 'mamao':    

    case 'pera':
        console.log('R$ 2,00 / kg');
        break;

    default:
        console.log('Produto não existe no estoque');
        break;   

}



/* 

for ([expressaoInicial]; [condicao]; [incremento])

    declaracao

*/

const array3 = ['one', 'two', 'three'];

for (let index = 0; index < array3.length; index++) {

    const element = array3[index];
    console.log(`Element #${index}: ${element}.`);
}


/* 

while (condicao)
    declaracao

*/


var nn = 0;
var xx = 0;

while ( nn < 3) {

    nn++;

    xx += nn;   // 1, 3, 6

    console.log(xx);

}

console.log(xx);



/*

do
    declaracao
while (condicao);


*/

var i = 0;

do {
    i += 1;
    console.log(i);
} while (i < 5);



let arr = [3, 5, 7];
arr.foo = "hello";

for (var i in arr) {
    console.log(i);     // logs "0", "1", "2", "foo"
}

for (var i of arr) {
    console.log(i);     // logs "3", "5", "7"
}



//=======================================================//
//===  CONTROLE DE REPETICAO

//BREAK
console.log('Exemplo da utilizacao de break');

var index1 = 0;

while(true){

    index1++;

    if (index1 > 2){
        break;
    }

    console.log(index1);
}


//CONTINUE
console.log('\nExemplo da utilização de continue');

const array4 = [1, 2, 4, 5, 6];

for (var index2 = 0; index2 < array4.length; index2++) {
    const element = array4[index2];

    if (element % 2 === 0) {
        continue;
    }

    console.log(element);
}


//=======================================================================//
//ORIENTACAO A OBJETOS - PROTOTYPE

'use strict';

const myText = 'Hello prototype!';

myText.split('');  // <- de onde vem esse "split"?

//A declaracao acima é a mesma coisa da seguinte:

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split);
// funcao split() { [native code]}


//DESTE MODO, ESSA COMPARACAO SERA VERDADEIRA:

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split); // TRUE

console.log(myText.constructor === String); //TRUE


/*

__proto__ -> prototype -> constructor

Quando declaramos:

const myText = "Hello prototype!";

Estamos dizendo que o constructor do myText é uma String e o __proto__ será igual a uma 
String.prototype

GUIA PARA HERANÇA DE CLASSE "PROTOTYPED-BASED"

Exemplo:

'use strict';

function Animal(){}

console.log(Animal.constructor);


function Aninal.constructor -> Function -> Function.prototype.constructor ->
function Object(){} -> Object.prototype = null;


 */

 'use strict';

 function Animal(){
     this.qtddePatas = 4;
 }

const cachorro = new Animal();

console.log(cachorro) = new Animal();

console.log(cachorro.qtddePatas);

/* 

new Foo(...);

O que ocorre quando usamos o NEW ?

1- Um novo objeto é criado, herdando Foo.prototype
2- A funcao construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao
novo objeto criado.
3- Caso a funcao construtora tenha um retorno explícito, sera respeitado seu return. Senão,
sera retornado o objeto criado no passo 1.

*/

//Exemplo1:

function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa ('Rodrigo')

console.log(p)

//Exemplo2:
function Pessoa(name) {
    this.name = name;

    return {
        name: 'Teste'
    };
}

const p2 = new Pessoa('Rodrigo');

console.log(p2); // Vai retornar - Teste


//Outra exemplo de heranca:

'use strict';

function Animal() {}

Animal.prototype.qtddePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtddePatas = 4;
    this.morde = morde;
}

//Cachorro é derivado do prototype de Animal
//Deste modo cachorro já tera quantidade de patas
// e movimentacao por padrao
Cachorro.prototype = Object.create(Animal);

//E também possui a propriedade adicional: latir
Cachorro.prototype.latir = function(){
    console.log('Au! Au!');
}


const pug = new Cachorro(false);
const pitbull = new Cachorro(true);


//=======================================================================//
//ORIENTACAO A OBJETOS - CLASS

//EXEMPLO USANDO PROTOTYPE:

'use strict';

function Animal(qtddePatas) {
    this.qtddePatas = qtddePatas;
}

function Cachorro(morde){
    Animal.call(this,4);

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug); // Cachorro {qtddePatas: 4, morde: false}


//MESMO EXEMPLO UTILIZANDO CLASS
//nota-se uma maior facilidade de entendimento
//utilizando EXTENDS

'use strict';

class Animal {
    constructor(qtddePatas){
        this.qtddePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 'morde';
    }
}

const pug = new Cachorro(false);

console.log(pug); //console.log(pug); // Cachorro {qtddePatas: 4, morde: morde}


//Outro exemplo de CLASSE:

class Person {
    constructor(name){
        this.name = name;
    }
}

class PessoalF extends Person {
    constructor(name,cpf) {
        super(name);
        this.cpf = cpf;
    }
}
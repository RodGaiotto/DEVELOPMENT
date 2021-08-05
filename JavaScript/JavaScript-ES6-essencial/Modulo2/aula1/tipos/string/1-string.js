//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);
//Quantidade de letras: 5

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitdor:',splittedText);
//Array com as posições separadas pelo delimitdor: [ 'Te', 'to' ]

//busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Texto', 'Outro texto');
console.log('\nSubstituindo uma palavra por um valor informado: ',replaceText);
//Substituindo uma palavra por um valor informado:  Outro texto

//retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ',lastChar);
//Última letra de uma string:  o

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ',allWithoutLastChar);
//Valor da string da primeira letra menos a última:  Text

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ',secondToEnd);
//Valor da string da segunda letra até a última:  exto

const twoCharBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são:',twoCharBeforeFirstPos);
//As duas primeiras letras são: Te

const firstCharText = 'Texto'.substr(0,1);
console.log('\nA primeira letra é:',firstCharText);
//A primeira letra é: T
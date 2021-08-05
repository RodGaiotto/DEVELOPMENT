const myNumber = 12.4032;

//transformar numero para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString);

//retorna numero com um numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com duas casa decimais:', typeof fixedTwoDecimals);

//transforma uma string em float
console.log('\nString parseada para float:', typeof parseFloat('13.22'));

//transformar uma string em int
console.log('\nString parseada para int:', typeof parseInt('13.20'));
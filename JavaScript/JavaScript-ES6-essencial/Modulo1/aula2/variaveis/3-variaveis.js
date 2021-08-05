const name = 'José Souza';

//Não podemos alterar o valor de uma constante
//name = 'Suzana'; erro

//criando objetos
const user = {
    name: 'Suzana Vieira'
};
console.log(user);

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Fabio Martins';
console.log(user);

//Não podemos fazer o objeto "apontar" para outro lugar
/*
user = {
    name: 'Suzana'
};
*/

//criando arrays
const persons = ['Flávio', 'Pedro', 'Karina'];
console.log(persons);
//[ 'Flávio', 'Pedro', 'Karina' ]

//adicionando elemento ao final da lista
persons.push('Antônio');
console.log(persons);
//[ 'Flávio', 'Pedro', 'Karina', 'Antônio' ]

//removendo primeiro elemento da lista
persons.shift();
console.log(persons);
//[ 'Pedro', 'Karina', 'Antônio' ]

//alterando o segundo elemento da lista
persons[1] = 'James';
console.log(persons);
//[ 'Pedro', 'James', 'Antônio' ]


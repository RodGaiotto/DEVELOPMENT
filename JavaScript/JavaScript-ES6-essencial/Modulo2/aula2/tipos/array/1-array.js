const users = ['Sandro', 'Pedro', 'Lucas'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
    name: 'Fabio',
    age: 35,
    gender: gender.MAN
},
{
    name: 'Pedro',
    age: 30,
    gender: gender.MAN
},
{
    name: 'Lara',
    age: 25,
    gender: gender.WOMAN
}
];
/* 
// Retornar a quantidade de itens de um array
console.log('Itens:', persons.length);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens
persons.forEach((person, index, arr) =>{
    console.log(`Nome: ${person.name} - Index: ${index}`, arr);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Nova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});
console.log('Pessoas com adição de cursos:' ,personsWithCourse); */

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('A soma das idades:', totalAge);

//Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age+= person.age;
        return age;
    }, 0);
    console.log('Juntando operações: ', totalEvenAges);
    
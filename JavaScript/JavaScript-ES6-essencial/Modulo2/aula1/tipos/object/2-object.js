/* const user = {
    name: 'Fábio',
    lastName: 'Guimaraes Neto'
} */

/* // recuperar as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user)); */

/* // mergear propriedades de objetos
Object.assign(user, {fullName: 'Fábio Guimaraes Neto'});

console.log('\nAdiciona a propriedade fullName no objeto user:', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', 
Object.assign({}, user, {age: 26})); */

/* const newObj = {
    foo: 'bar'
};
Object.freeze(newObj);
console.log('Após freeze:',newObj);

newObj.foo = 'changes';
console.log('Tentando alterar:',newObj);

delete newObj.foo;
console.log('Tentando apagar objeto:', newObj);

newObj.bar = 'foo';
console.log('Tentando criar novo obj:', newObj); */

//permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Carla'};
Object.seal(person);

person.name = 'Carla Abreu';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);


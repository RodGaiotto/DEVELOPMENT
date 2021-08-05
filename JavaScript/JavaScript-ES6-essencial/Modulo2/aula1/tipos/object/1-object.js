let user = {
    name: 'Gustavo'
};
console.log('Retorno user:', user);

//Alterando a propriedade de um objeto
user.name = "André";
console.log('Retorno user.name:', user.name);

user['name'] = 'João';
console.log('Retorno user["name"]:', user['name']);

const prop = 'name';
console.log('Retornando prop:', prop);

user[prop] = 'Maria';
console.log('Retornando user[prop]:', user[prop]);

function getProp(prop){
    return user[prop];
}

console.log(user);

//criando uma propriedade
user.lastName = 'Cabral Mendonça';

//deletando uma propriedade
delete user.name;
console.log(user);

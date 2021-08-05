const user = {
    name:'Fabio',
    lastName: 'Arantes Junior'
};

function retornarNomeCompleto(user){
    return {
        ... user,
        //obs. Template strings são envolvidas por (acentos graves) 
        //(` `) em vez de aspas simples ou duplas.
        fullName: `${user.name} ${user.lastName}`
    }
}

const userNomeCompleto = retornarNomeCompleto(user);
console.log(userNomeCompleto);

var str1 = "Amor";
var str2 = "Paixão";
var resultado = `${str1} ${str2}`;
console.log(resultado);
console.log(user);
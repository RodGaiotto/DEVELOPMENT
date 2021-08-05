function fn(){
    return ' Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here';
}

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

/* //Receber e retornar funções -- não funcionou
const controlFnExec => fnParam => {
    return allowed => {
        if (allowed) {
            fnParam();
        }
    };
}  */

const hadleFnExecution = controlFnExec(fn);

hadleFnExecution(true); //Executará a função fn
hadleFnExecution(); //Não executará a funçao fn

//controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}

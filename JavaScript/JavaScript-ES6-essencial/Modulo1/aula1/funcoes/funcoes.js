
function getName(){
    return 'Nome de Alguem';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFn(getName);

logFnResult(getName);
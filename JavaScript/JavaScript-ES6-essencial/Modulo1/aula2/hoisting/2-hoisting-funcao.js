function fn(){
    log('Hoisting de função'); //adicionando função como parametro

    function log(value){
        console.log(value); //retorna valor do parametro
    }    
}

fn();

function contador (){
    let count = 0;
    return function(){
        count++;
        console.log('*', count)
    }
}

const incrementar = contador() ;
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();

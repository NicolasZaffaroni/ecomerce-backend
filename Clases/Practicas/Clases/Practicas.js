let lista =[
    "Carne","Pollo","Pescado","Papa","Tomate"
]

function mostrarLista(lista) {
    if(!lista || !lista.length){
        console.log("La lista esta vacia !!!");
    }else {
        let resultado = "Lista de productos";
        lista.map((item)=>{
            resultado = `
            ${resultado}
            ${item}
            `;
        });
        resultado +=`
Total ${lista.length}
`;
console.log(resultado)
    }
}
mostrarLista(lista);

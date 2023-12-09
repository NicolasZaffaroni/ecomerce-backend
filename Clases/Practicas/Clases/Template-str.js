let usuario = {nombre: "nicolas", edad : 34 };



const edadFutura = usuario => usuario.edad +1 ;

let bodyV2 = ` hola ${usuario.nombre} soy jose velez el capo de la barra jejeje  tu edad va a ser ${edadFutura(usuario)} `


console.log(bodyV2);
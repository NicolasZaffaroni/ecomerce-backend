


const socket = io()

socket.emit('nuevoUsuario','hello a todos ')

socket.on('nuevoUsuario', data =>{
    console.log(data)
})
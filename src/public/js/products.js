


const socket = io()

socket.emit("message",'hello stalkers')

socket.on('messageServer', data =>{
    console.log(data)
})

socket.on('messageOthers', data =>{
    console.log(data)
})

socket.on('messageAll', data =>{
    console.log(data)
})
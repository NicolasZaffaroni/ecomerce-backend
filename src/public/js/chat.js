


const socket = io()
const chatBox = document.getElementById('chatBox')
const messageLogs  = document.getElementById('messageLogs')
const getUsername = async () =>{
try{
    const username = await Swal.fire({
        title : "Bienvenido al Chat",
        text:"Ingrese su usuario para identificarse",
        input:"text",
        icon:"success",
    })
    console.log(username.value)
}catch(error){
    console.log(error)
}

}

getUsername()


chatBox.addEventListener('keyup', e =>{
    if (e.key ==='Enter'){
        const data = chatBox.value
        chatBox.value= ''
        socket.emit('message',data)
    }
})


socket.on('messageLogs',data =>{
    let messages = ''
    data.forEach(message => {messages += `${message} <hr>` });
    console.log(data)
    messageLogs.innerHTML = messages
})




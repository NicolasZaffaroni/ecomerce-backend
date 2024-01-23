import app from './server.config.js';
import { Server } from 'socket.io';




const DEFAULT_PORT = 3030
;
const port = process.env.PORT || DEFAULT_PORT;

const chats = []


//Servidor Local 
const httpServer = app.listen(port, () => {
    console.log("Server running at port: http://localhost:" + port);
});

const io = new Server(httpServer)

io.on('connection',socket => {
    console.log(socket.id)

    socket.on('message', data =>{
    chats.push(data)

    io.emit('messageLogs',chats)
    })
})



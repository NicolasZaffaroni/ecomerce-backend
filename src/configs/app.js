import app from './server.config.js';
import { Server } from 'socket.io';




const DEFAULT_PORT = 8080;
const port = process.env.PORT || DEFAULT_PORT;


//Servidor Local 
const httpServer = app.listen(port, () => {
    console.log("Server running at port: http://localhost:" + port);
});

const io = new Server(httpServer)

io.on('connection',socket => {
    console.log(socket.id)

    socket.on('message', data =>{
        console.log(data)
    })

    socket.emit('messageServer', 'hi stalker !!')

    socket.broadcast.emit('messageOthers','hola a todos menos al principal ')

    io.emit('messageAll','hola a todos inlcuido el principal')
})



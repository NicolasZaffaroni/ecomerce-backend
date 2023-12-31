import app from './server.config.js';
import { Server } from 'socket.io';




const DEFAULT_PORT = 8088;
const port = process.env.PORT || DEFAULT_PORT;


//Servidor Local 
const httpServer = app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});

const io = new Server(httpServer)

io.on('connection',socket => {
    console.log(socket.id)
})
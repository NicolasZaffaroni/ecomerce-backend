import app from './server.config.js';




const DEFAULT_PORT = 8093;
const port = process.env.PORT || DEFAULT_PORT;


//Servidor Local 
app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});
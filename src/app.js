import app from './server.js';



const port = process.env.PORT || 3000;


//Servidor Local 
app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});
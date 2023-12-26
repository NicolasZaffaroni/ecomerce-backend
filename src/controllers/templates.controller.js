import { Router } from "express";

const router = Router();

const users = []

//FALLA STYLE CSS
router.get('/products',(req,res) => {

    res.render('products', {
        style: "/src/public/css/index.css",
        title:'Products'
    })

})


//FALLA TAREA CLASE PLANTILLAS 
router.post('/users',(req,res)=>{
    res.render('register',{
        nombre: "nombre",
        correo : "correo",
        contraseña:"contraseña"
    })

    const newUser = {
        nombre,
        correo,
        contraseña,
    };
    
    users.push(newUser);

    res.status(201).json({ payload: "user created" });
})



export default router 
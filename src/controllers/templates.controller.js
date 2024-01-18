import { Router } from "express";

const router = Router();

const users = []

//FALLA STYLE CSS
router.get('/products',(req,res) => {

    res.render('products.handlebars', {
        style: "/css/index.css",
        title:'Products'
    })

})


//FALLA TAREA CLASE PLANTILLAS 

router.post('/users',(req,res)=>{
    res.render('users.handlebars',{
        nombre: "nombre",
        correo : "correo",
        contraseña:"contraseña",
        title:'Users'
    })

    const newUser = {
        nombre,
        correo,
        contraseña,
    };
    
    users.push(newUser);

    res.status(201).json({ payload: "user created" });
    
})

router.get('/chat',(req,res)=>{
    res.render('chat.handlebars')
})

export default router 
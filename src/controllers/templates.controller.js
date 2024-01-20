import { Router } from "express";

import fs from "fs/promises";

const router = Router();

// Ruta para renderizar la página de productos
router.get('/products', (req, res) => {
    res.render('products.handlebars', {
        title: 'Products'
    });
});



router.post('/users', async (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    const newUser = {
        nombre,
        correo,
        contraseña,
    };

        // Renderizar la vista users.handlebars
        res.render('users.handlebars',
        { newUser,
        title: 'Users' });



    // Guardar el nuevo usuario en un archivo JSON
    try {
        const existingUsers = await fs.readFile('users.json', 'utf-8');
        const users = JSON.parse(existingUsers) || [];
        users.push(newUser);

        await fs.writeFile('users.json', JSON.stringify(users, null, 2));
        res.status(201).json({ payload: "Usuario creado" });
    } catch (error) {
        console.error('Error al guardar los datos del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});



// Ruta para renderizar la página de chat
router.get('/chat', (req, res) => {
    res.render('chat.handlebars');
});


export default router 
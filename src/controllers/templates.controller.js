import { Router } from "express";

const router = Router();


router.get('/products',(req,res) => {

    res.render('products', {
        style: '/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/src/public/css/index.css',
        title:'Products'
    })

})

export default router 
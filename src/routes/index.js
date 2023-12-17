import productsController from "/controllers/products.controller"
import petsController  from "/controllers/pets.controller"

const router = app =>{
    app.use('/api/products',productsController)
    app.use('/api/pets',petsController)
}  

export default router
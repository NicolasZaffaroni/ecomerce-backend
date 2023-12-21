import { Router }from "express"
import convertTonumber from "../middlewares/convert-to-number-middleware";
import uploader from "../utils/multer.util";

const router = Router()


const products =[]


//Mostrar todos los productos en servidor 
router.get('/', (req, res) => {
    res.json({ payload: products });
});

//Mostar producto especifico 
router.get('/:pid',convertTonumber, (req, res) => {

    const {pid} = req.params

    const product = products.find(product => product.id === pid)

    if(!product) 
    return res.status(404).json({error : 'Product not found'})

    res.json({ payload: product });
});



router.get('/',(req,res) => {
    const {limit} = req.query
    if(limit){
        return res.json({ products: manager.products })
    }
    } )

















    export default router
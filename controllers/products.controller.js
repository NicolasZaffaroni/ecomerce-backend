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







// Crear Nuevo producto
router.post('/',uploader.single('img'),(req,res)=>{
    
    const {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        } = req.body

        const pathFile = req.file.path

        const newProduct = {

        id:math.random()+1 ,
        title,
        description,
        price,
        thumbnail:pathFile,
        code,
        stock,
        }

        products.push(newProduct)

        res.status(201).json({payload :'Product created'})
})

//Modificar producto, (Enviando todos los campos obligatoriamente)

router.put('/:pid',(req,res)=>{
    const {pId} = req.params

    const {id,title,description,price,thumbnail,code,stock} = req.body

    if( !id ||!title || !description || !price || !thumbnail || !code || !stock) 
    return res.status(400).json({error : 'Bad request'})

    const product = products.find(product => product.id === pId)

    if(!product) 
    return res.status(404).json({error : 'Product not found'})

    product.title = title
    product.description = description
    product.price = price
    product.thumbnail = thumbnail
    product.code = code
    product.stock = stock

    res.json({payload : 'Product : update  '})
})

 //Modifica product sin tener que enviar todos los params de nuevo  

router.patch('/:pid',(req,res)=>{
    const {pId} = req.params

    const {title,description,price,thumbnail,code,stock} = req.body



    const product = products.find(product => product.id === pId)

    if(!product) 
    return res.status(404).json({error : 'Product not found'})

    product.title = title
    product.description = description
    product.price = price
    product.thumbnail = thumbnail
    product.code = code
    product.stock = stock

    res.json({payload : 'Product : update  '})
})


// ELiminar Producto
    router.delete('/:pid',(req,res)=>{
        const {pId} = req.params

        const productIndex = products.findIndex(product => product.id === pId)
        
        if(!productIndex=== -1) 
        return res.status(404).json({error : 'Product not found'})
    


        products.splice(productIndex,1)

        res.json({payload : 'Product deleted'})
    } )



    export default router
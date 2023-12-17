import { Router }from "express"

const router = Router


const products =[]


//Mostrar todos los productos en servidor 
router.get('/', (req, res) => {
    res.json({ payload: products });
});

//Mostar producto especifico 
router.get('/', (req, res) => {

    const {codeId} = req.params

    const product = products.find(product => product.code === codeId)

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
router.post('/',(req,res)=>{
    const {
        title,
        description,
        price,
        thumbnail,
        code,
        stock} = req.body

        const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
        }

        products.push(newProduct)

        res.status(201).json({payload :'Product created'})
})

//Modificar producto, (Enviando todos los campos obligatoriamente)

router.put('/:cId',(req,res)=>{
    const {codeId} = req.params

    const {title,description,price,thumbnail,code,stock} = req.body

    if(!title || !description || !price || !thumbnail || !code || !stock) 
    return res.status(400).json({error : 'Bad request'})

    const product = products.find(product => product.code === codeId)

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

router.patch('/:cId',(req,res)=>{
    const {codeId} = req.params

    const {title,description,price,thumbnail,code,stock} = req.body



    const product = products.find(product => product.code === codeId)

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


//Mostrar productos por ID (FALTA PORNERLES ID )
    router.get('/:pid', (req, res) => {
        const productId = Number(req.params.pid);
        const product = manager.getProductById(productId);
    
        if (product) {
            return res.json({ Product: product });
        }
        res.json({ payload: 'Producto no encontrado' });
        }
    );

    router.get('*',(req,res)=> {
        res.status(404).json({error:'Not found '})
    })

// ELiminar Producto
    router.delete('/:cId',(req,res)=>{
        const {codeId} = req.params

        const productIndex = products.findIndex(product => product.code === codeId)
        
        if(!productIndex=== -1) 
        return res.status(404).json({error : 'Product not found'})
    


        products.splice(productIndex,1)

        res.json({payload : 'Product deleted'})
    } )



    export default router

const express= require('express')


const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())


//Servidor Local 
app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});


const products =[]


//Mostrar todos los productos en servidor 
app.get('/products', (req, res) => {
    res.json({ message: products });
});


app.get('/products',(req,res) => {
    const {limit} = req.query
    if(limit){
        return res.json({ products: manager.products })
    }
    } )




// Crear Nuevo producto
app.post('/products',(req,res)=>{
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

        res.status(201).json({message :'User created'})
})

//Modificar producto 

app.put('/products/:cId',(req,res)=>{
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

    res.json({message : 'Product : update  '})
})

//Mostrar productos por ID (FALTA PORNERLES ID )
    app.get('/products/:pid', (req, res) => {
        const productId = Number(req.params.pid);
        const product = manager.getProductById(productId);
    
        if (product) {
            return res.json({ Product: product });
        }
        res.json({ message: 'Producto no encontrado' });
        }
    );

    app.get('*',(req,res)=> {
        res.status(404).json({error:'Not found '})
    })

// ELiminar Producto
    app.delete('/products/:cId',(req,res)=>{
        const {codeId} = req.params

        const productIndex = products.findIndex(product => product.code === codeId)

        if(!productIndex=== -1) 
        return res.status(404).json({error : 'Product not found'})
    


        products.splice(productIndex,1)

        res.json({message : 'Product deleted'})
    } )

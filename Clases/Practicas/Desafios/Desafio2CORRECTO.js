const fs = require('fs');
const express= require('express')

const app = express()
port = 3000


app.listen(port,()=>{
    console.log(`Server runing at port ${port}`)
})


app.get('/products',(req,res) =>{
    res.json({Products : '/Clases/Practicas/Desafios/productos.json'})

})




class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.products = this.loadProducts();
    }

    loadProducts() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data) || [];
        } catch (error) {
            return [];
        }
    }

    saveProducts() {
        const data = JSON.stringify(this.products, null, 2);
        fs.writeFileSync(this.filePath, data, 'utf8');
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        const productCode = this.products.find((con) => con.code === code);

        if (productCode) {
            console.warn(`El código ${code} ya se encuentra en nuestro registro`);
            return;
        } else {
            this.products.push(newProduct);
            console.log("Producto añadido");
            this.displayProducts();
            this.saveProducts(); // Guardar los productos en el archivo después de agregar uno nuevo
        }
    }

    getProductById(id) {
        return this.products.find((product) => product.id === id);
    }

    displayProducts() {
        console.log("Lista de productos:");
        this.products.forEach((product) => {
            console.log(`ID: ${product.id}`);
            console.log(`Título: ${product.title}`);
            console.log(`Descripción: ${product.description}`);
            console.log(`Precio: ${product.price}`);
            console.log(`Stock: ${product.stock}`);
            console.log(`Thumbnail: ${product.thumbnail}`);
            console.log(`Code: ${product.code}`);
            console.log('---');
        });
    }

    updateProduct(id, title, description, price, stock, thumbnail, code) {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1) {
            console.log("Producto no encontrado");
            return;
        }

        this.products[productIndex] = {
            ...this.products[productIndex],
            id,
            title,
            description,
            price,
            stock,
            thumbnail,
            code
        };

        // Guardar los productos en el archivo después de actualizar
        this.saveProducts();
    }

    deleteProduct(id) {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1) {
            console.log("Producto no encontrado");
            return;
        }

        this.products.splice(productIndex, 1);
        console.log("Producto eliminado");
        this.displayProducts();
        
        // Guardar los productos en el archivo después de eliminar
        this.saveProducts();
    }
}

// Ejemplo de uso:
const filePath = 'productos.json'; // Nombre del archivo donde se almacenarán los productos
const manager = new ProductManager(filePath);



// Agregar productos
manager.addProduct("Producto 1", "Descripción 1", 10.99, "imagen1.jpg", "ABC123", 100);
manager.addProduct("Producto 2", "Descripción 2", 15.99, "imagen2.jpg", "DEF456", 50);

// Buscar un producto por su ID
const product = manager.getProductById(1);
if (product) {
    console.log("Producto encontrado:");
    console.log(`ID: ${product.id}`);
    console.log(`Título: ${product.title}`);
    console.log(`Descripción: ${product.description}`);
    console.log(`Precio: ${product.price}`);
    console.log(`Stock: ${product.stock}`);
} else {
    console.log("Producto no encontrado");
}


// Mostrar la lista de productos
manager.displayProducts();

// Modificar producto
manager.updateProduct(1, "Producto Modificado", "Descripción 3", 11.99, 101, "imagen3.jpg", "ABC1234");

// Mostrar la lista actualizada de productos
manager.displayProducts();

// Eliminar Producto
manager.deleteProduct(2);

// Mostrar la lista actualizada sin el producto eliminado 
manager.displayProducts();




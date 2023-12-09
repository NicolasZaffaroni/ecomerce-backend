class ProductManager {
    constructor() {
        this.products = [];
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
            console.log('---');
        });
    }
}

// Ejemplo de uso:
const manager = new ProductManager();

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



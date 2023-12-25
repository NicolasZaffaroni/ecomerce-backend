import { Router } from "express";
import convertTonumber from "/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/src/middlewares/convert-to-number-middleware.js";

const router = Router();

const products = [];

// Crear Nuevo carrito
router.post("/", (req, res) => {
  const { quantity } = req.body;

  const newCart = {
    id: products.length + 1,
    quantity,
  };

  products.push(newCart);

  res.status(201).json({ payload: "Your cart was created successfully" });
});

//Agregar producto
router.patch("/:cid/products/:pid", (req, res) => {
  const { pid } = req.params;

  const { quantity } = req.body;

  const productIndex = products.findIndex((product) => product.id === pid);

  if (productIndex !== -1) {
    // Si el producto ya existe, actualiza la cantidad

    products[productIndex].quantity = quantity;
    return res.json({ payload: "Cart: Product quantity updated successfully" });
  }

  // Agregar producto si no existe

  const newProduct = {
    id: pid,
    quantity: quantity,
  };

  products.push(newProduct);

  res.json({ payload: "Cart: Product added successfully" });
});

//Mostrar carrito
router.get("/", (req, res) => {
  if (products.length === 0) {
    return res.json({ Cart: "Your cart is empty" });
  }

  //Productos dentro del carrito
  const cartContents = products.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }));

  res.json({
    Cart: "Your cart contains the following products",
    Products: cartContents,
  });
});

//Mostar producto especifico
router.get("/:cid/products/:pid", convertTonumber, (req, res) => {
  const { pid } = req.params;
  const { quantity } = req.query;

  const product = products.find((product) => product.id === pid);

  if (!product) return res.status(404).json({ error: "Product not found" });

  res.json({ CartProduct: product, quantity });
});

router.get("/", (req, res) => {
  const { limit } = req.query;
  if (limit) {
    return res.json({ Cart: products });
  }
});

export default router;

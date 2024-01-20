import { Router } from "express";
import fs from "fs/promises";
import convertToNumber from "../middlewares/convert-to-number-middleware.js";

const router = Router();

const CARTS_FILE_PATH = "carts.json";

let carts = [];

// Cargar carritos desde el archivo al iniciar el servidor
async function loadCarts() {
  try {
    const data = await fs.readFile(CARTS_FILE_PATH, 'utf-8');
    carts = JSON.parse(data) || [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      // El archivo no existe, así que lo creamos
      await fs.writeFile(CARTS_FILE_PATH, '[]');
      carts = [];
    } else {
      console.error('Error loading carts:', error);
    }
  }
}
// Guardar carritos en el archivo
async function saveCarts() {
  try {
    await fs.writeFile(CARTS_FILE_PATH, JSON.stringify(carts, null, 2));
  } catch (error) {
    console.error("Error saving carts:", error);
  }
}

// Cargar carritos al iniciar el servidor
loadCarts();

// Crear Nuevo carrito
router.post("/", (req, res) => {
  const { quantity } = req.body;

  const newCart = {
    id: String(carts.length + 1),
    quantity,
  };

  carts.push(newCart);
  saveCarts(); // Guardar carritos después de cada creación

  res.status(201).json({ payload: "Your cart was created successfully" });
});

// Agregar producto
router.patch("/:cid/products/:pid", (req, res) => {
  const { pid } = req.params;
  const { quantity } = req.body;

  const productIndex = carts.findIndex((product) => product.id === pid);

  if (productIndex !== -1) {
    // Si el producto ya existe, actualiza la cantidad
    carts[productIndex].quantity = quantity;
    saveCarts(); // Guardar carritos después de cada actualización
    return res.json({ payload: "Cart: Product quantity updated successfully" });
  }

  // Agregar producto si no existe
  const newProduct = {
    id: pid,
    quantity: quantity,
  };

  carts.push(newProduct);
  saveCarts(); // Guardar carritos después de cada adición

  res.json({ payload: "Cart: Product added successfully" });
});

// Mostrar carrito
router.get("/", (req, res) => {
  if (carts.length === 0) {
    return res.json({ Cart: "Your cart is empty" });
  }

  // Productos dentro del carrito
  const cartContents = carts.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }));

  res.json({
    Cart: "Your cart contains the following products",
    Products: cartContents,
  });
});

// Mostrar producto especifico
router.get("/:cid/products/:pid", convertToNumber, (req, res) => {
  const { pid } = req.params;
  const { quantity } = req.query;

  const product = carts.find((product) => product.id === pid);

  if (!product) return res.status(404).json({ error: "Product not found" });

  res.json({ CartProduct: product, quantity });
});

// Ruta adicional para mostrar todos los carritos
router.get("/all", (req, res) => {
  res.json({ Carts: carts });
});

export default router;

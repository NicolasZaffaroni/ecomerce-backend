import { Router } from "express";
import fs from "fs/promises";
import convertToNumber from "../middlewares/convert-to-number-middleware.js";
import uploader from "../utils/multer.util.js";

const router = Router();

const PRODUCTS_FILE_PATH = "products.json";

let products = [];

// Cargar productos desde el archivo al inicio del servidor
async function loadProducts() {
  try {
    const data = await fs.readFile(PRODUCTS_FILE_PATH, "utf-8");
    products = JSON.parse(data) || [];
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// Guardar productos en el archivo
async function saveProducts() {
  try {
    await fs.writeFile(PRODUCTS_FILE_PATH, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Error saving products:", error);
  }
}

// Cargar productos al iniciar el servidor
loadProducts();

// Mostrar todos los productos en el servidor
router.get("/", (req, res) => {
  res.json({ payload: products });
});

// Mostrar producto específico
router.get("/:pid", convertToNumber, (req, res) => {
  const { pid } = req.params;
  const product = products.find((product) => product.id === pid);

  if (!product) return res.status(404).json({ error: "Product not found" });

  res.json({ payload: product });
});

// Crear Nuevo producto
router.post("/", uploader.single("thumbnail"), (req, res) => {
  const { title, description, price, code, stock } = req.body;

  const newProduct = {
    id: String(products.length + 1),
    title,
    description,
    price,
    code,
    stock,
  };

  products.push(newProduct);
  saveProducts(); // Guardar productos después de cada creación

  res.status(201).json({ payload: "Product created" });
});

// Modificar producto (Enviando todos los campos obligatoriamente)
router.put("/:pid", (req, res) => {
  const { pid } = req.params;
  const { id, title, description, price, code, stock } = req.body;

  if (!id || !title || !description || !price || !code || !stock)
    return res.status(400).json({ error: "Bad request" });

  const productIndex = products.findIndex((product) => product.id === pid);

  if (productIndex === -1) return res.status(404).json({ error: "Product not found" });

  products[productIndex] = {
    id,
    title,
    description,
    price,
    code,
    stock,
  };

  saveProducts(); 
  // Guardar productos después de cada modificación

  res.json({ payload: "Product updated" });
});

// Modificar producto sin tener que enviar todos los params de nuevo
router.patch("/:pid", (req, res) => {
  const { pid } = req.params;
  const { title, description, price, code, stock } = req.body;

  const productIndex = products.findIndex((product) => product.id === pid);

  if (productIndex === -1) return res.status(404).json({ error: "Product not found" });

  products[productIndex] = {
    ...products[productIndex],
    title: title || products[productIndex].title,
    description: description || products[productIndex].description,
    price: price || products[productIndex].price,
    code: code || products[productIndex].code,
    stock: stock || products[productIndex].stock,
  };

  saveProducts(); 
  // Guardar productos después de cada modificación

  res.json({ payload: "Product updated" });
});

// Eliminar Producto
router.delete("/:pid", (req, res) => {
  const { pid } = req.params;

  const productIndex = products.findIndex((product) => product.id === pid);

  if (productIndex === -1) return res.status(404).json({ error: "Product not found" });

  products.splice(productIndex, 1);
  saveProducts(); 
  // Guardar productos después de cada eliminación

  res.json({ payload: "Product deleted" });
});

export default router;

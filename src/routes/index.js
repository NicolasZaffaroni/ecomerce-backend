import petsController from "/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/src/controllers/carts.controller.js";
import productsController from "/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/src/controllers/pets.controller.js";
import cartsController from "/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/src/controllers/products.controller.js"
import templateController from "../controllers/templates.controller.js"
const router = (app) => {
  app.use("/api/products", productsController);
  app.use("/api/pets", petsController);
  app.use("/api/carts",cartsController);
  app.use("/", templateController);
};

export default router;

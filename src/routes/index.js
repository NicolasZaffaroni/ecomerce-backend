
import productsController from "../controllers/products.controller.js";
import cartsController from "../controllers/carts.controller.js"
import templateController from "../controllers/templates.controller.js"
const router = (app) => {
  app.use("/api/products", productsController);
  app.use("/api/carts",cartsController);
  app.use("/templates", templateController);
};

export default router;

import petsController from "../../controllers/pets.controller.js";
import productsController from "../../controllers/products.controller.js";

const router = (app) => {
  app.use("/api/products", productsController);
  app.use("/api/pets", petsController);
};

export default router;

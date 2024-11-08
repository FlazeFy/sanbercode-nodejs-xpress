import express from "express";

import uploadMiddleware from "../middlewares/upload.middleware";
import uploadController from "../controllers/upload.controller";
import productsController from "../controllers/products.controller";
import categoriesController from "../controllers/categories.controller";


const router = express.Router();

router.route("/products")
    .get(productsController.findAll)
    .post(productsController.create);

router.route("/products/:id")
    .get(productsController.findOne)
    .put(productsController.update)
    .delete(productsController.delete);

router.route("/categories")
    .get(categoriesController.findAll)
    .post(categoriesController.create);

router.route("/categories/:id")
    .get(categoriesController.findOne)
    .put(categoriesController.update)
    .delete(categoriesController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;

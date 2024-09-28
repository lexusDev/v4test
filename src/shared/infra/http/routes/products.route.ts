import { Router } from "express";

import CreateProductController from "@modules/products/useCases/createProduct/CreateProductController";
import ListProductController from "@modules/products/useCases/listProduct/ListProductController";
import DeleteProductController from "@modules/products/useCases/deleteProduct/DeleteProductController";
import RetrieveProductController from "@modules/products/useCases/retrieveProduct/RetrieveProductController";
import UpdateProductController from "@modules/products/useCases/updateProduct/UpdateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();
const retrieveProductController = new RetrieveProductController();
const updateProductController = new UpdateProductController();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", listProductController.handle);
productRoutes.delete("/:code", deleteProductController.handle);
productRoutes.get("/:code", retrieveProductController.handle);
productRoutes.put("/:code", updateProductController.handle);


export { productRoutes };
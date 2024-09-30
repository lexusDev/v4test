import { Router } from "express";
import multer from "multer";

import CreateProductController from "@modules/products/useCases/createProduct/CreateProductController";
import ListProductController from "@modules/products/useCases/listProduct/ListProductController";
import DeleteProductController from "@modules/products/useCases/deleteProduct/DeleteProductController";
import RetrieveProductController from "@modules/products/useCases/retrieveProduct/RetrieveProductController";
import UpdateProductController from "@modules/products/useCases/updateProduct/UpdateProductController";
import ImportProductController from "@modules/products/useCases/importProduct/ImportProductController";

const productRoutes = Router();
const upload = multer({
    dest: "./tmp",
  });

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();
const retrieveProductController = new RetrieveProductController();
const updateProductController = new UpdateProductController();
const importProductController = new ImportProductController();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", listProductController.handle);
productRoutes.delete("/:code", deleteProductController.handle);
productRoutes.get("/:code", retrieveProductController.handle);
productRoutes.put("/:code", updateProductController.handle);
productRoutes.post(
    "/import",
    upload.single("file"),
    importProductController.handle
);


export { productRoutes };
import { Router } from "express";

import { productRoutes } from "./products.route";

const router = Router();

router.use("/products", productRoutes);

export { router};
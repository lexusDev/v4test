import { Request, Response } from "express";
import { container } from "tsyringe";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";

import { CreateProductUseCase } from "./CreateProductUseCase";
import { Product } from "@modules/products/infra/typeorm/entities/Product";

export default class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response<Product>|any> {
        const data:IProductsDTO = request.body;

        const createUserUseCase = container.resolve(CreateProductUseCase);

        const product = await createUserUseCase.execute(data);

        return response.status(201).send(product);
    }
}
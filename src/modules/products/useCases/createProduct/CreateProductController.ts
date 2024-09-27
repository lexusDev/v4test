import { Request, Response } from "express";
import { container } from "tsyringe";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";

import { CreateProductUseCase } from "./CreateProductUseCase";

export default class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data:IProductsDTO = request.body;

        const createUserUseCase = container.resolve(CreateProductUseCase);

        await createUserUseCase.execute(data);

        return response.status(201).send();
    }
}
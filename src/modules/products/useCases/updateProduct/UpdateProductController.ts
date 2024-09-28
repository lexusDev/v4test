import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductUseCase } from "./UpdateProductUseCase";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppError } from "@shared/errors/AppError";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";


export default class UpdateProductController {
    async handle(request: Request, response: Response): Promise<Response<Product>|any> {
        const { code } = request.params;
        const data:IProductsDTO = request.body;

        const updateProductUseCase = container.resolve(UpdateProductUseCase);

        if (isNaN(Number(code)))
            throw new AppError("The value passed is invalid!");

        await updateProductUseCase.execute(Number(code), data);

        return response.status(204).send();
    }
}
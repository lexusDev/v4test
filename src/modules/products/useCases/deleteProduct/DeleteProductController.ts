import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProductUseCase } from "./DeleteProductUseCase";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppError } from "@shared/errors/AppError";


export default class DeleteProductController {
    async handle(request: Request, response: Response): Promise<Response<Product>|any> {
        const { code } = request.params;

        const deleteProductUseCase = container.resolve(DeleteProductUseCase);

        if (isNaN(Number(code)))
            throw new AppError("The value passed is invalid!");

        await deleteProductUseCase.execute(Number(code));

        return response.status(204).send();
    }
}
import { Request, Response } from "express";
import { container } from "tsyringe";

import { RetrieveProductUseCase } from "./RetrieveProductUseCase";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppError } from "@shared/errors/AppError";

export default class RetrieveProductController {
    async handle(request: Request, response: Response): Promise<Response<Product[]>|any> {

        const { code } = request.params;

        const retrieveProductUseCase = container.resolve(RetrieveProductUseCase);

        if (isNaN(Number(code)))
            throw new AppError("The value passed is invalid!");

        const product = await retrieveProductUseCase.execute(Number(code));

        return response.status(200).send(product);
    }
}

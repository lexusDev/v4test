import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductUseCase } from "./ListProductUseCase";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppError } from "@shared/errors/AppError";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";

interface IRequest {
    page: string;
    limit: string;
}

export default class ListProductController {
    async handle(request: Request, response: Response): Promise<Response<Product[]>|any> {
        const { page, limit } = request.query;

        const listUserUseCase = container.resolve(ListProductUseCase);
        let product: IProductsDTO[];

        product = await listUserUseCase.execute(page, limit);

        return response.status(200).send(product);
    }
}

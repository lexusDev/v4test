import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductUseCase } from "./ListProductUseCase";
import { Product } from "@modules/products/infra/typeorm/entities/Product";


export default class ListProductController {
    async handle(request: Request, response: Response): Promise<Response<Product[]>|any> {

        const listUserUseCase = container.resolve(ListProductUseCase);

        const product = await listUserUseCase.execute();

        return response.status(201).send(product);
    }
}
